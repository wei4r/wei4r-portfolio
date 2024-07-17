"use client";
import React from 'react';
import HeroSection from './HeroSection';
import AchievementsSection from './AchievementsSection';

const FirstPage = () => {
  return(
    <div className="pb-24 h-[calc(100vh-4rem)]">
      <HeroSection />
      <AchievementsSection />
    </div>
  );
}

export default FirstPage;