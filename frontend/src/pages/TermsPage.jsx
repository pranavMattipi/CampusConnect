// src/pages/TermsPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const TermsPage = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms and Services</h1>

      <p className="mb-4">
        By accessing and using CampusConnect, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By registering, accessing, or using our services, you agree to these Terms and our Privacy Policy. If you do not agree, please discontinue using CampusConnect.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of Services</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You agree to use CampusConnect only for lawful purposes.</li>
        <li>You will not attempt to disrupt or misuse the platform.</li>
        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. User Content</h2>
      <p className="mb-4">
        You are responsible for any content you share (events, posts, comments, etc.). By submitting content, you grant us a non-exclusive right to use, display, and distribute it within the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Prohibited Activities</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Posting false, misleading, or harmful content.</li>
        <li>Attempting to hack, exploit, or disrupt our services.</li>
        <li>Engaging in harassment, abuse, or illegal activity.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Intellectual Property</h2>
      <p className="mb-4">
        All content, branding, and features of CampusConnect are protected by intellectual property laws. Unauthorized use is strictly prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
      <p className="mb-4">
        CampusConnect is not responsible for any damages, data loss, or issues arising from the use of our services. We provide the platform “as is” without warranties.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate accounts that violate these Terms, without prior notice.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms from time to time. Continued use of the platform after changes means you accept the revised Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p className="mb-8">
        If you have any questions about these Terms, please contact us at{" "}
        <span className="font-medium">support@campusconnect.com</span>.
      </p>

      {/* Return Home Button */}
      <div className="flex justify-center">
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default TermsPage;
