import React from "react";
import SkeletonLoader from "./SkeletonLoader";

const ProjectCardSkeleton = () => {
  return (
    <div className="mx-4">
      <div className="h-52 md:h-72 sm:rounded-xl rounded-xl relative">
        <SkeletonLoader className="w-full h-full rounded-xl" />
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <SkeletonLoader className="h-6 w-3/4 mb-2" />
        <SkeletonLoader className="h-4 w-full" />
        <SkeletonLoader className="h-4 w-2/3 mt-2" />
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;