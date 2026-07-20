import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`animate-pulse bg-light-gray rounded-md ${className}`} />
  );
};

export const ProductSkeleton = () => (
  <div className="flex flex-col gap-3">
    <Skeleton className="w-full aspect-square rounded-xl" />
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
      <Skeleton className="h-5 w-1/4 mt-1" />
    </div>
  </div>
);
