import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/ProjectDetails';
import ContactBooking from './pages/ContactBooking';
import { BookingProvider } from './context/BookingContext';
import { LanguageProvider } from './context/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[#FAFAFB] text-slate-900 selection:bg-sky-500 selection:text-white transition-colors duration-200">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<ProjectDetails />} />
                <Route path="/contact" element={<ContactBooking />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </BookingProvider>
    </LanguageProvider>
  );
}

export default App;
