import React, { useState } from 'react';
import Footer from './Footer';
import StaffGrid from './StaffGrid';
import STAFF from '@/constants/staffConstants';

interface ChipProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const Chip = ({ label, isSelected, onClick }: ChipProps) => (
  <button
    className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
      isSelected ? 'bg-kuit text-black' : 'bg-white bg-opacity-10 text-white'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const StaffContent = () => {
  const [selectedPosition, setSelectedPosition] = useState<string>('운영팀');
  const positions = ['운영팀', 'Android', 'Web', 'Server', 'PM'];

  const filteredStaff = STAFF.filter(
    (member) => member.position === selectedPosition
  );

  const handlePositionChange = (position: string) => {
    setSelectedPosition(position);
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center bg-transparent text-white ">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center p-2 sm:p-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3">
            KUIT 4기 운영진
          </h1>
          <h2 className="text-xs sm:text-sm md:text-base text-center text-kuit mb-2 sm:mb-3">
            카드를 클릭해 뒷면을 확인해보세요!
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-2 sm:mb-3">
            {positions.map((position) => (
              <Chip
                key={position}
                label={position}
                isSelected={selectedPosition === position}
                onClick={() => handlePositionChange(position)}
              />
            ))}
          </div>
          <StaffGrid staff={filteredStaff} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default StaffContent;
