import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react"; // Chat icon

const ChatButton = () => {
  return (
    <Link
      to="/Chat"
      className="fixed bottom-14 right-3 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 z-50"
    >
      <MessageCircle size={28} />
    </Link>
  );
};

export default ChatButton;
