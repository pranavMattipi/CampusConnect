// src/pages/ChatPage.jsx
import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

const ChatPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({
    "Mahindra University": [
      { from: "me", text: "Hey! How’s MU fest prep going?" },
      { from: "them", text: "It’s awesome! What about your college?" },
    ],
    "BITS Pilani": [
      { from: "me", text: "Heard you guys have a hackathon soon?" },
      { from: "them", text: "Yep! You should join!" },
    ],
  });

  const colleges = Object.keys(messages);

  const sendMessage = () => {
    if (!message.trim() || !selectedChat) return;
    setMessages((prev) => ({
      ...prev,
      [selectedChat]: [...prev[selectedChat], { from: "me", text: message }],
    }));
    setMessage("");
  };

  return (
    <div
      className={`flex h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#1a1a1a] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`w-1/4 border-r ${
          darkMode ? "border-gray-700" : "border-gray-300"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 font-bold text-lg border-b border-gray-500">
          College Chats
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-purple-500/20"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <div className="flex-1 px-1.5 py-1 space-y-1.5 overflow-y-auto">
          {colleges.map((college) => (
            <div
              key={college}
              onClick={() => setSelectedChat(college)}
              className={`p-4 cursor-pointer ${
                selectedChat === college
                  ? "bg-purple-600 text-white rounded-2xl"
                  : darkMode
                  ? "hover:bg-gray-800"
                  : "hover:bg-gray-200"
              }`}
            >
              {college}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div
              className={`p-4 font-bold border-b ${
                darkMode ? "border-gray-700" : "border-gray-300"
              }`}
            >
              {selectedChat}
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages[selectedChat].map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-xs shadow-md ${
                      msg.from === "me"
                        ? "bg-purple-600 text-white rounded-br-none"
                        : darkMode
                        ? "bg-gray-700 text-gray-100 rounded-bl-none"
                        : "bg-white text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Typing Bar */}
            <div
              className={`p-4 flex items-center gap-2 border-t ${
                darkMode ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className={`flex-1 px-4 py-2 rounded-full focus:outline-none ${
                  darkMode
                    ? "bg-gray-800 text-white placeholder-gray-400"
                    : "bg-white text-black placeholder-gray-500"
                }`}
              />
              <button
                onClick={sendMessage}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            Select a college to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
