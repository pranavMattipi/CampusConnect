// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About CampusConnect */}
          <div>
            <h2 className="text-xl font-bold mb-2">CampusConnect 🎓</h2>
            <p className="text-sm text-gray-300 mb-2">
              Bringing campuses together, one event at a time. Discover, join, 
              and share your favorite college events effortlessly.
            </p>
            <p className="text-sm text-gray-300">
              Our mission is to help students explore new opportunities, build 
              networks, and make every campus event an unforgettable experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links ⚡</h3>
            <ul className="space-y-1 text-gray-300">
              <li><Link to="/" className="hover:underline">🏠 Home</Link></li>
              <li><Link to="/AllEvents" className="hover:underline">🎉 Events</Link></li>
              <li><Link to='/AboutUs' className="hover:underline">ℹ️ About Us</Link></li>
              <li><Link to="/PrivacyPolicy" className="hover:underline">🔒 Privacy & Policies</Link></li>
              <li><Link to="/Terms" className="hover:underline">📜 Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources 📚</h3>
            <ul className="space-y-1 text-gray-300">
              <li><Link to="/BlogPage" className="hover:underline">📝 Blog</Link></li>
              <li><Link to="/StudentGuide" className="hover:underline">🎓 Student Guides</Link></li>
              <li><Link to="/FAQ" className="hover:underline">❓ FAQs</Link></li>
              <li><Link to="/Support" className="hover:underline">💬 Support</Link></li>
            </ul>
          </div>

          {/* Contact & Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact & Stay Connected 🌍</h3>
            <p className="text-gray-300 text-sm mb-1">📍 Hyderabad, India</p>
            <p className="text-gray-300 text-sm mb-1">📞 +91 98765 43210</p>
            <p className="text-gray-300 text-sm mb-2">✉️ support@campusconnect.com</p>

            <p className="text-gray-300 text-sm mb-2">
              Follow us on social media for the latest updates and campus stories.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white">📘 Facebook</a>
              <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white">🐦 Twitter</a>
              <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white">📸 Instagram</a>
              <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white">💼 LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} CampusConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
