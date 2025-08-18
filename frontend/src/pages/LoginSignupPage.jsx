import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CollegeLoginPage = () => {
  const navigate = useNavigate();

  const [colleges, setColleges] = useState([]);
  const [formData, setFormData] = useState({
    college: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // 🔹 Fetch colleges from backend on component mount
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/colleges");
        setColleges(res.data); // Assuming backend returns array of college objects
      } catch (err) {
        console.error("Error fetching colleges:", err);
      }
    };

    fetchColleges();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.college || !formData.email || !formData.password) {
      setError("Please fill all fields.");
      return;
    }

    try {
      // Call backend login API
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // Check if college matches selected
      if (res.data.college !== formData.college) {
        setError("You are not registered in this college.");
        return;
      }

      // Save token in localStorage or context
      localStorage.setItem("studentToken", res.data.token);
      localStorage.setItem("studentId", res.data.studentId);
      localStorage.setItem("collegeName", res.data.college);

      // Redirect to dashboard or home page
      navigate("/dashboard");
    } catch (err) {
      console.log(err.response?.data);
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
                {colleges.map((college) => (
                  <option key={college._id} value={college.name}>
                    {college.name}
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
