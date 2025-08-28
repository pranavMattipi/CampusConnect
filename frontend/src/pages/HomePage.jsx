// src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import bg1 from "../assets/view-futuristic-dj-booth.jpg";
import bg2 from "../assets/people-enjoying-night-out-together.jpg";
import bg3 from "../assets/close-up-people-wearing-masks.jpg";

const HomePage = () => {
  const images = [bg1, bg2, bg3];
  const [current, setCurrent] = useState(0);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/events");
        setEvents(res.data.data || []);
      } catch (error) {
        console.error("❌ Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // 🔥 Auto-scroll timer for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length]);

  return (
    <div>
      {/* Full-screen Carousel */}
      <div className="relative w-full h-[80vh] sm:h-[90vh] md:h-screen overflow-hidden">
        <img
          src={images[current]}
          alt="carousel"
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Welcome to CampusConnect
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl max-w-2xl">
            Discover events, clubs, and parties happening around you — join the fun today!
          </p>
          <Link
            to="/AllEvents"
            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-sm sm:text-lg font-semibold transition"
          >
            Explore Events
          </Link>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-lg sm:text-xl"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-lg sm:text-xl"
        >
          &#10095;
        </button>
      </div>

      {/* Events Section */}
      <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 relative">
        <Link
          to="/AllEvents"
          className="inline-flex items-center gap-2 hover:text-purple-600 transition"
        >
          <div className="flex space-x-2.5">
            <h2 className="text-black text-2xl sm:text-3xl font-bold mb-6">
              Upcoming Events and Clubs
            </h2>
          </div>
        </Link>

        {loading ? (
          <p className="text-center text-gray-500">Loading events...</p>
        ) : (
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() =>
                document
                  .getElementById("eventsScroll")
                  .scrollBy({ left: -300, behavior: "smooth" })
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
            >
              ◀
            </button>

            {/* Scrollable Row */}
            <div
              id="eventsScroll"
              className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden scroll-smooth px-10 py-6 no-scrollbar"
            >
              {events.slice(0, 8).map((event) => (
                <div
                  key={event._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:rounded-xl transition duration-300 h-full flex flex-col flex-shrink-0"
                  style={{ minWidth: "260px", maxWidth: "300px" }}
                >
                  <img
                    src={event.image || bg1}
                    alt={event.title}
                    className="w-full h-full sm:h-80 object-cover"
                  />
                  <div className="p-3 sm:p-4 flex flex-col flex-grow">
                    <h2 className="text-md sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                      {event.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      📅{" "}
                      {event.date
                        ? new Date(event.date).toLocaleDateString()
                        : "No date"}{" "}
                      <br />
                      📍 {event.location || "No location"}
                    </p>
                    {/* 🔥 Button always aligned at bottom */}
                    <Link
                      to={`/Individual/${event._id}`}
                      className="mt-auto bg-purple-600 text-white px-3 py-2 rounded-lg text-sm sm:text-base hover:bg-purple-700 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}

              {/* See All Card */}
              <Link
                to="/AllEvents"
                className="bg-purple-100 rounded-xl shadow-lg flex items-center justify-center text-purple-700 font-semibold text-lg flex-shrink-0"
                style={{ minWidth: "260px", maxWidth: "300px" }}
              >
                See All Events →
              </Link>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() =>
                document
                  .getElementById("eventsScroll")
                  .scrollBy({ left: 300, behavior: "smooth" })
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
            >
              ▶
            </button>
          </div>
        )}
      </div>

      {/* The Best of Live Events */}
<div
  className="py-8 px-4 sm:px-6"
  style={{
    background: "linear-gradient(to right, #2E005F, #5B00B7, #7E00E0)",
  }}
>
  <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6">
    The Best of Live Events
  </h2>

  <div className="relative">
    {/* Left Scroll Button */}
    <button
      onClick={() =>
        document
          .getElementById("categoriesScroll")
          .scrollBy({ left: -300, behavior: "smooth" })
      }
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
    >
      ◀
    </button>

    {/* Scrollable Categories Row */}
    <div
      id="categoriesScroll"
      className="flex gap-6 overflow-x-auto scroll-smooth px-10 py-4 no-scrollbar"
      style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE/Edge
      }}
    >
      {[
        {
          name: "Sports",
          gradient: "linear-gradient(135deg, #f87171, #ef4444, #b91c1c)",
        },
        {
          name: "Music",
          gradient: "linear-gradient(135deg, #60a5fa, #3b82f6, #1d4ed8)",
        },
        {
          name: "Tech",
          gradient: "linear-gradient(135deg, #34d399, #10b981, #065f46)",
        },
        {
          name: "Dance",
          gradient: "linear-gradient(135deg, #f9a8d4, #ec4899, #be185d)",
        },
        {
          name: "Drama",
          gradient: "linear-gradient(135deg, #facc15, #eab308, #ca8a04)",
        },
        {
          name: "Art",
          gradient: "linear-gradient(135deg, #c084fc, #9333ea, #581c87)",
        },
        {
          name: "Literature",
          gradient: "linear-gradient(135deg, #a5b4fc, #6366f1, #312e81)",
        },
        {
          name: "Gaming",
          gradient: "linear-gradient(135deg, #fdba74, #f97316, #9a3412)",
        },
      ].map((cat, idx) => (
        <div
          key={idx}
          className="flex items-center justify-center rounded-xl shadow-lg text-white font-bold text-xl flex-shrink-0 cursor-pointer transform hover:scale-105 transition"
          style={{
            minWidth: "220px",
            height: "150px",
            background: cat.gradient,
          }}
        >
          {cat.name}
        </div>
      ))}
    </div>

    {/* Hide scrollbars with CSS */}
    <style>
      {`
        #categoriesScroll::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>

    {/* Right Scroll Button */}
    <button
      onClick={() =>
        document
          .getElementById("categoriesScroll")
          .scrollBy({ left: 300, behavior: "smooth" })
      }
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
    >
      ▶
    </button>
  </div>
</div>


     
   {/* ⭐ Trending Now Banner */}
{events.length > 0 && (
  <div className="mt-10 px-6 mb-10">
    {/* Heading above image */}
    <h2 className="text-black text-2xl sm:text-3xl font-bold mb-4">
      🔥Trending Now
    </h2>

    <div className="relative w-full h-80 overflow-hidden rounded-2xl  shadow-lg ">
      {/* Background Image */}
      <img
        src={events[0].image || "https://images.unsplash.com/photo-1561484930-998b6a6f7d4b"}
        alt={events[0].title}
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center p-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          {events[0].title || "Trending Event"}
        </h2>
        <p className="text-gray-200 text-sm mb-4">
          📅{" "}
          {events[0].date
            ? new Date(events[0].date).toLocaleDateString()
            : "Date TBA"}{" "}
          • {events[0].city || "Location TBA"}{" "}
          {events[0].highlights ? `| 🎶 ${events[0].highlights.join(" | ")}` : ""}
        </p>

        <Link
          to={`/Individual/${events[0]._id}`}
          className="w-fit bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-medium shadow-md"
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default HomePage;
