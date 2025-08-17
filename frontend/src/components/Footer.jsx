// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-bold mb-2">CampusConnect</h2>
            <p className="text-sm text-gray-300">
              Bringing campuses together, one event at a time.  
              Discover, join, and share your favorite college events effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-300">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><a href="/AllEvents" className="hover:underline">Events</a></li>
              <li><Link to='/AboutUs'>About Us</Link></li>
              <li><a href="/PrivacyPolicy" className="hover:underline">Privacy & Policies</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-gray-300 text-sm">📍 Hyderabad, India</p>
            <p className="text-gray-300 text-sm">📞 +91 98765 43210</p>
            <p className="text-gray-300 text-sm">✉️ support@campusconnect.com</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} CampusConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
