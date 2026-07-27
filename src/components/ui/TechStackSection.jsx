import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Atom, Smartphone, Terminal, Layers, Database, ChevronLeft, ChevronRight } from 'lucide-react';
import { techStackData } from '../../data/servicesData';
import { useLanguage } from '../../context/LanguageContext';

const iconMap = {
  Cpu: Cpu,
  Atom: Atom,
  Smartphone: Smartphone,
  Terminal: Terminal,
  Layers: Layers,
  Database: Database
};

export const TechStackSection = () => {
  const { lang, t } = useLanguage();
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setPerPage(1);
      else if (w < 768) setPerPage(2);
      else if (w < 1024) setPerPage(3);
      else setPerPage(4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Reset page when perPage changes
  useEffect(() => {
    setPage(0);
  }, [perPage]);

  const totalPages = Math.ceil(techStackData.length / perPage);
  const canNext = page < totalPages - 1;
  const canPrev = page > 0;

  const goNext = useCallback(() => {
    if (canNext) setPage((p) => p + 1);
  }, [canNext]);

  const goPrev = useCallback(() => {
    if (canPrev) setPage((p) => p - 1);
  }, [canPrev]);

  const startIdx = page * perPage;
  const visibleItems = techStackData.slice(startIdx, startIdx + perPage);

  // Slide direction for animation
  const [[direction], setDirection] = useState([0]);

  const handleNext = () => {
    setDirection([1]);
    goNext();
  };
  const handlePrev = () => {
    setDirection([-1]);
    goPrev();
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-sm my-12 relative">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
          {t('techStackBadge')}
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900">
          {t('techStackTitle')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-normal">
          {t('techStackSubtitle')}
        </p>
      </div>

      {/* Carousel Wrapper with Side Arrows */}
      <div className="relative px-2 sm:px-10">
        
        {/* Left Arrow Button */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={lang === 'ar' ? handleNext : handlePrev}
            disabled={lang === 'ar' ? !canNext : !canPrev}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border shadow-md
              ${(lang === 'ar' ? canNext : canPrev)
                ? 'bg-slate-950 text-white border-slate-800 hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-lg shadow-slate-950/20'
                : 'bg-slate-100 text-slate-350 border-slate-200 cursor-not-allowed opacity-40 shadow-none'
              }`}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Cards Carousel Area */}
        <div className="overflow-hidden relative min-h-[220px] px-2">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="grid gap-5 py-2"
              style={{ gridTemplateColumns: `repeat(${perPage}, 1fr)` }}
            >
              {visibleItems.map((tech) => {
                const IconComp = iconMap[tech.icon] || Cpu;
                return (
                  <div
                    key={tech.name}
                    className="group p-6 rounded-2xl bg-[#FAFAFB] border border-slate-200/80 text-center space-y-3 flex flex-col items-center justify-center hover:shadow-xl hover:border-sky-300 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-slate-950 text-sky-400 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sky-500/10 transition-all duration-300">
                      <IconComp className="w-7 h-7 stroke-[1.8]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-950">{tech.name}</h4>
                      <p className="text-[11px] text-sky-600 font-semibold mt-0.5">
                        {lang === 'en' ? tech.categoryEn : tech.category}
                      </p>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug font-normal">
                      {lang === 'en' ? tech.descEn : tech.desc}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow Button */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={lang === 'ar' ? handlePrev : handleNext}
            disabled={lang === 'ar' ? !canPrev : !canNext}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border shadow-md
              ${(lang === 'ar' ? canPrev : canNext)
                ? 'bg-slate-950 text-white border-slate-800 hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-lg shadow-slate-950/20'
                : 'bg-slate-100 text-slate-350 border-slate-200 cursor-not-allowed opacity-40 shadow-none'
              }`}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Dot Indicators & Page Number */}
      <div className="flex flex-col items-center justify-center gap-2 pt-6">
        <span className="text-xs font-bold text-slate-400 tabular-nums">
          {page + 1} / {totalPages}
        </span>
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection([idx > page ? 1 : -1]);
                  setPage(idx);
                }}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  idx === page
                    ? 'w-8 h-2.5 bg-sky-500 shadow-sm shadow-sky-400/40'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Page ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

    </section>
  );
};

export default TechStackSection;
