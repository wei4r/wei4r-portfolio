"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContestRating, fetchGithubRepoNum, fetchCommitsThisWeek } from '../../redux/slices/achievementsSlice';
import { RootState, AppDispatch } from '../../redux/store';
import ErrorBoundary from './ErrorBoundary';
import SkeletonLoader from './SkeletonLoader';

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const achievements = useSelector((state: RootState) => state.achievements.achievements);
  const loading = useSelector((state: RootState) => state.achievements.loading);
  const error = useSelector((state: RootState) => state.achievements.error);

  useEffect(() => {
    dispatch(fetchContestRating());
    dispatch(fetchGithubRepoNum());
    dispatch(fetchCommitsThisWeek());
  }, [dispatch]);

  if (error) {
    console.error('Error in AchievementsSection:', error);
  }

  return (
    <ErrorBoundary>
      <div className="py-2 px-4 xl:gap-16 sm:py-12 xl:px-16 mb-16">
        <div className="sm:border-[#33353F] sm:border rounded-md sm:py-8 sm:px-16 flex sm:flex-row items-center justify-between">
          {achievements.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-start mx-4 my-4 sm:my-0 h-full"
              >
                <h2 className="text-white sm:text-4xl text-xl font-bold flex flex-row items-center">
                  <div className="text-white sm:text-4xl text-xl font-bold">
                    {loading ? (
                      <SkeletonLoader className="h-8 w-16" />
                    ) : (
                      <ErrorBoundary>
                        <AnimatedNumbers
                          includeComma
                          animateToNumber={parseInt(achievement.value.toString())}
                          locale="en-US"
                          configs={(_, index) => {
                            return {
                              mass: 1,
                              friction: 100,
                            };
                          }}
                        />
                      </ErrorBoundary>
                    )}
                  </div>
                </h2>
                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              </div>
            );
          })}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AchievementsSection;