import { useRef, useEffect } from 'react';
import StaffCard from './StaffCard';
import { StaffMember } from '@/constants/staffConstants';

interface StaffGridProps {
  staff: StaffMember[];
}

const StaffGrid = ({ staff }: StaffGridProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollContainerRef.current) {
        e.preventDefault();
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="max-w-full overflow-x-auto custom-scrollbar overflow-y-hidden staff-grid-container"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#4FE570 #1a1a1a',
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
