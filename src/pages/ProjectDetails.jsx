import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, TrendingUp, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import Button from '../components/common/Button';

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id) || projectsData[0];

  return (
    <div className="min-h-screen bg-[#FAFAFB] text-slate-900 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Back Link */}
        <div>
          <button
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة لمعرض الأعمال</span>
          </button>
        </div>

        {/* HEADER SECTION */}
        <section className="space-y-4 text-right">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-600 border border-sky-200">
              {project.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">سنة الإنتاج: {project.year}</span>
            <span className="text-xs text-slate-500 font-medium">العميل: {project.client}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </section>

        {/* MAIN FEATURED IMAGE */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-80 sm:h-[450px] bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* STATS HIGHLIGHT ROW */}
        {project.stats && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-sky-600">{stat.value}</div>
                <div className="text-xs text-slate-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* CASE STUDY CONTENT: CHALLENGE & SOLUTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-3 text-right">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              ⚡
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">التحدي الرئيسي</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-3 text-right">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              🎯
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">الحل والنهج المتبع</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* TAGS & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                #{tag}
              </span>
            ))}
          </div>

          <Button
            variant="primary"
            size="md"
            icon={ArrowLeft}
            onClick={() => navigate('/contact')}
          >
            نُفذ مشروعاً ممكناً لمؤسستك
          </Button>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
