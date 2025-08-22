// src/pages/IndividualCollegePage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const IndividualCollegePage = () => {
  const [college, setCollege] = useState({
    name: "Mahindra University",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1920",
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1920",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920",
    ],
    description:
      "This lore is a placeholder This is a placeholder description for Dummy College. Replace this with a real, detailed description lateThis is a placeholder description for Dummy College. Replace this with a real, detailed description later. You can include history, courses, campus facilities, student life, and other highlights to make it comprehensive and engaging for users.This is a placeholder description for Dummy College. Replace this with a real, detailed description later. You can include history, courses, campus facilities, student life, and other highlights to make it comprehensive and engaging for users.r. You can include history, courses, campus facilities, student life, and other highlights to make it comprehensive and engaging for users.description for Dummy College. Replace this with a real, detailed description later. You can include history, courses, campus facilities, student life, and other highlights to make it comprehensive and engaging for users.",
    upcomingEvents: [],
  });
  const [loading, setLoading] = useState(true);

  // Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/events");
        setCollege((prev) => ({
          ...prev,
          upcomingEvents: res.data.data || [],
        }));
      } catch (err) {
        console.error("❌ Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="bg-white min-h-screen p-6">
      {/* College Name */}
      <h1 className="text-5xl font-bold text-purple-600 text-center mb-10">
        {college.name}
      </h1>

      {/* College Images */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {college.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`college-${idx}`}
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>

      {/* College Description */}
      <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed mb-16">
        {college.description}
      </div>

      {/* Upcoming Events */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
          Upcoming Events
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading events...</p>
        ) : college.upcomingEvents.length === 0 ? (
          <p className="text-center text-gray-500">No events yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {college.upcomingEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col"
              >
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    📅 {event.date ? new Date(event.date).toLocaleDateString() : "No date"} <br />
                    📍 {event.location || "No location"}
                  </p>
                  <Link
                    to={`/Individual/${event._id}`}
                    className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IndividualCollegePage;
