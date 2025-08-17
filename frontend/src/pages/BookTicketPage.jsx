import React, { useState } from "react";
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
  const [contact, setContact] = useState({ email: "", phone: "" });
  const [selectedMethod, setSelectedMethod] = useState("Debit/Credit Card");
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [donate, setDonate] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  };

  const handlePay = () => {
    if (!contact.email || !contact.phone) {
      alert("Please enter valid contact details.");
      return;
    }
    alert("Payment successful (mock)!");
  };

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
                    className="bg-red-500 text-white px-6 py-2 rounded"
                  >
                    MAKE PAYMENT
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

        {/* RIGHT SIDE (Order Summary) */}
        <div className="w-80 bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-4">ORDER SUMMARY</h3>
          <div className="mb-4 text-sm">
            <p className="font-semibold">
              Mahavatar Narsimha (Telugu) (UA13+)
            </p>
            <p>Telugu, 2D</p>
            <p>Prasads Multiplex: Hyderabad (SCREEN 4)</p>
            <p>M-Ticket</p>
            <p>EXECUTIV - F20, F21</p>
            <p>Mon, 11 Aug, 2025 — 08:50 PM</p>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-2 text-sm">
            <span>Sub Total</span>
            <span>Rs. 400.00</span>
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
            <span>Rs. {459 + (donate ? 2 : 0)}.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTicketPage;
