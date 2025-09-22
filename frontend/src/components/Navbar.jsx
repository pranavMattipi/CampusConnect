import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import "@fontsource/jost";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [collegeDropdownOpen, setCollegeDropdownOpen] = useState(false);
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);

  const [selectedState, setSelectedState] = useState("Hyderabad");
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState("Select College");

  // ✅ Track logged-in user
  const [studentName, setStudentName] = useState(null);

  // ✅ Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const stateDropdownRef = useRef(null);
  const collegeDropdownRef = useRef(null);
  const guestDropdownRef = useRef(null);
  const searchDropdownRef = useRef(null);

  const navigate = useNavigate();

  const states = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Indore",
    "Bhopal",
    "Chandigarh",
    "Coimbatore",
    "Nagpur",
    "Visakhapatnam",
    "Patna",
    "Kanpur",
    "Surat",
    "Thiruvananthapuram",
  ];

  // 📌 Fetch colleges + login check
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

    // ✅ Check if user is logged in
    const name = localStorage.getItem("studentName");
    if (name) setStudentName(name);
  }, []);

  // 📌 Fetch events dynamically as user types
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowSearchDropdown(false);
      return;
    }

    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/events?search=${searchQuery}`
        );
        const data = await res.json();

        // ✅ Sort results alphabetically by title
        const sorted = (data.data || []).sort((a, b) =>
          a.title.localeCompare(b.title)
        );

        setSearchResults(sorted);
        setShowSearchDropdown(true);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    const delayDebounce = setTimeout(fetchEvents, 300); // debounce typing
    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  // 📌 Close dropdowns on outside click (fixed)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target)) {
        setStateDropdownOpen(false);
      }
      if (collegeDropdownRef.current && !collegeDropdownRef.current.contains(event.target)) {
        setCollegeDropdownOpen(false);
      }
      if (guestDropdownRef.current && !guestDropdownRef.current.contains(event.target)) {
        setGuestDropdownOpen(false);
      }
      if (searchDropdownRef.current && !searchDropdownRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentId");
    setStudentName(null);
    setGuestDropdownOpen(false);
  };

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
      <div
        className="hidden md:flex items-center bg-white rounded-full px-3 py-2 w-[700px] max-w-full relative"
        ref={searchDropdownRef}
      >
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search Events, clubs and parties around you"
          className="flex-grow text-gray-700 outline-none text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() =>
            searchResults.length > 0 && setShowSearchDropdown(true)
          }
        />

        {/* Dropdown Results */}
        {showSearchDropdown && searchResults.length > 0 && (
          <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-full max-h-60 overflow-y-auto z-50">
            {searchResults.map((event) => (
              <div
                key={event._id}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  navigate(`/Individual/${event._id}`);
                  setSearchQuery("");
                  setShowSearchDropdown(false);
                }}
              >
                {event.title}
              </div>
            ))}
          </div>
        )}
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
            onClick={() => {
              setStateDropdownOpen(!stateDropdownOpen);
              setGuestDropdownOpen(false); // close others
              setCollegeDropdownOpen(false);
            }}
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

        {/* Hi, Guest / User Dropdown */}
        <div ref={guestDropdownRef} className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setGuestDropdownOpen(!guestDropdownOpen);
              setStateDropdownOpen(false); // close others
              setCollegeDropdownOpen(false);
            }}
          >
            <FaUser /> Hi, {studentName || "Guest"}{" "}
            <span className="text-xs">▼</span>
          </div>

          {guestDropdownOpen && (
            <div className="absolute top-8 right-0 bg-white text-black rounded shadow-lg w-40 z-50">
              {!studentName ? (
                <Link to="/LogSign">
                  <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Login
                  </div>
                </Link>
              ) : (
                <>
                  <Link to="/profile">
                    <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Profile
                    </div>
                  </Link>
                  <div
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
