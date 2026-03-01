'use client';

type StaffSkeletonGridProps = {
  count?: number;
};

export default function StaffSkeletonGrid({ count = 6 }: StaffSkeletonGridProps) {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={`staff-skeleton-${index}`}
          className="h-[220px] w-[48%] min-w-[150px] max-w-[180px] animate-pulse rounded-lg border border-white/18 bg-gradient-to-br from-[#4f5560] via-[#626a76] to-[#4f5560] sm:w-[170px]"
        />
      ))}
    </div>
  );
}

