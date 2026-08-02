import React from 'react';
import qadiaHeroImg from '../../assets/qadia-hero.png';

export const QadiaLogoCard = ({ isThumbnail = false }) => {
  return (
    <div className={`w-full h-full relative overflow-hidden bg-white dark:bg-[#121824] flex items-center justify-center p-4 sm:p-6 select-none ${isThumbnail ? 'min-h-[220px]' : 'min-h-[380px]'}`}>
      <img
        src={qadiaHeroImg}
        alt="نظام قضية لإدارة مكاتب المحاماة"
        className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-500 rounded-2xl"
      />
    </div>
  );
};

export default QadiaLogoCard;
