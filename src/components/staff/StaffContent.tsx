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
    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
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
      <div className="flex-grow flex flex-col justify-center items-center bg-transparent text-white p-4 sm:p-8">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-5">
            KUIT 4기 운영진
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl text-center text-kuit mt-2 mb-8">
            카드를 클릭해 뒷면을 확인해보세요!
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
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
      </div>
      <Footer />
      <div className="h-16"></div>
    </div>
  );
};

export default StaffContent;
