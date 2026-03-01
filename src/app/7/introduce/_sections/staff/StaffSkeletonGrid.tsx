'use client';

import StaffCardSkeleton from './StaffCardSkeleton';

type StaffSkeletonGridProps = {
  count?: number;
};

export default function StaffSkeletonGrid({ count = 6 }: StaffSkeletonGridProps) {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <StaffCardSkeleton key={`staff-skeleton-${index}`} />
      ))}
    </div>
  );
}
