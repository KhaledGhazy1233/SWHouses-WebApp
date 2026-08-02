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
import { ThemeProvider, useTheme } from './context/ThemeContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col selection:bg-sky-500 selection:text-white transition-colors duration-300 ${
        isDark
          ? 'bg-[#0F172A] text-slate-200'
          : 'bg-[#FAFAFB] text-slate-900'
      }`}
    >
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
  );
};

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BookingProvider>
          <Router>
            <ScrollToTop />
            <AppContent />
          </Router>
        </BookingProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
