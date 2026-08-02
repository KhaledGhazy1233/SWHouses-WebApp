import React from 'react';
import streakHeroImg from '../../assets/streak-hero.png';

export const StreakLogoCard = ({ isThumbnail = false }) => {
  return (
    <div className={`w-full h-full relative overflow-hidden bg-slate-900 flex items-center justify-center select-none ${isThumbnail ? 'min-h-[220px]' : 'min-h-[380px]'}`}>
      <img
        src={streakHeroImg}
        alt="تطبيق مطعم StreakRestaurant"
        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
};

export default StreakLogoCard;
