import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Filter } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/common/Button';
import { projectsData } from '../data/projectsData';

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const navigate = useNavigate();

  const categories = ['الكل', 'تطبيق جوال وويب', 'أنظمة أعمال وأتمتة', 'تطبيقات الويب والجوال', 'استراتيجية المنتج والويب'];

  const filteredProjects = activeCategory === 'الكل'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAFAFB] text-slate-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* PAGE HEADER */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-600 border border-sky-200"
          >
            <span>معرض الأعمال والمشاريع</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            مشاريع رقمية <br />
            <span className="cyan-gradient-text">مصممة بعناية ومبنية للأثر التجاري</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
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
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-950 text-white shadow-sm'
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
        <section className="text-center pt-8 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">هل لديك مشروع قادم ترغب في إطلاقه؟</h3>
          <p className="text-sm text-slate-600">نساعدك على كتابة قصة النجاح التالية لعلامتك التجارية.</p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 bg-slate-950 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-md cursor-pointer"
          >
            <span>احجز جلسة استكشافية لمشروعك</span>
            <ArrowLeft className="w-4 h-4 text-sky-400" />
          </button>
        </section>

      </div>
    </div>
  );
};

export default Portfolio;
