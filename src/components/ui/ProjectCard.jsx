import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpLeft, ExternalLink, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ProjectCard = ({ project, index = 0 }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={() => navigate(`/portfolio/${project.id}`)}
      className="group relative bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Image thumbnail header with badge */}
      <div className="relative h-56 md:h-64 w-full overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-900 shadow-sm border border-white/50">
            {project.category}
          </span>
        </div>

        {/* Year tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-900/70 backdrop-blur-md text-sky-400 border border-slate-700/60">
            {project.year}
          </span>
        </div>

        {/* Hover arrow overlay */}
        <div className="absolute bottom-4 left-4 z-10 w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowUpLeft className="w-5 h-5 text-slate-950" />
        </div>
      </div>

      {/* Content body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs text-sky-600 font-semibold mb-1 tracking-wide">
            {project.client}
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed font-normal">
            {project.summary}
          </p>
        </div>

        {/* Stats highlight grid */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 bg-slate-50/60 -mx-2 px-3 py-2.5 rounded-xl">
            {project.stats.slice(0, 2).map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-lg font-extrabold text-slate-950 leading-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] text-slate-500 font-medium truncate">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tags footer */}
        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
            عرض التفاصيل
            <ArrowUpLeft className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
