import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatButton from "./components/ChatButton";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import IndividualCollegePage from "./pages/IndividualCollegePage";
import AboutUsPage from "./pages/AboutUsPage";
import AllEventsPage from "./pages/AllEventsPage";
import IndividualPage from "./pages/IndividualPage";
import BookTicketPage from "./pages/BookTicketPage";
import ProfilePage from "./pages/ProfilePage";
import ReviewsPage from "./pages/ReviewsPage";
import PostEventPage from "./pages/PostEventPage";
import ChatPage from "./pages/ChatPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import BlogPage from "./pages/BlogPage";
import SupportPage from "./pages/SupportPage";
import StudentGuidePage from "./pages/StudentGuidePage";
import FaqPage from "./pages/FaqPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function AppWrapper() {
  const location = useLocation();

  // Pages where footer and chat button should be hidden
  const hideFooterRoutes = ["/Chat"];

  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/IndividualCollege" element={<IndividualCollegePage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/AllEvents" element={<AllEventsPage />} />
        <Route path="/Individual/:id" element={<IndividualPage />} />
        <Route path="/BookTicket" element={<BookTicketPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Review" element={<ReviewsPage />} />
        <Route path="/PostEvent" element={<PostEventPage />} />
        <Route path="/Chat" element={<ChatPage />} />
        <Route path="/LogSign" element={<LoginSignupPage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/Support" element={<SupportPage />} />
        <Route path="/StudentGuide" element={<StudentGuidePage />} />
        <Route path="/FAQ" element={<FaqPage />} />
        <Route path="/Terms" element={<TermsPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
      </Routes>

      {/* Footer and Chat Button (hidden on specific routes) */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      {!hideFooterRoutes.includes(location.pathname) && <ChatButton />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
