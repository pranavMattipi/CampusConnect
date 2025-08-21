// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndividualPage from "./pages/IndividualPage";
import Footer from "./components/Footer";
import TermsPage from "./pages/TermsPage";
import ReviewsPage from "./pages/ReviewsPage";
import BlogPage from "./pages/BlogPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AllEventsPage from "./pages/AllEventsPage";
import PostEventPage from "./pages/PostEventPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import HomePage from "./pages/HomePage";

import AboutUsPage from "./pages/AboutUsPage";
import SupportPage from "./pages/SupportPage";
import StudentGuidePage from "./pages/StudentGuidePage";
import BookTicketPage from "./pages/BookTicketPage";
import FaqPage from "./pages/FaqPage";
import ChatPage from "./pages/ChatPage";

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
           <Route path="/Chat" element={<ChatPage />} />
        <Route path="/LogSign" element={<LoginSignupPage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
         <Route path="/Support" element={<SupportPage />} />
            <Route path="/StudentGuide" element={<StudentGuidePage/>} />
        <Route path="/FAQ" element={<FaqPage />} />
            <Route path="/StudentGuide" element={<SupportPage/>} />
             <Route path="/Terms" element={<TermsPage />} />
         <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
