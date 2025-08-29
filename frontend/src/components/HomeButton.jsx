// src/components/HomeButton.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react"; // Home icon

const HomeButton = () => {
  const location = useLocation();

  // Show this button only when you are on /Chat page
  if (location.pathname !== "/Chat") return null;

  return (
    <Link
      to="/"
      className="fixed bottom-14 right-7 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 z-50"
    >
      <Home size={28} />
    </Link>
  );
};

export default HomeButton;
