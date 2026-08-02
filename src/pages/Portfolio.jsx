import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import ProjectCard from '../components/ui/ProjectCard';
import { projectsData } from '../data/projectsData';
import { useTheme } from '../context/ThemeContext';

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const categories = ['الكل', 'تطبيقات الجوال', 'تطبيقات الديسكتوب', 'تطبيقات الويب', 'أنظمة أعمال وأتمتة'];

  const filteredProjects = activeCategory === 'الكل'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-colors duration-300 ${isDark ? 'bg-[#0F172A] text-slate-100' : 'bg-[#FAFAFB] text-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* PAGE HEADER */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border ${isDark ? 'bg-slate-800/80 text-sky-400 border-slate-700' : 'bg-sky-50 text-sky-600 border-sky-200'
              }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>معرض الأعمال والمشاريع</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-950'}`}
          >
            مشاريع رقمية <br />
            <span className="text-sky-500">مصممة بعناية ومبنية للأثر التجاري</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-base sm:text-lg leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
          >
            استعرض حلولنا البرمجية والاستراتيجيات الرقمية التي نفذناها مع شركائنا لتعزيز الكفاءة ومضاعفة عوائد النمو.
          </motion.p>
        </section>

        {/* CATEGORY FILTER TABS */}
        <section className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeCategory === cat
                  ? 'bg-sky-500 text-white shadow-md'
                  : isDark
                    ? 'bg-[#121824] text-slate-300 border border-slate-700/60 hover:bg-slate-800'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* PROJECTS GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </section>

        {/* BOTTOM CTA */}
        <section className={`text-center pt-8 p-8 rounded-3xl border shadow-xs max-w-3xl mx-auto space-y-4 ${isDark ? 'bg-[#121824] border-slate-700/60 text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
          <h3 className="text-2xl font-bold">هل لديك مشروع قادم ترغب في إطلاقه؟</h3>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>نساعدك على كتابة قصة النجاح التالية لعلامتك التجارية.</p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-sky-600 transition-colors shadow-md cursor-pointer"
          >
            <span>احجز جلسة استكشافية لمشروعك</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};

export default Portfolio;
