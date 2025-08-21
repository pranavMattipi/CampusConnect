// src/pages/FaqPage.jsx
import React from "react";

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-700">
          Frequently Asked Questions (FAQ)
        </h1>

        <p className="text-gray-700 text-sm sm:text-base mb-6">
          Welcome to our FAQ section! Here, you’ll find answers to the most common questions students have about CampusConnect. If you don’t see your question here, feel free to reach out to us anytime.
        </p>

        {/* Question 1 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          1. What is CampusConnect?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          CampusConnect is a networking platform for college students to connect with peers from their own and other colleges. You can explore events, join clubs, collaborate on projects, and build valuable connections.
        </p>

        {/* Question 2 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          2. How do I create an account?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          You can sign up using your college email ID on the <strong>Login/Signup</strong> page. Once registered, you’ll be able to create your profile and start connecting with other students.
        </p>

        {/* Question 3 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          3. Is CampusConnect free to use?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          Yes! CampusConnect is completely free for students. Some premium features may be introduced in the future, but the core networking and event features will always remain free.
        </p>

        {/* Question 4 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          4. How can I post or join an event?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          To post an event, go to the <strong>Post Event</strong> page and fill out the details. To join an event, simply visit the <strong>All Events</strong> section, choose your event, and click "Join" or "Book Ticket".
        </p>

        {/* Question 5 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          5. How do I connect with students from other colleges?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          You can search for students through the <strong>College Directory</strong>, visit their profiles, and send connection requests. Once accepted, you can chat and collaborate.
        </p>

        {/* Question 6 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          6. What should I do if I face a problem or bug?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          Please head to the <strong>Help & Support</strong> section to report any issues. You can also contact us directly at{" "}
          <span className="text-purple-700 font-medium">support@campusconnect.com</span>.
        </p>

        {/* Question 7 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          7. Is my data safe on CampusConnect?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          Yes, we take privacy very seriously. Please refer to our{" "}
          <a href="/PrivacyPolicy" className="text-purple-700 font-medium">
            Privacy Policy
          </a>{" "}
          for detailed information on how we protect your data.
        </p>

        <p className="text-gray-700 text-sm sm:text-base mt-8">
          Didn’t find your question here? Contact us at{" "}
          <span className="text-purple-700 font-medium">support@campusconnect.com</span>.
        </p>
      </div>
    </div>
  );
};

export default FaqPage;
