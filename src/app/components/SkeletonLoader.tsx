import React from "react";

interface SkeletonLoaderProps {
  className?: string;
  count?: number;
}

const SkeletonLoader = ({ className = "", count = 1 }: SkeletonLoaderProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-gray-700 rounded ${className}`}
        />
      ))}
    </>
  );
};

export default SkeletonLoader;