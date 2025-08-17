// src/pages/LoginSignupPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const topColleges = [
  "Aligarh Muslim University",
  "Amrita Vishwa Vidyapeetham",
  "Anna University",
  "Ashoka University",
  "BITS Pilani",
  "Chandigarh University",
  "Christ University",
  "Delhi University",
  "IISc Bangalore",
  "IIT BHU",
  "IIT Bhubaneswar",
  "IIT Bombay",
  "IIT Delhi",
  "IIT Dharwad",
  "IIT Gandhinagar",
  "IIT Goa",
  "IIT Guwahati",
  "IIT Hyderabad",
  "IIT Indore",
  "IIT Jodhpur",
  "IIT Kanpur",
  "IIT Kharagpur",
  "IIT Madras",
  "IIT Mandi",
  "IIT Palakkad",
  "IIT Patna",
  "IIT Roorkee",
  "IIT Tirupati",
  "IIT Jammu",
  "Jamia Millia Islamia",
  "Jadavpur University",
  "JNU Delhi",
  "Lovely Professional University",
  "Mahindra University",
  "Manipal University",
  "NIT Calicut",
  "NIT Durgapur",
  "NIT Kurukshetra",
  "NIT Meghalaya",
  "NIT Rourkela",
  "NIT Silchar",
  "NIT Surathkal",
  "NIT Trichy",
  "NIT Warangal",
  "Osmania University",
  "Pune University",
  "SRM University",
  "Shiv Nadar University",
  "Symbiosis Pune",
  "University of Hyderabad",
  "VIT Vellore",
].sort();

const CollegeLoginPage = () => {
  const [formData, setFormData] = useState({
    college: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("College Login Data:", formData);
    // 🔗 Add backend login API call here
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main container */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            College Login
          </h2>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                College
              </label>
              <select
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select your college</option>
                {topColleges.map((college, index) => (
                  <option key={index} value={college}>
                    {college}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                College Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your college email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                College Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your college password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center space-x-6 text-sm text-gray-600">
          <Link to="/PrivacyPolicy" className="hover:text-purple-600">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-purple-600">
            Terms of Service
          </Link>
          <Link to="/support" className="hover:text-purple-600">
            Support
          </Link>
          <Link to="/contact" className="hover:text-purple-600">
            Contact Us
          </Link>
          <Link to="/faq" className="hover:text-purple-600">
            FAQ
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default CollegeLoginPage;
