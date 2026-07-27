import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layout, Code, Cpu, CheckCircle2, ArrowUpLeft, Layers, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const iconMap = {
  Target: Target,
  Layout: Layout,
  Code: Code,
  Cpu: Cpu,
  Layers: Layers
};

export const ServiceCard = ({ service, index = 0 }) => {
  const navigate = useNavigate();
  const IconComponent = iconMap[service.icon] || Target;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Card Header: Icon + Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:bg-slate-950 group-hover:text-sky-400 group-hover:border-slate-800 transition-colors duration-300 shadow-sm">
            <IconComponent className="w-7 h-7 stroke-[1.8]" />
          </div>

          {service.badge && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-sky-100 group-hover:text-sky-800 transition-colors">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors mb-2">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
          {service.subtitle}
        </p>

        {/* Features Checklist */}
        {service.features && (
          <ul className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
            {service.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors cursor-pointer"
        >
          <span>استكشف تفاصيل الخدمة</span>
          <ArrowUpLeft className="w-4 h-4 text-sky-500 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
