import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layout, Code, Cpu, CheckCircle2, ArrowUpLeft, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const iconMap = {
  Target: Target,
  Layout: Layout,
  Code: Code,
  Cpu: Cpu,
  Layers: Layers
};

export const ServiceCard = ({ service, index = 0 }) => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const IconComponent = iconMap[service.icon] || Target;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-2xl p-6 md:p-8 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
        isDark
          ? 'bg-[#121824] border-slate-700/60 hover:border-sky-700/50'
          : 'bg-white border-slate-200/80 hover:border-slate-300'
      }`}
    >
      <div>
        {/* Card Header: Icon + Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-colors duration-300 shadow-sm group-hover:bg-slate-950 group-hover:text-sky-400 group-hover:border-slate-800 ${
            isDark ? 'bg-sky-900/30 border-sky-800/60 text-sky-400' : 'bg-sky-50 border-sky-100 text-sky-600'
          }`}>
            <IconComponent className="w-7 h-7 stroke-[1.8]" />
          </div>

          {service.badge && (
            <span className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
              isDark
                ? 'bg-slate-700 text-slate-300 group-hover:bg-sky-900/50 group-hover:text-sky-300'
                : 'bg-slate-100 text-slate-700 group-hover:bg-sky-100 group-hover:text-sky-800'
            }`}>
              {service.badge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className={`text-xl md:text-2xl font-extrabold leading-snug group-hover:text-sky-500 transition-colors mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
          {service.title}
        </h3>

        <p className={`text-sm leading-relaxed mb-6 font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {service.subtitle}
        </p>

        {/* Features Checklist */}
        {service.features && (
          <ul className={`space-y-2.5 mb-6 pt-4 border-t ${isDark ? 'border-slate-700/60' : 'border-slate-100'}`}>
            {service.features.map((feat, idx) => (
              <li key={idx} className={`flex items-start gap-2.5 text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Footer */}
      <div className={`pt-4 border-t flex items-center justify-between ${isDark ? 'border-slate-700/60' : 'border-slate-100'}`}>
        <button
          onClick={() => navigate('/services')}
          className={`inline-flex items-center gap-2 text-xs font-bold group-hover:text-sky-500 transition-colors cursor-pointer ${isDark ? 'text-slate-300' : 'text-slate-900'}`}
        >
          <span>استكشف تفاصيل الخدمة</span>
          <ArrowUpLeft className="w-4 h-4 text-sky-500 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
