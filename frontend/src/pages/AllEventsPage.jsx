// src/pages/AllEventsPage.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useEventStore } from "../store/events";

const AllEventsPage = () => {
  const { events, setEvents } = useEventStore();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();

        // Handle both { data: [...] } and just [...]
        const eventList = Array.isArray(data) ? data : data.data || [];
        setEvents(eventList);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [setEvents]);

  return (
    <div className="min-h-screen py-12 px-6 bg-white">
      <h1
        className="text-4xl font-bold text-gray-900 text-center mb-10"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        All Upcoming Events and Clubs
      </h1>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {events.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No events yet. Be the first to post one!
          </p>
        ) : (
          events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-80 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {event.title}
                </h2>
               
                
                <p className="text-sm text-gray-500 mb-4">
                  📅 {event.date ? new Date(event.date).toLocaleDateString() : "No date"} <br />
                  📍 {event.location || "No location"}
                </p>
                {/* Dynamic Link */}
                <Link
                                   to={`/Individual/${event._id}`}
                                   className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                                 >
                                   View Details
                                 </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllEventsPage;
