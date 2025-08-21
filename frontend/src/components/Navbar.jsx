import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import "@fontsource/jost";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [collegeDropdownOpen, setCollegeDropdownOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("Hyderabad");
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState("Select College");

  const stateDropdownRef = useRef(null);
  const collegeDropdownRef = useRef(null);

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal"
  ];

  // 📌 Fetch colleges from backend
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/colleges");
        const data = await res.json();
        setColleges(data);
      } catch (err) {
        console.error("Error fetching colleges:", err);
      }
    };
    fetchColleges();
  }, []);

  // 📌 Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target)) &&
        (collegeDropdownRef.current && !collegeDropdownRef.current.contains(event.target))
      ) {
        setStateDropdownOpen(false);
        setCollegeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="w-full pl-4 md:pl-20 px-6 py-4 flex items-center justify-between shadow-lg relative"
      style={{
        background: "linear-gradient(to right, #2E005F, #5B00B7, #7E00E0)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center py-3 text-[50px] gap-3">
        <Link to="/">
          <span
            className="flex items-center font-extrabold"
            style={{
              fontFamily: "Jost, sans-serif",
              fontWeight: "1000",
              fontSize: "30px",
              color: "#fff",
            }}
          >
            CampusConnect
          </span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-white rounded-full px-3 py-2 w-[700px] max-w-full">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search Events, clubs and parties around you"
          className="flex-grow text-gray-700 outline-none text-sm"
        />
      </div>

      {/* Right Options */}
      <div
        className="hidden md:flex items-center gap-6 font-semibold relative text-white"
        style={{ fontFamily: "Jost, sans-serif" }}
      >
        {/* State Dropdown */}
        <div ref={stateDropdownRef} className="relative">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
          >
            {selectedState} <span className="text-xs">▼</span>
          </div>
          {stateDropdownOpen && (
            <div className="absolute top-8 left-0 bg-white text-black rounded shadow-lg w-48 z-50 max-h-60 overflow-y-auto">
              {states.map((state) => (
                <div
                  key={state}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedState(state);
                    setStateDropdownOpen(false);
                  }}
                >
                  {state}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* College Dropdown */}
        <div ref={collegeDropdownRef} className="relative">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setCollegeDropdownOpen(!collegeDropdownOpen)}
          >
            {selectedCollege} <span className="text-xs">▼</span>
          </div>
          {collegeDropdownOpen && (
            <div className="absolute top-8 left-0 bg-white text-black rounded shadow-lg w-56 z-50 max-h-60 overflow-y-auto">
              {colleges.length > 0 ? (
                colleges.map((college) => (
                  <div
                    key={college._id}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setSelectedCollege(college.name);
                      setCollegeDropdownOpen(false);
                    }}
                  >
                    {college.name}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">No colleges found</div>
              )}
            </div>
          )}
        </div>

        <Link to="/LogSign">
          <div className="flex items-center gap-2 cursor-pointer">
            <FaUser /> Hi, Guest
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
