 // src/pages/StudentGuidePage.jsx
import React from "react";

const StudentGuidePage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-700">
          Student Guide
        </h1>

        <p className="text-gray-700 text-sm sm:text-base mb-6">
          Welcome to <strong>CampusConnect</strong> 🎓 — your one-stop platform to explore events, join clubs, and connect with students across different colleges.  
          This guide will help you get started quickly and make the most of your CampusConnect experience.
        </p>

        {/* Step 1 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          1. Create Your Account
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Go to the <strong>Signup</strong> page and register using your official college email.  
          - Fill in details like your name, roll number, branch, and year.  
          - Once done, verify your email and set a strong password.  
        </p>

        {/* Step 2 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          2. Complete Your Profile
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Add your profile picture, bio, and interests.  
          - Mention your college details to help others identify you.  
          - The more complete your profile, the easier it is to connect with peers.  
        </p>

        {/* Step 3 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          3. Explore Events
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Visit the <strong>All Events</strong> page to browse upcoming events.  
          - Use filters to find events that match your interests.  
          - Click <strong>Join</strong> or <strong>Book Ticket</strong> to register.  
        </p>

        {/* Step 4 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          4. Post Your Own Event
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Go to the <strong>Post Event</strong> page.  
          - Enter details like title, description, date, time, and location.  
          - Add images and highlights to attract more participants.  
        </p>

        {/* Step 5 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          5. Join Clubs & Communities
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Explore student clubs on CampusConnect.  
          - Request to join clubs based on your interests (technical, cultural, sports, etc.).  
          - Stay updated with club activities and announcements.  
        </p>

        {/* Step 6 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          6. Connect With Students
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Visit the <strong>College Directory</strong> to find students.  
          - Send connection requests and build your network.  
          - Use chat or collaboration features to work on projects together.  
        </p>

        {/* Step 7 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          7. Get Help When Needed
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          - Facing issues? Visit the <strong>Help & Support</strong> page.  
          - Report bugs or reach out to{" "}
          <span className="text-purple-700 font-medium">
            support@campusconnect.com
          </span>.  
          - Check our{" "}
          <a href="/FAQ" className="text-purple-700 font-medium">
            FAQ section
          </a>{" "}
          for common questions.  
        </p>

        <p className="text-gray-700 text-sm sm:text-base mt-8">
          🚀 With these steps, you’re all set to explore CampusConnect. Start networking, learning, and growing today!
        </p>
      </div>
    </div>
  );
};

export default StudentGuidePage;
