// src/pages/LoginSignupPane.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginSignupPane = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill all fields.");
      return;
    }

    try {
      // ✅ Login API call
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // ✅ Save student details in localStorage
      localStorage.setItem("studentToken", res.data.token);
      localStorage.setItem("studentId", res.data.studentId);
      localStorage.setItem("studentName", res.data.name);
      localStorage.setItem("collegeName", res.data.college.name);

      // ✅ Redirect to homepage
      navigate("/");
    } catch (err) {
      console.error(err.response?.data);
      setError(err.response?.data?.error || "Login failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            College Login
          </h2>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
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

            {/* Password */}
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

            {/* Submit button */}
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

export default LoginSignupPane;
