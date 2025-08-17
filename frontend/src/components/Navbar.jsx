import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import "@fontsource/jost";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("Hyderabad");

  const dropdownRef = useRef(null);

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal"
  ];

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setStateDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setStateDropdownOpen(false);
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
      {/* Left Logo */}
      <div className="flex items-center py-3 text-[50px] gap-3">
        <Link to="/">
          <span
            className="flex items-center font-extrabold"
            style={{
              fontFamily: "Jost, sans-serif",
              fontWeight: "1000",
              fontSize: "30px",
              letterSpacing: "0",
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

      {/* Search Bar (Desktop Only) */}
      <div className="hidden md:flex items-center bg-white rounded-full px-3 py-2 w-[700px] max-w-full">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search Events, clubs and parties around you"
          className="flex-grow text-gray-700 outline-none text-sm"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Right Options (Desktop Only) */}
      <div
        className="hidden md:flex items-center gap-6 font-semibold relative"
        style={{
          fontFamily: "Jost, sans-serif",
          fontWeight: "700",
          fontSize: "16px",
          color: "#fff",
        }}
      >
        {/* State Dropdown */}
        <div
          className="flex items-center gap-1 cursor-pointer relative"
          onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
          ref={dropdownRef}
        >
          {selectedState} <span className="text-xs">▼</span>
          {stateDropdownOpen && (
            <div className="absolute top-8 left-0 bg-white text-black rounded shadow-lg w-48 z-50 max-h-60 overflow-y-auto">
              {states.map((state) => (
                <div
                  key={state}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleStateSelect(state)}
                >
                  {state}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 cursor-pointer">
          College <span className="text-xs">▼</span>
        </div>

        <Link to="/LogSign">
          <div className="flex items-center gap-2 cursor-pointer">
            <FaUser /> Hi, Guest
          </div>
        </Link>
      </div>

      {/* Mobile Menu (Full Width) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#2E005F] text-white flex flex-col p-6 gap-4 md:hidden z-50">
          {/* Search Bar (Mobile) */}
          <div className="flex items-center bg-white rounded-full px-3 py-2 w-full">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search Events, clubs and parties around you"
              className="flex-grow text-gray-700 outline-none text-sm"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "14px",
              }}
            />
          </div>

          {/* State Dropdown (Mobile) */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center justify-between cursor-pointer py-2"
              onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
            >
              {selectedState} <span className="text-xs">▼</span>
            </div>
            {stateDropdownOpen && (
              <div className="bg-white text-black rounded shadow-lg mt-2 w-full max-h-48 overflow-y-auto">
                {states.map((state) => (
                  <div
                    key={state}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleStateSelect(state)}
                  >
                    {state}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="cursor-pointer">College ▼</div>

          <Link to="/LogSign" className="flex items-center gap-2 cursor-pointer">
            <FaUser /> Hi, Guest
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
