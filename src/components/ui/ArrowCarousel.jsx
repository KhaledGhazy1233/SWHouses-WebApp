import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Reusable horizontal carousel with arrow navigation.
 * Pass children as an array of items and a renderItem function.
 */
export const ArrowCarousel = ({
  items = [],
  renderItem,
  defaultVisible = 4,
  breakpoints = { 640: 1, 768: 2, 1024: 3 },
  className = ''
}) => {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(defaultVisible);

  // Responsive visible count
  useEffect(() => {
    const updateCount = () => {
      const w = window.innerWidth;
      const sorted = Object.entries(breakpoints).sort(([a], [b]) => Number(a) - Number(b));
      let count = defaultVisible;
      for (const [bp, c] of sorted) {
        if (w < Number(bp)) {
          count = c;
          break;
        }
      }
      setVisibleCount(count);
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, [defaultVisible, breakpoints]);

  // Reset index when visible count changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, items.length - visibleCount)));
  }, [visibleCount, items.length]);

  const maxIndex = Math.max(0, items.length - visibleCount);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const visibleItems = items.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className={`relative flex items-center gap-3 sm:gap-4 ${className}`}>

      {/* Prev Arrow */}
      <button
        onClick={goPrev}
        disabled={!canGoPrev}
        className={`shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border shadow-md
          ${canGoPrev
            ? 'bg-slate-950 text-white border-slate-800 hover:bg-slate-800 active:scale-95'
            : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed shadow-none'
          }`}
        aria-label="Previous"
      >
        {lang === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
      </button>

      {/* Cards */}
      <div className="flex-1 overflow-hidden">
        <motion.div
          className="grid gap-4 sm:gap-5"
          style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, idx) => (
              <motion.div
                key={item.id || item.name || idx}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                layout
              >
                {renderItem(item, currentIndex + idx)}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Next Arrow */}
      <button
        onClick={goNext}
        disabled={!canGoNext}
        className={`shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border shadow-md
          ${canGoNext
            ? 'bg-slate-950 text-white border-slate-800 hover:bg-slate-800 active:scale-95'
            : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed shadow-none'
          }`}
        aria-label="Next"
      >
        {lang === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>

    </div>
  );
};

export default ArrowCarousel;
