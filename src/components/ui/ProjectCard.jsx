import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpLeft } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { LaborexLogoCard } from './LaborexLogoCard';
import { MatgarLogoCard } from './MatgarLogoCard';
import { TantaLogoCard } from './TantaLogoCard';
import { QadiaLogoCard } from './QadiaLogoCard';
import { EcommerceLogoCard } from './EcommerceLogoCard';
import { LetopiaLogoCard } from './LetopiaLogoCard';
import { StreakLogoCard } from './StreakLogoCard';

export const ProjectCard = ({ project, index = 0 }) => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const renderCardThumbnail = () => {
    if (project.id === 'laborex-pharma') {
      return <LaborexLogoCard isThumbnail={true} />;
    }
    if (project.id === 'matgar-saas') {
      return <MatgarLogoCard isThumbnail={true} />;
    }
    if (project.id === 'tanta-university-app') {
      return <TantaLogoCard isThumbnail={true} />;
    }
    if (project.id === 'qadia-legal-desktop') {
      return <QadiaLogoCard isThumbnail={true} />;
    }
    if (project.id === 'ecommerce-depi-platform') {
      return <EcommerceLogoCard isThumbnail={true} />;
    }
    if (project.id === 'letopia-platform') {
      return <LetopiaLogoCard isThumbnail={true} />;
    }
    if (project.id === 'streak-restaurant') {
      return <StreakLogoCard isThumbnail={true} />;
    }
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
      />
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={() => navigate(`/portfolio/${project.id}`)}
      className={`group relative rounded-2xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer ${isDark
          ? 'bg-[#121824] border-slate-700/60 hover:border-sky-700/50'
          : 'bg-white border-slate-200/80 hover:border-slate-300'
        }`}
    >
      {/* Image thumbnail header with badge */}
      <div className="relative h-56 md:h-64 w-full overflow-hidden bg-slate-900">
        {renderCardThumbnail()}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

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
          <div className="text-xs text-sky-500 font-semibold mb-1 tracking-wide">
            {project.client}
          </div>
          <h3 className={`text-xl font-extrabold group-hover:text-sky-500 transition-colors leading-snug ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
            {project.title}
          </h3>
          <p className={`mt-2 text-sm line-clamp-2 leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {project.summary}
          </p>
        </div>

        {/* Stats highlight grid */}
        {project.stats && project.stats.length > 0 && (
          <div className={`grid grid-cols-2 gap-2 pt-3 border-t -mx-2 px-3 py-2.5 rounded-xl ${isDark ? 'border-slate-700/60 bg-slate-800/40' : 'border-slate-100 bg-slate-50/60'}`}>
            {project.stats.slice(0, 2).map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className={`text-lg font-extrabold leading-tight ${isDark ? 'text-sky-400' : 'text-slate-950'}`}>
                  {stat.value}
                </span>
                <span className={`text-[11px] font-medium truncate ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tags footer */}
        <div className={`pt-2 flex items-center justify-between border-t ${isDark ? 'border-slate-700/60' : 'border-slate-100'}`}>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className={`text-[11px] font-medium px-2 py-0.5 rounded ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'}`}
              >
                #{tag}
              </span>
            ))}
          </div>

          <span className={`inline-flex items-center gap-1 text-xs font-bold group-hover:text-sky-500 transition-colors ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>
            عرض التفاصيل
            <ArrowUpLeft className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
