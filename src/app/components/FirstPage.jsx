"use client";
import React from 'react';
import HeroSection from './HeroSection';
import AchievementsSection from './AchievementsSection';

const FirstPage = () => {
  return(
    <div className="pb-18 min-h-screen flex flex-col justify-center">
      <HeroSection />
      <AchievementsSection />
    </div>
  );
}

export default FirstPage;