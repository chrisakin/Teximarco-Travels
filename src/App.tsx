import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import HotelsPage from './pages/HotelsPage';
import VisaPage from './pages/VisaPage';
import ProofOfFundsPage from './pages/ProofOfFundsPage';
import TripPlannerPage from './pages/TripPlannerPage';
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;