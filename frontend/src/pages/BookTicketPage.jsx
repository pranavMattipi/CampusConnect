// src/pages/BookTicketPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const paymentMethods = [
  "QuikPay",
  "Pay by any UPI App",
  "Debit/Credit Card",
  "Net Banking",
  "Mobile Wallets",
  "Gift Voucher",
  "Redeem Points",
];

const BookTicketPage = () => {
  const { id } = useParams(); // eventId from URL
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const [contact, setContact] = useState({ email: "", phone: "" });
  const [selectedMethod, setSelectedMethod] = useState("Debit/Credit Card");
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [donate, setDonate] = useState(false);
  const [processing, setProcessing] = useState(false);

  // Fetch event details
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/events/${id}`);
        setEvent(res.data.data || res.data); // backend might return .data
      } catch (error) {
        console.error("❌ Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  };

  const handlePay = async () => {
    if (!contact.email || !contact.phone) {
      alert("⚠️ Please enter valid contact details.");
      return;
    }

    const amount = (event.price || 400) + 59 + (donate ? 2 : 0);

    const bookingData = {
      eventId: id,
      contact,
      paymentMethod: selectedMethod,
      amount,
      donate,
    };

    try {
      setProcessing(true);
      const res = await axios.post("http://localhost:8000/api/bookings", bookingData);

      if (res.data.success) {
        alert(`🎉 Payment successful! Booking ID: ${res.data.bookingId}`);
        navigate(`/booking-success/${res.data.bookingId}`);
      } else {
        alert("❌ Payment failed. Please try again.");
      }
    } catch (err) {
      console.error("❌ Booking error:", err);
      alert("❌ Something went wrong while booking.");
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return <div className="text-center py-10">⏳ Loading event details...</div>;
  }

  if (!event) {
    return <div className="text-center py-10">❌ Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-8 px-4">
      <div className="max-w-6xl w-full flex gap-6">
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-4">
          {/* Contact Section */}
          <div className="bg-white rounded shadow">
            <div className="bg-red-500 text-white px-4 py-2 font-semibold">
              Share your Contact Details
            </div>
            <div className="p-4 flex gap-2">
              <input
                name="email"
                value={contact.email}
                onChange={handleContactChange}
                placeholder="Enter your email"
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none"
              />
              <input
                name="phone"
                value={contact.phone}
                onChange={handleContactChange}
                placeholder="+91"
                className="w-32 border border-gray-300 rounded px-3 py-2 focus:outline-none"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                CONTINUE
              </button>
            </div>
          </div>

          {/* Offers / Promocode */}
          <div className="bg-white rounded shadow">
            <div className="px-4 py-3 font-semibold border-b border-gray-200">
              Unlock offers or Apply Promocodes
            </div>
            <div className="p-4 text-gray-500 text-sm">
              (Feature not implemented in mock)
            </div>
          </div>

          {/* Payment Options */}
          <div className="bg-white rounded shadow flex">
            {/* Left Menu */}
            <div className="w-56 border-r border-gray-200">
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  onClick={() => setSelectedMethod(method)}
                  className={`px-4 py-3 cursor-pointer ${
                    selectedMethod === method
                      ? "bg-gray-100 font-semibold"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {method}
                </div>
              ))}
            </div>

            {/* Right Form */}
            <div className="flex-1 p-4">
              {selectedMethod === "Debit/Credit Card" && (
                <>
                  <h3 className="font-semibold mb-4">Enter your Card details</h3>
                  <input
                    name="number"
                    value={card.number}
                    onChange={handleCardChange}
                    placeholder="Card Number"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                  />
                  <input
                    name="name"
                    value={card.name}
                    onChange={handleCardChange}
                    placeholder="Name on the card"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                  />
                  <div className="flex gap-3 mb-3">
                    <input
                      name="expiry"
                      value={card.expiry}
                      onChange={handleCardChange}
                      placeholder="MM/YY"
                      className="flex-1 border border-gray-300 rounded px-3 py-2"
                    />
                    <input
                      name="cvv"
                      value={card.cvv}
                      onChange={handleCardChange}
                      placeholder="CVV"
                      className="flex-1 border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm text-gray-600">
                      Save this card information (QuikPay)
                    </span>
                  </div>
                  <button
                    onClick={handlePay}
                    disabled={processing}
                    className={`${
                      processing ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
                    } text-white px-6 py-2 rounded`}
                  >
                    {processing ? "Processing..." : "MAKE PAYMENT"}
                  </button>
                </>
              )}
              {selectedMethod !== "Debit/Credit Card" && (
                <div className="text-gray-500">
                  Payment form for "{selectedMethod}" not implemented in mock.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Dynamic Order Summary) */}
        <div className="w-80 bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-4">ORDER SUMMARY</h3>
          <div className="mb-4 text-sm">
            <p className="font-semibold">{event.title || event.name}</p>
            <p>{event.language || "English"}, {event.format || "General"}</p>
            <p>{event.location}</p>
            <p>{event.type || "M-Ticket"}</p>
            <p>{event.date} — {event.time}</p>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-2 text-sm">
            <span>Sub Total</span>
            <span>Rs. {event.price || 400}.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>+ Convenience fees</span>
            <span>Rs. 59.00</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Give to Underprivileged Musicians</span>
            <input
              type="checkbox"
              checked={donate}
              onChange={() => setDonate(!donate)}
            />
          </div>
          <div className="mt-4 border-t border-gray-200 pt-2 font-bold flex justify-between">
            <span>Amount Payable</span>
            <span>
              Rs. {(event.price || 400) + 59 + (donate ? 2 : 0)}.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTicketPage;
