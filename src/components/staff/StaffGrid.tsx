import { useRef, useEffect } from 'react';
import StaffCard from './StaffCard';
import { StaffMember } from '@/constants/staffConstants';

interface StaffGridProps {
  staff: StaffMember[];
}

const StaffGrid = ({ staff }: StaffGridProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (!currentRef) return;

    let startX: number;
    let scrollLeft: number;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX - currentRef.offsetLeft;
      scrollLeft = currentRef.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!startX) return;
      const x = e.touches[0].pageX - currentRef.offsetLeft;
      const walk = (x - startX) * 2;
      currentRef.scrollLeft = scrollLeft - walk;
      e.preventDefault();
    };

    currentRef.addEventListener('touchstart', handleTouchStart, {
      passive: false,
    });
    currentRef.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });

    return () => {
      currentRef.removeEventListener('touchstart', handleTouchStart);
      currentRef.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden mt-2 sm:mt-3">
      <div
        ref={scrollContainerRef}
        className="max-w-full overflow-x-auto touch-pan-x custom-scrollbar"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: '#4FE570 #1a1a1a',
        }}
      >
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            height: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #1a1a1a;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #4fe570;
            border-radius: 2px;
          }
        `}</style>
        <div className="flex flex-nowrap justify-center gap-3 px-2 sm:px-3 pb-2 sm:pb-3 pt-1 sm:pt-2 min-w-max">
          {staff.map((member) => (
            <div key={member.name} className="flex-shrink-0">
              <StaffCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffGrid;
