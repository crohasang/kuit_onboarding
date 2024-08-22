import { useRef, useEffect, useState } from 'react';
import StaffCard from './StaffCard';
import { StaffMember } from '@/constants/staffConstants';

interface StaffGridProps {
  staff: StaffMember[];
}

const StaffGrid = ({ staff }: StaffGridProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      const walk = (x - startX) * 2; // Scroll-fast
      currentRef.scrollLeft = scrollLeft - walk;
    };

    if (isMobile) {
      currentRef.addEventListener('touchstart', handleTouchStart);
      currentRef.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (isMobile && currentRef) {
        currentRef.removeEventListener('touchstart', handleTouchStart);
        currentRef.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [isMobile]);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollContainerRef}
        className={`max-w-full overflow-x-auto custom-scrollbar overflow-y-hidden staff-grid-container ${
          isMobile ? 'touch-pan-x' : ''
        }`}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#4FE570 #1a1a1a',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="flex flex-nowrap justify-start sm:justify-center gap-6 px-4 min-w-max">
          {staff.map((member) => (
            <div key={member.name}>
              <StaffCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffGrid;
