'use client';

type StaffCardSkeletonProps = {
  absolute?: boolean;
  className?: string;
};

export default function StaffCardSkeleton({ absolute = false, className = '' }: StaffCardSkeletonProps) {
  return (
    <div
      className={`${absolute ? 'absolute inset-0 z-[1]' : 'h-[200px] w-[48%] min-w-[150px] max-w-[180px] sm:h-[220px] sm:w-[170px]'} animate-pulse rounded-lg border border-white/18 bg-gradient-to-br from-[#4f5560] via-[#626a76] to-[#4f5560] ${className}`}
    />
  );
}
