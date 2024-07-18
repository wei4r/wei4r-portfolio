"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContestRating, fetchGithubRepoNum, fetchCommitsThisWeek } from '../../redux/slices/achievementsSlice';

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsSection = () => {
  const dispatch = useDispatch();
  const achievements = useSelector((state) => state.achievements.achievements);

  useEffect(() => {
    dispatch(fetchContestRating());
    dispatch(fetchGithubRepoNum());
    dispatch(fetchCommitsThisWeek());
  }, [dispatch]);


  return (
    <div className="py-2 px-4 xl:gap-16 sm:py-12 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md sm:py-8 sm:px-16 flex sm:flex-row items-center justify-between">
        {achievements.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-start mx-4 my-4 sm:my-0 h-full"
            >
              <h2 className="text-white sm:text-4xl text-xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      // tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
