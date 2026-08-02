import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { GhazyLogo } from './GhazyLogo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

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

  /* ── Shared style tokens ── */
  const navBg = scrolled
    ? isDark
      ? 'bg-[#0F172A]/95 backdrop-blur-lg border-b border-slate-700/60 py-3 shadow-lg shadow-black/20'
      : 'bg-white/92 backdrop-blur-lg border-b border-slate-200/70 py-3 shadow-sm'
    : 'bg-transparent py-5';

  const linkActive   = isDark ? 'text-white font-bold'               : 'text-slate-950 font-bold';
  const linkInactive = isDark ? 'text-slate-400 hover:text-slate-100' : 'text-slate-600 hover:text-slate-900';
  const indicatorBg  = isDark ? 'bg-sky-400'                         : 'bg-slate-900';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ── Left / Start: CTA + Dark Mode Toggle + Mobile ── */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Start Project CTA */}
            <button
              onClick={() => navigate('/contact')}
              className={`hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm border cursor-pointer ${
                isDark
                  ? 'bg-sky-500 text-white hover:bg-sky-400 border-sky-400'
                  : 'bg-slate-950 text-white hover:bg-slate-800 border-slate-800'
              }`}
            >
              <span>{t('startProject')}</span>
              <ArrowLeft className="w-3.5 h-3.5 text-sky-200" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="تبديل الوضع الليلي"
              className={`inline-flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'bg-slate-800 border-slate-600 text-amber-400 hover:bg-slate-700 hover:text-amber-300'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg focus:outline-none transition-colors ${
                isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="القائمة"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* ── Center: Desktop Nav Links ── */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  isActive(link.path) ? linkActive : linkInactive
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute bottom-0 right-0 left-0 h-0.5 ${indicatorBg} rounded-full`}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* ── Right / End: Brand Logo ── */}
          <Link to="/">
            <GhazyLogo theme={isDark ? 'dark' : 'light'} />
          </Link>

        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t overflow-hidden backdrop-blur-lg ${
              isDark
                ? 'bg-[#0F172A]/98 border-slate-700'
                : 'bg-white/95 border-slate-200'
            }`}
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive(link.path)
                      ? isDark ? 'bg-sky-500/20 text-sky-300' : 'bg-slate-900 text-white'
                      : isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className={`pt-4 border-t flex flex-col gap-3 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                {/* Mobile Dark Mode Toggle */}
                <button
                  onClick={toggleTheme}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition-colors ${
                    isDark
                      ? 'bg-slate-800 text-amber-400 hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span>{isDark ? 'الوضع النهاري' : 'الوضع الليلي'}</span>
                </button>

                {/* Mobile CTA */}
                <button
                  onClick={() => navigate('/contact')}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium shadow-md ${
                    isDark ? 'bg-sky-500 text-white' : 'bg-slate-900 text-white'
                  }`}
                >
                  <span>{t('startProject')}</span>
                  <ArrowLeft className="w-4 h-4 text-sky-200" />
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
