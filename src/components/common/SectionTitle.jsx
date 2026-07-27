import React from 'react';
import { motion } from 'framer-motion';

export const SectionTitle = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const alignClasses = {
    center: 'text-center items-center',
    right: 'text-right items-start',
    left: 'text-left items-end'
  };

  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${alignClasses[align]} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-600 border border-sky-200/60 mb-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
          <span>{badge}</span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
