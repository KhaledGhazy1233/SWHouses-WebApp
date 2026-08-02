import React from 'react';
import tantaHeroImg from '../../assets/tanta-hero.png';

export const TantaLogoCard = ({ isThumbnail = false }) => {
  return (
    <div className={`w-full h-full relative overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center select-none ${isThumbnail ? 'min-h-[220px]' : 'min-h-[380px]'}`}>
      <img
        src={tantaHeroImg}
        alt="تطبيق جامعة طنطا الرسمي للهواتف"
        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
};

export default TantaLogoCard;
