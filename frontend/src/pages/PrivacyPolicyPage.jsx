// src/pages/PrivacyPolicyPage.jsx
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-700">
          Privacy Policy
        </h1>

        <p className="text-gray-700 text-sm sm:text-base mb-4">
          At CampusConnect, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          We collect information in the following categories:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4">
          <li><strong>Personal Information:</strong> Name, email, phone number, and account details you provide.</li>
          <li><strong>Event Information:</strong> Events you join, attend, or show interest in.</li>
          <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage patterns.</li>
          <li><strong>Cookies and Tracking:</strong> Data collected via cookies, analytics tools, and similar technologies.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          Your data is used to:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4">
          <li>Provide and maintain our services effectively.</li>
          <li>Personalize your experience and recommend events and clubs you may like.</li>
          <li>Communicate updates, newsletters, and promotional information.</li>
          <li>Analyze usage to improve the platform and troubleshoot issues.</li>
          <li>Prevent fraudulent or illegal activities.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          3. How We Share Your Information
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          We do not sell your personal information. However, we may share information in the following cases:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4">
          <li>With trusted third-party service providers who help us operate the platform.</li>
          <li>When required by law or legal proceedings.</li>
          <li>To protect the safety, rights, or property of CampusConnect, users, or others.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          4. Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          We use cookies and similar tracking technologies to improve site performance, provide personalized experiences, and understand user behavior. You can control cookies through your browser settings, but disabling them may affect some features.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          5. Data Security
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          We implement industry-standard security measures, including encryption, secure servers, and restricted access, to protect your personal data. While we strive to protect your information, no method is completely secure, so we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          6. Your Rights
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          You have the right to:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4">
          <li>Access the personal information we hold about you.</li>
          <li>Request correction or deletion of your personal information.</li>
          <li>Opt out of marketing communications.</li>
          <li>Withdraw consent where applicable.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          7. Children’s Privacy
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          CampusConnect is not intended for children under 13. We do not knowingly collect personal information from children. If you believe we have collected such data, please contact us, and we will take steps to remove it.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          8. Third-Party Links
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          Our platform may contain links to third-party websites. We are not responsible for their privacy practices, and we encourage you to read their privacy policies.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          9. International Users
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          If you access CampusConnect from outside India, please note that your information may be transferred and stored in servers located in India. By using our services, you consent to this transfer.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-gray-800">
          10. Changes to This Policy
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          We may update this Privacy Policy periodically. Changes will be posted on this page with a revised effective date. We encourage you to review the policy regularly.
        </p>

        <p className="text-gray-700 text-sm sm:text-base mt-6">
          For any questions or concerns regarding your privacy, please contact us at <span className="text-purple-700 font-medium">support@campusconnect.com</span>.
        </p>

        <p className="text-gray-700 text-sm sm:text-base mt-4">
          <strong>Effective Date:</strong> August 15, 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
