// src/pages/AboutUsPage.jsx
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <div className="py-16 px-6 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold mb-4">About Campus Connect</h1>
        <p className="max-w-3xl mx-auto text-lg">
          We are a platform dedicated to making your college life exciting,
          well-connected, and full of opportunities. Campus Connect is here to
          bridge the gap between students, clubs, and events.
        </p>
      </div>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto py-12 px-6 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-lg leading-relaxed mb-6">
          Campus Connect was built by students who understand the struggles of
          staying updated on campus happenings. Whether it’s a technical
          workshop, a music concert, or a sports event, we aim to keep everyone
          informed and involved. Our platform helps students discover new
          opportunities, connect with peers, and make the most out of their
          time in college.
        </p>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="max-w-6xl mx-auto py-12 px-6 border-b border-gray-200 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
          <p>
            To create a digital hub that brings students closer to the events,
            activities, and communities that matter to them.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
          <p>
            To be the go-to platform for every student to discover, share, and
            participate in meaningful campus experiences.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Our Values</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Community</li>
            <li>Inclusivity</li>
            <li>Innovation</li>
            <li>Collaboration</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto py-12 px-6 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ol className="list-decimal list-inside space-y-3 text-lg">
            <li>Browse and explore events from different campus clubs.</li>
            <li>Save events you’re interested in for quick access.</li>
            <li>Get reminders so you never miss out on something important.</li>
            <li>Discover new clubs, interests, and communities.</li>
          </ol>
          <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">[ Image or Illustration ]</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-12 px-6 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Event Discovery", desc: "Find events tailored to your interests." },
            { title: "RSVP & Reminders", desc: "Easily sign up and get notified." },
            { title: "Club Profiles", desc: "Learn about clubs and join their activities." },
            { title: "Photo Galleries", desc: "See highlights from past events." },
            { title: "User Profiles", desc: "Customize your preferences and track your participation." },
            { title: "Live Updates", desc: "Stay informed about last-minute changes." },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="max-w-6xl mx-auto py-12 px-6 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition">
              <div className="bg-gray-300 rounded-full w-24 h-24 mx-auto mb-4"></div>
              <h3 className="text-lg font-bold text-center">Member Name</h3>
              <p className="text-sm text-center text-gray-500">Role / Position</p>
              <p className="text-sm mt-2 text-center">
                Passionate about student life, events, and building community.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Is Campus Connect free to use?</h3>
            <p>Yes! Our platform is completely free for all students.</p>
          </div>
          <div>
            <h3 className="font-semibold">Can I add my own event?</h3>
            <p>Absolutely. If you’re part of a club or organizing something, you can list your event easily.</p>
          </div>
          <div>
            <h3 className="font-semibold">Do I need to sign up?</h3>
            <p>No, you can browse events without signing up, but creating an account unlocks more features.</p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4 text-lg">
          We’d love to hear from you. Reach out with questions, ideas, or collaborations.
        </p>
        <ul className="space-y-2 text-lg">
          <li>Email: <span className="text-purple-700">contact@campusconnect.com</span></li>
          <li>Phone: <span className="text-purple-700">+91 98765 43210</span></li>
          <li>Address: <span className="text-purple-700">XYZ University, India</span></li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUsPage;
