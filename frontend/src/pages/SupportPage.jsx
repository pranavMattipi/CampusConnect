// src/pages/SupportPage.jsx
import React from "react";

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-700">
          Student Support
        </h1>

        <p className="text-gray-700 text-sm sm:text-base mb-6">
          Welcome to the <strong>CampusConnect Support Center</strong> 💡.  
          Here you’ll find everything you need to get started, explore events, join clubs, and resolve any issues.
        </p>

        {/* Step 1 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          1. Create Your Account
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Sign up with your college email.  
          - Fill in your details (name, roll number, branch, year).  
          - Verify your email and set a strong password.  
        </p>

        {/* Step 2 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          2. Complete Your Profile
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Upload a profile picture and add your bio.  
          - Mention your academic details and interests.  
        </p>

        {/* Step 3 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          3. Explore & Join Events
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Browse upcoming events from your dashboard.  
          - Filter by type and interests.  
          - Click <strong>Join</strong> or <strong>Book Ticket</strong> to participate.  
        </p>

        {/* Step 4 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          4. Post Your Own Event
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Go to <strong>Post Event</strong> and fill in details.  
          - Add images and highlights to reach more students.  
        </p>

        {/* Step 5 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          5. Join Clubs & Communities
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Explore clubs (tech, cultural, sports, etc.).  
          - Request to join and stay updated with announcements.  
        </p>

        {/* Step 6 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          6. Connect With Students
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Use the <strong>College Directory</strong> to find peers.  
          - Send connection requests and build your student network.  
        </p>

        {/* Step 7 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          7. Need Help?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Check our{" "}
          <a href="/FAQ" className="text-purple-700 font-medium">
            FAQ Page
          </a>{" "}
          for common questions.  
          - Report issues via{" "}
          <span className="text-purple-700 font-medium">
            support@campusconnect.com
          </span>.  
          - For urgent help, contact your college admin.  
        </p>

        <p className="text-gray-700 text-sm sm:text-base mt-8">
          🚀 With CampusConnect, you’re ready to explore, learn, and grow.  
          Our support team is here whenever you need assistance.
        </p>
      </div>
    </div>
  );
};

export default SupportPage;
