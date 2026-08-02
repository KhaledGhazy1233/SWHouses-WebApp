import React from 'react';
import matgarHeroImg from '../../assets/matgar-hero.png';

export const MatgarLogoCard = ({ isThumbnail = false }) => {
  return (
    <div className={`w-full h-full relative overflow-hidden bg-[#EBF3FF] dark:bg-slate-900 flex items-center justify-center select-none ${isThumbnail ? 'min-h-[220px]' : 'min-h-[380px]'}`}>
      <img
        src={matgarHeroImg}
        alt="Matgar SaaS Platform"
        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
};

export default MatgarLogoCard;
