import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft, ArrowRight, Zap, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('navHome'), path: '/' },
    { name: t('navAbout'), path: '/about' },
    { name: t('navServices'), path: '/services' },
    { name: t('navPortfolio'), path: '/portfolio' },
    { name: t('navContact'), path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Action buttons: Start Project + Language Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/contact')}
              className="hidden sm:inline-flex items-center gap-2 bg-slate-950 text-white hover:bg-slate-800 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm border border-slate-800 cursor-pointer"
            >
              <span>{t('startProject')}</span>
              {lang === 'ar' ? (
                <ArrowLeft className="w-3.5 h-3.5 text-sky-400" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
              )}
            </button>

            {/* Language Switcher Icon Button */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold bg-white border border-slate-200 text-slate-900 hover:bg-slate-100 transition-colors shadow-2xs cursor-pointer"
              title="تغيير اللغة / Change Language"
            >
              <Globe className="w-4 h-4 text-sky-600" />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="القائمة"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  isActive(link.path)
                    ? 'text-slate-950 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 right-0 left-0 h-0.5 bg-slate-900 rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform duration-200">
              <Zap className="w-4 h-4 fill-sky-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tight text-slate-900 leading-none">
                STRATOS <span className="text-sky-600">DIGITAL</span>
              </span>
              <span className="text-[9px] text-slate-500 font-medium tracking-widest leading-none mt-0.5">
                PRECISION IN TRANSFORMATION
              </span>
            </div>
          </Link>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-slate-200 overflow-hidden bg-white/95 backdrop-blur-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <button
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-2.5 rounded-xl font-bold text-xs"
                >
                  <Globe className="w-4 h-4 text-sky-600" />
                  <span>{lang === 'ar' ? 'التحويل إلى الللغة الإنجليزية (English)' : 'Switch to Arabic (اللغة العربية)'}</span>
                </button>

                <button
                  onClick={() => navigate('/contact')}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-medium shadow-md"
                >
                  <span>{t('startProject')}</span>
                  {lang === 'ar' ? <ArrowLeft className="w-4 h-4 text-sky-400" /> : <ArrowRight className="w-4 h-4 text-sky-400" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
