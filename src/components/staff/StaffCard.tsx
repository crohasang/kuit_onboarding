import React, { useState } from 'react';
import { StaffMember } from '@/constants/staffConstants';
import CardFront from './CardFront';
import CardBack from './CardBack';

interface StaffCardProps {
  member: StaffMember;
}

const StaffCard = ({ member }: StaffCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-[180px] h-[240px] cursor-pointer perspective-1000"
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <CardFront member={member} />
        <CardBack member={member} />
      </div>
    </div>
  );
};

export default StaffCard;
