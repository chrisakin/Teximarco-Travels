import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import HotelsPage from './pages/HotelsPage';
import VisaPage from './pages/VisaPage';
import ProofOfFundsPage from './pages/ProofOfFundsPage';
import TripPlannerPage from './pages/TripPlannerPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import HelpCenterPage from './pages/HelpCenterPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import FlightSearchResultsPage from './pages/FlightSearchResultsPage';
import FlightDetailsPage from './pages/FlightDetailsPage';
import PassengerDetailsPage from './pages/PassengerDetailsPage';
import SeatSelectionPage from './pages/SeatSelectionPage';
import BookingReviewPage from './pages/BookingReviewPage';
import PaymentPage from './pages/PaymentPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/visa" element={<VisaPage />} />
          <Route path="/proof-of-funds" element={<ProofOfFundsPage />} />
          <Route path="/trip-planner" element={<TripPlannerPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/flight-results" element={<FlightSearchResultsPage />} />
          <Route path="/flight-details" element={<FlightDetailsPage />} />
          <Route path="/passenger-details" element={<PassengerDetailsPage />} />
          <Route path="/seat-selection" element={<SeatSelectionPage />} />
          <Route path="/booking-review" element={<BookingReviewPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;