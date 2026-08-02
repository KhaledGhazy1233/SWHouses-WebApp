import React from 'react';
import ecommerceHeroImg from '../../assets/ecommerce-hero.png';

export const EcommerceLogoCard = ({ isThumbnail = false }) => {
  return (
    <div className={`w-full h-full relative overflow-hidden bg-slate-900 flex items-center justify-center select-none ${isThumbnail ? 'min-h-[220px]' : 'min-h-[380px]'}`}>
      <img
        src={ecommerceHeroImg}
        alt="منصة تجارة إلكترونية متكاملة"
        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
};

export default EcommerceLogoCard;
