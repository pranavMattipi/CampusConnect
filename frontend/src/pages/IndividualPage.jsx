import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const IndividualPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/events/${id}`);
        setEvent(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("❌ Error fetching event:", error);
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading event...</div>;
  if (!event) return <div className="text-center py-10">Event not found</div>;

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {event.highlights.map((tag, idx) => (
              <span
                key={idx}
                className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-gray-700 mb-6 space-y-1">
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>Time:</strong> {event.time}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
          </div>
          <div className="flex gap-4">
           <Link
  to={`/BookTicket/${event._id}`}
  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
>
  🎟 Book Tickets
</Link>
            <Link
              to={`/Review`}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              ⭐ Read Reviews
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
        <p className="text-gray-600 leading-relaxed">{event.description}</p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 flex items-center gap-4 mb-12">
        <img
          src={event.organizerLogo}
          alt="Organizer"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-lg">{event.organizerName}</h3>
          <p className="text-gray-600">Leading event organizer</p>
        </div>
      </div>

      {event.castMembers?.length > 0 && (
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Cast</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {event.castMembers.map((cast, index) => (
              <div key={index} className="flex-shrink-0 w-28">
                <img
                  src={cast.img}
                  alt={cast.name}
                  className="w-28 h-28 object-cover rounded-full border-2 border-gray-300"
                />
                <p className="mt-2 text-center text-sm">{cast.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualPage;
