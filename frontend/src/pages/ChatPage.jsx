// src/pages/ChatPage.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Search,
  MoreVertical,
  Paperclip,
  Smile,
  Mic,
  Send,
  Sun,
  Moon,
  Pin,
  PinOff,
  Volume2,
  VolumeX,
  Star,
  StarOff,
  ArrowDown,
  Phone,
  Video,
  Check,
  CheckCheck,
  Home,
} from "lucide-react";

export default function ChatPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [chats, setChats] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [message, setMessage] = useState("");
  const [showAttach, setShowAttach] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [searchInChat, setSearchInChat] = useState("");
  const [showChatSearch, setShowChatSearch] = useState(false);

  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // ✅ Load messages from localStorage on mount
  useEffect(() => {
    const savedChats = localStorage.getItem("chats");
    if (savedChats) {
      const parsed = JSON.parse(savedChats);
      setChats(parsed);
      if (parsed.length > 0) setSelectedId(parsed[0].id);
      return; // prevent re-fetch if stored
    }

    // ✅ Fetch colleges from backend if no saved chats
    const fetchColleges = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/colleges");
        const colleges = res.data;

        const mappedChats = colleges.map((college) => ({
          id: college._id,
          name: college.name,
          group: true,
          lastSeen: "online",
          avatar: college.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)
            .toUpperCase(),
          pinned: false,
          muted: false,
          favorite: false,
          unread: Math.floor(Math.random() * 5),
          messages: [
            {
              id: 1,
              from: "them",
              text: `${college.name} events and updates will appear here soon! 🎉`,
              time: "12:00",
              date: "Today",
            },
          ],
        }));

        setChats(mappedChats);
        localStorage.setItem("chats", JSON.stringify(mappedChats));
        if (mappedChats.length > 0) setSelectedId(mappedChats[0].id);
      } catch (err) {
        console.error("Error fetching colleges:", err);
      }
    };

    fetchColleges();
  }, []);

  // ✅ Persist chats whenever they change
  useEffect(() => {
    if (chats.length > 0) {
      localStorage.setItem("chats", JSON.stringify(chats));
    }
  }, [chats]);

  const selectedChat = chats.find((c) => c.id === selectedId);

  const filteredChats = useMemo(() => {
    return chats.filter((chat) => {
      if (activeTab === "Unread" && chat.unread === 0) return false;
      if (activeTab === "Pinned" && !chat.pinned) return false;
      if (activeTab === "Favorites" && !chat.favorite) return false;
      if (query && !chat.name.toLowerCase().includes(query.toLowerCase()))
        return false;
      return true;
    });
  }, [chats, activeTab, query]);

  const handleSend = () => {
    if (!message.trim() || !selectedChat) return;

    const newMessage = {
      id: Date.now(),
      from: "me",
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: "Today",
      status: "sent",
    };

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === selectedId
          ? { ...chat, messages: [...chat.messages, newMessage], unread: 0 }
          : chat
      )
    );
    setMessage("");
  };

  // ✅ Scroll into view when new message added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedChat?.messages]);

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        messagesContainerRef.current;
      setShowScrollBtn(scrollTop < scrollHeight - clientHeight - 50);
    }
  };

  // ✅ toggle pin, mute, favorite
  const toggleChatProp = (id, prop) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === id ? { ...chat, [prop]: !chat[prop] } : chat
      )
    );
  };

  return (
    <div
      className={`flex h-screen overflow-hidden relative ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`w-100 shrink-0 border-r ${
          darkMode ? "border-gray-800" : "border-gray-200"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="px-4 py-3 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Chats</h2>
          <div className="flex gap-2">
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button>
              <MoreVertical size={18} />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="px-3 pb-2">
          <div
            className={`flex items-center px-2 py-1.5 rounded-md ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <Search size={16} className="mr-2 text-gray-400" />
            <input
              className={`bg-transparent w-full text-sm outline-none ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex px-3 gap-4 text-xs font-medium border-b border-gray-700/30">
          {["All", "Unread", "Pinned", "Favorites"].map((tab) => (
            <button
              key={tab}
              className={`py-2 ${
                activeTab === tab
                  ? "border-b-2 border-purple-500 text-purple-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
                selectedId === chat.id
                  ? darkMode
                    ? "bg-gray-800"
                    : "bg-gray-100"
                  : ""
              }`}
              onClick={() => setSelectedId(chat.id)}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                {chat.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm truncate">
                    {chat.name}
                  </span>
                  <span className="text-[11px] text-gray-500">
                    {chat.lastSeen}
                  </span>
                </div>
                <p className="text-xs text-gray-500 truncate">
                  {chat.messages[chat.messages.length - 1]?.text}
                </p>
              </div>
              {chat.unread > 0 && (
                <span className="bg-purple-500 text-white text-[11px] px-2 py-0.5 rounded-full">
                  {chat.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div
              className={`px-4 py-3 flex justify-between items-center border-b ${
                darkMode ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  {selectedChat.avatar}
                </div>
                <div>
                  <h3 className="font-medium text-sm">{selectedChat.name}</h3>
                  <p className="text-[11px] text-gray-500">
                    {selectedChat.lastSeen}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => toggleChatProp(selectedChat.id, "pinned")}>
                  {selectedChat.pinned ? <PinOff size={16} /> : <Pin size={16} />}
                </button>
                <button onClick={() => toggleChatProp(selectedChat.id, "muted")}>
                  {selectedChat.muted ? (
                    <VolumeX size={16} />
                  ) : (
                    <Volume2 size={16} />
                  )}
                </button>
                <button
                  onClick={() => toggleChatProp(selectedChat.id, "favorite")}
                >
                  {selectedChat.favorite ? (
                    <StarOff size={16} />
                  ) : (
                    <Star size={16} />
                  )}
                </button>
                <button>
                  <Phone size={16} />
                </button>
                <button>
                  <Video size={16} />
                </button>
                <button>
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
              onScroll={handleScroll}
              ref={messagesContainerRef}
            >
              {selectedChat.messages
                .filter((msg) =>
                  searchInChat
                    ? msg.text
                        .toLowerCase()
                        .includes(searchInChat.toLowerCase())
                    : true
                )
                .map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.from === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        msg.from === "me"
                          ? "bg-purple-500 text-white"
                          : darkMode
                          ? "bg-gray-800"
                          : "bg-gray-200"
                      }`}
                    >
                      {msg.text}
                      <div className="text-[10px] text-right opacity-70 mt-1">
                        {msg.time}{" "}
                        {msg.from === "me" &&
                          (msg.status === "sent" ? (
                            <Check size={11} className="inline ml-1" />
                          ) : msg.status === "delivered" ? (
                            <CheckCheck size={11} className="inline ml-1" />
                          ) : null)}
                      </div>
                    </div>
                  </div>
                ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Scroll Down Button */}
            {showScrollBtn && (
              <button
                className="absolute bottom-24 right-6 p-2 bg-black text-white rounded-full shadow-lg"
                onClick={() =>
                  messagesEndRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                <ArrowDown size={18} />
              </button>
            )}

            {/* Input */}
            <div
              className={`px-4 py-3 border-t flex items-center gap-2 ${
                darkMode ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <button onClick={() => setShowAttach(!showAttach)}>
                <Paperclip size={18} />
              </button>
              <button onClick={() => setShowEmoji(!showEmoji)}>
                <Smile size={18} />
              </button>
              <input
                className={`flex-1 px-3 py-2 rounded-md text-sm outline-none ${
                  darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-purple-500 text-white p-2 rounded-md"
              >
                <Send size={16} />
              </button>
              <button>
                <Mic size={18} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">Select a chat to start messaging</p>
          </div>
        )}
      </div>

      {/* ✅ Floating Home Button */}
      <Link
        to="/"
        className="fixed bottom-14 right-7 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 z-50"
      >
        <Home size={28} />
      </Link>
    </div>
  );
}
