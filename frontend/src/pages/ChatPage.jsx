// src/pages/ChatPage.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
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
  Filter,
} from "lucide-react";

/**
 * WhatsApp-like Chat (frontend only) – Purple Theme
 * - Sidebar: search, tabs (All/Unread/Favorites/Groups), pin/mute/fav, unread badges
 * - Header: avatar, name, status, actions (search, attach, menu)
 * - Messages: bubbles (me/other), timestamps, ticks (sent/delivered/read), day dividers
 * - Composer: emoji popover, attachment popover, mic/send toggle
 * - Utilities: dark mode, scroll-to-bottom, pinned order, muted marker
 */

const PURPLE = {
  primary: "bg-purple-600",
  primaryHover: "hover:bg-purple-700",
  softBgDark: "bg-[#1a1a1a]",
  paneDark: "bg-[#141414]",
  borderDark: "border-gray-700",
  textMutedDark: "text-gray-300",
  recvBubbleDark: "bg-gray-700 text-gray-100",
  inputDark: "bg-[#0f172a]", // deep slate-ish bar
};

const sampleEmojis =
  "😀😁😂🤣😅😊😍😘🤩🥳😎🤓😴🤤😮‍💨🥲🙃😉😇😌😤😡😭😱😬😷🤧🤒👍👏🙏🤝💪🔥✨🎉✅❌❤️🩷💜💙🧠🤖".split(
    ""
  );

const initialChats = [
  {
    id: "mu",
    name: "Mahindra University",
    group: true,
    lastSeen: "online",
    avatar: "MU",
    pinned: false,
    muted: false,
    favorite: false,
    unread: 0,
    messages: [
      { id: 1, from: "me", text: "Hey! How’s MU fest prep going?", time: "12:20", status: "read", date: "Today" },
      { id: 2, from: "them", text: "It’s awesome! What about your college?", time: "12:22", date: "Today" },
    ],
  },
  {
    id: "bits",
    name: "BITS Pilani",
    group: false,
    lastSeen: "last seen today at 9:45 AM",
    avatar: "BP",
    pinned: true,
    muted: false,
    favorite: true,
    unread: 2,
    messages: [
      { id: 1, from: "me", text: "Heard you guys have a hackathon soon?", time: "09:49", status: "delivered", date: "Tuesday" },
      { id: 2, from: "them", text: "Yep! You should join!", time: "09:50", date: "Tuesday" },
    ],
  },
  {
    id: "iitb",
    name: "IIT Bombay",
    group: true,
    lastSeen: "online",
    avatar: "IB",
    pinned: false,
    muted: true,
    favorite: false,
    unread: 5,
    messages: [
      { id: 1, from: "them", text: "TechFest planning starts 🚀", time: "10:15", date: "Yesterday" },
    ],
  },
  {
    id: "vit",
    name: "VIT Vellore",
    group: false,
    lastSeen: "online",
    avatar: "VV",
    pinned: false,
    muted: false,
    favorite: false,
    unread: 0,
    messages: [{ id: 1, from: "them", text: "Riviera dates are out 🎉", time: "14:02", date: "Yesterday" }],
  },
  {
    id: "amity",
    name: "Amity University",
    group: true,
    lastSeen: "online",
    avatar: "AU",
    pinned: false,
    muted: false,
    favorite: false,
    unread: 0,
    messages: [{ id: 1, from: "them", text: "Cultural fest next week!", time: "18:20", date: "Monday" }],
  },
  {
    id: "srm",
    name: "SRM University",
    group: false,
    lastSeen: "last seen yesterday",
    avatar: "SR",
    pinned: false,
    muted: false,
    favorite: false,
    unread: 0,
    messages: [
      { id: 1, from: "me", text: "AI conference sounds big", time: "11:04", status: "sent", date: "Monday" },
      { id: 2, from: "them", text: "Keynote by a Googler!", time: "11:10", date: "Monday" },
    ],
  },
];

const tickIcon = (status) => {
  if (status === "sent") return <Check className="inline-block w-3 h-3 opacity-70" />;
  if (status === "delivered")
    return <CheckCheck className="inline-block w-3 h-3 opacity-80" />;
  if (status === "read")
    return <CheckCheck className="inline-block w-3 h-3 text-blue-400" />;
  return null;
};

export default function ChatPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All"); // All | Unread | Favorites | Groups
  const [chats, setChats] = useState(initialChats);
  const [selectedId, setSelectedId] = useState("bits");
  const [message, setMessage] = useState("");
  const [showAttach, setShowAttach] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [searchInChat, setSearchInChat] = useState("");
  const [showChatSearch, setShowChatSearch] = useState(false);

  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const selectedChat = useMemo(
    () => chats.find((c) => c.id === selectedId),
    [chats, selectedId]
  );

  // Sort: pinned first, then by name asc (like WA approximated)
  const orderedChats = useMemo(() => {
    let list = chats.filter((c) =>
      c.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    if (activeTab === "Unread") list = list.filter((c) => (c.unread ?? 0) > 0);
    if (activeTab === "Favorites") list = list.filter((c) => c.favorite);
    if (activeTab === "Groups") list = list.filter((c) => c.group);

    return [
      ...list.filter((c) => c.pinned).sort((a, b) => a.name.localeCompare(b.name)),
      ...list.filter((c) => !c.pinned).sort((a, b) => a.name.localeCompare(b.name)),
    ];
  }, [chats, query, activeTab]);

  useEffect(() => {
    // Auto-scroll to bottom
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedId]);

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (!el) return;
    const onScroll = () => {
      setShowScrollBtn(el.scrollTop + el.clientHeight < el.scrollHeight - 80);
    };
    el.addEventListener("scroll", onScroll);
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [selectedId]);

  // Mark messages read when opening a chat
  useEffect(() => {
    setChats((prev) =>
      prev.map((c) =>
        c.id === selectedId ? { ...c, unread: 0 } : c
      )
    );
  }, [selectedId]);

  const togglePin = (id) =>
    setChats((prev) =>
      prev.map((c) => (c.id === id ? { ...c, pinned: !c.pinned } : c))
    );

  const toggleMute = (id) =>
    setChats((prev) =>
      prev.map((c) => (c.id === id ? { ...c, muted: !c.muted } : c))
    );

  const toggleFavorite = (id) =>
    setChats((prev) =>
      prev.map((c) => (c.id === id ? { ...c, favorite: !c.favorite } : c))
    );

  const sendMessage = () => {
    const text = message.trim();
    if (!text) return;
    const now = new Date();
    const hh = now.getHours().toString().padStart(2, "0");
    const mm = now.getMinutes().toString().padStart(2, "0");
    setChats((prev) =>
      prev.map((c) =>
        c.id === selectedId
          ? {
              ...c,
              messages: [
                ...c.messages,
                {
                  id: Date.now(),
                  from: "me",
                  text,
                  time: `${hh}:${mm}`,
                  status: "sent",
                  date: "Today",
                },
              ],
            }
          : c
      )
    );
    setMessage("");
    setTimeout(() => {
      // simulate delivered -> read transitions (frontend-only)
      setChats((prev) =>
        prev.map((c) =>
          c.id === selectedId
            ? {
                ...c,
                messages: c.messages.map((m) =>
                  m.status === "sent" ? { ...m, status: "delivered" } : m
                ),
              }
            : c
        )
      );
      setTimeout(() => {
        setChats((prev) =>
          prev.map((c) =>
            c.id === selectedId
              ? {
                  ...c,
                  messages: c.messages.map((m) =>
                    m.status === "delivered" ? { ...m, status: "read" } : m
                  ),
                }
              : c
          )
        );
      }, 700);
    }, 500);
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const insertEmoji = (e) => {
    setMessage((m) => m + e);
  };

  const attachOptions = [
    { key: "photo", label: "Photo/Video" },
    { key: "camera", label: "Camera" },
    { key: "document", label: "Document" },
    { key: "contact", label: "Contact" },
    { key: "poll", label: "Poll" },
  ];

  const filteredMessages = useMemo(() => {
    if (!searchInChat.trim()) return selectedChat?.messages ?? [];
    const q = searchInChat.toLowerCase();
    return (selectedChat?.messages ?? []).filter((m) =>
      (m.text || "").toLowerCase().includes(q)
    );
  }, [selectedChat, searchInChat]);

  return (
    <div
      className={`flex h-screen transition-colors duration-300 ${
        darkMode ? `${PURPLE.softBgDark} text-white` : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* SIDEBAR */}
      <aside className={`w-80 border-r ${PURPLE.borderDark} flex flex-col`}>
        {/* Top bar */}
        <div className={`flex items-center justify-between px-4 py-3 border-b ${PURPLE.borderDark} ${PURPLE.paneDark}`}>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center font-bold">
              P
            </div>
            <div className="font-semibold">College Chats</div>
          </div>
          <button
            onClick={() => setDarkMode((d) => !d)}
            className="p-2 rounded-full hover:bg-purple-600/20"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Search */}
        <div className="p-3">
          <div className="flex items-center gap-2 rounded-full px-3 py-2 bg-[#111111] border border-gray-700">
            <Search size={16} className="opacity-70" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
              placeholder="Search or start a new chat"
            />
            <Filter size={16} className="opacity-60" />
          </div>
        </div>

        {/* Tabs */}
        <div className="px-3 pb-2 flex gap-2">
          {["All", "Unread", "Favorites", "Groups"].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`text-xs px-3 py-1 rounded-full border ${PURPLE.borderDark} ${
                activeTab === t ? `${PURPLE.primary} text-white` : "bg-transparent"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Chat list */}
        <div className="flex-1 overflow-y-auto">
          {orderedChats.map((c) => (
            <div
              key={c.id}
              onClick={() => setSelectedId(c.id)}
              className={`group flex items-center justify-between px-3 py-3 cursor-pointer border-b ${PURPLE.borderDark} ${
                selectedId === c.id ? "bg-purple-600/25" : "hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-semibold">
                    {c.avatar}
                  </div>
                  {c.muted && (
                    <VolumeX className="w-3.5 h-3.5 absolute -bottom-1 -right-1 bg-[#1a1a1a] rounded-full p-[2px]" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{c.name}</span>
                    {c.pinned && (
                      <Pin className="w-3.5 h-3.5 opacity-70" />
                    )}
                    {c.favorite && <Star className="w-3.5 h-3.5 opacity-80" />}
                  </div>
                  <div className="text-xs text-gray-400 line-clamp-1">
                    {(c.messages.at(-1)?.from === "me" ? "You: " : "") +
                      (c.messages.at(-1)?.text ?? "")}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {c.unread > 0 && (
                  <span className="text-[11px] px-2 py-[2px] rounded-full bg-purple-600">
                    {c.unread}
                  </span>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePin(c.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-white/10"
                >
                  {c.pinned ? <PinOff className="w-4 h-4" /> : <Pin className="w-4 h-4" />}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute(c.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-white/10"
                >
                  {c.muted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(c.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-white/10"
                >
                  {c.favorite ? <StarOff className="w-4 h-4" /> : <Star className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* CHAT PANEL */}
      <section className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className={`flex items-center justify-between px-4 py-3 border-b ${PURPLE.borderDark} ${PURPLE.paneDark}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-semibold">
              {selectedChat?.avatar}
            </div>
            <div>
              <div className="font-semibold">{selectedChat?.name}</div>
              <div className="text-xs text-gray-400">{selectedChat?.lastSeen}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-white/10" title="Voice call">
              <Phone size={18} />
            </button>
            <button className="p-2 rounded-full hover:bg-white/10" title="Video call">
              <Video size={18} />
            </button>
            <button
              onClick={() => setShowChatSearch((s) => !s)}
              className="p-2 rounded-full hover:bg-white/10"
              title="Search"
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => setShowAttach((s) => !s)}
              className="relative p-2 rounded-full hover:bg-white/10"
              title="Attach"
            >
              <Paperclip size={18} />
              {/* Attach menu */}
              {showAttach && (
                <div
                  className="absolute right-0 mt-2 w-44 rounded-xl border border-gray-700 bg-[#121212] shadow-lg z-10"
                  onMouseLeave={() => setShowAttach(false)}
                >
                  {attachOptions.map((opt) => (
                    <div key={opt.key} className="px-3 py-2 text-sm hover:bg-white/5 cursor-pointer">
                      {opt.label}
                    </div>
                  ))}
                </div>
              )}
            </button>
            <button className="p-2 rounded-full hover:bg-white/10" title="Menu">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>

        {/* Optional chat search bar */}
        {showChatSearch && (
          <div className="px-4 py-2 border-b border-gray-700 bg-[#121212]">
            <input
              value={searchInChat}
              onChange={(e) => setSearchInChat(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#0f0f0f] border border-gray-700 outline-none text-sm"
              placeholder="Search in chat"
            />
          </div>
        )}

        {/* Messages */}
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto px-4 py-5 relative"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            backgroundColor: "#101010",
          }}
        >
          {/* Day separators & messages */}
          {filteredMessages.map((m, idx) => {
            const showDay =
              idx === 0 || filteredMessages[idx - 1].date !== m.date;
            return (
              <React.Fragment key={m.id}>
                {showDay && (
                  <div className="flex justify-center my-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-[#1d1d1d] border border-gray-700 text-gray-300">
                      {m.date}
                    </span>
                  </div>
                )}
                <div className={`mb-2 flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[70%] px-3 py-2 rounded-2xl text-sm shadow ${
                      m.from === "me"
                        ? `${PURPLE.primary} text-white rounded-br-md`
                        : `${PURPLE.recvBubbleDark} rounded-bl-md`
                    }`}
                  >
                    <div className="whitespace-pre-wrap break-words">{m.text}</div>
                    <div className="mt-1 flex items-center gap-1 text-[10px] opacity-80 justify-end">
                      <span>{m.time}</span>
                      {m.from === "me" && tickIcon(m.status)}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
          <div ref={messagesEndRef} />
          {/* Scroll to bottom */}
          {showScrollBtn && (
            <button
              onClick={() =>
                messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="absolute right-4 bottom-24 p-2 rounded-full shadow bg-purple-600 hover:bg-purple-700"
              title="Jump to latest"
            >
              <ArrowDown size={18} />
            </button>
          )}
        </div>

        {/* Composer */}
        <div className={`px-4 py-3 border-t ${PURPLE.borderDark} sticky bottom-0 ${PURPLE.paneDark}`}>
          <div className="flex items-center gap-2">
            {/* Emoji */}
            <div className="relative">
              <button
                onClick={() => setShowEmoji((s) => !s)}
                className="p-2 rounded-full hover:bg-white/10"
                title="Emoji"
              >
                <Smile size={20} />
              </button>
              {showEmoji && (
                <div
                  className="absolute bottom-12 left-0 w-72 max-h-56 overflow-y-auto grid grid-cols-8 gap-1 p-2 rounded-xl border border-gray-700 bg-[#121212] z-10"
                  onMouseLeave={() => setShowEmoji(false)}
                >
                  {sampleEmojis.map((e, i) => (
                    <button
                      key={i}
                      className="text-xl hover:bg-white/10 rounded p-1"
                      onClick={() => insertEmoji(e)}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Attach (dup in footer for convenience) */}
            <div className="relative">
              <button
                onClick={() => setShowAttach((s) => !s)}
                className="p-2 rounded-full hover:bg-white/10"
                title="Attach"
              >
                <Paperclip size={20} />
              </button>
              {showAttach && (
                <div
                  className="absolute bottom-12 left-0 w-44 rounded-xl border border-gray-700 bg-[#121212] shadow-lg z-10"
                  onMouseLeave={() => setShowAttach(false)}
                >
                  {attachOptions.map((opt) => (
                    <div key={opt.key} className="px-3 py-2 text-sm hover:bg-white/5 cursor-pointer">
                      {opt.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Type a message"
              className={`flex-1 rounded-full px-4 py-2 outline-none text-sm border ${PURPLE.borderDark} ${PURPLE.inputDark} placeholder-gray-400`}
            />

            {/* Mic / Send */}
            {message.trim() ? (
              <button
                onClick={sendMessage}
                className={`p-3 rounded-full ${PURPLE.primary} ${PURPLE.primaryHover} text-white`}
                title="Send"
              >
                <Send size={18} />
              </button>
            ) : (
              <button
                className="p-3 rounded-full bg-[#0f0f0f] hover:bg-white/10"
                title="Voice message (UI only)"
              >
                <Mic size={18} />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
