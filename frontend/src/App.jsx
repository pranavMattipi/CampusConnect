// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndividualPage from "./pages/IndividualPage";
import Footer from "./components/Footer";
import TermsPage from "./pages/TermsPage";
import ReviewsPage from "./pages/ReviewsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AllEventsPage from "./pages/AllEventsPage";
import PostEventPage from "./pages/PostEventPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import BookTicketPage from "./pages/BookTicketPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/AllEvents" element={<AllEventsPage />} />
        <Route path="/Individual/:id" element={<IndividualPage />} /> {/* ✅ Dynamic route */}
        <Route path="/BookTicket" element={<BookTicketPage />} />
        <Route path="/Review" element={<ReviewsPage />} />
        <Route path="/PostEvent" element={<PostEventPage />} />
        <Route path="/LogSign" element={<LoginSignupPage />} />
             <Route path="/Terms" element={<TermsPage />} />
         <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
