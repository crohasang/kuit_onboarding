import React from 'react';
import Image from 'next/image';
import { StaffMember } from '@/constants/staffConstants';

interface CardFrontProps {
  member: StaffMember;
}

const CardFront = ({ member }: CardFrontProps) => {
  return (
    <div className="absolute w-full h-full backface-hidden rounded-[12px] overflow-hidden bg-white shadow-lg flex flex-col">
      <div className="h-[180px] w-full relative overflow-hidden">
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-full h-full bg-gray-200"
          >
            <path
              d="M100 60
                     a30 30 0 0 1 0 60
                     a30 30 0 0 1 0 -60
                     M60 180
                     C60 130 140 130 140 180"
              fill="#9e9e9e"
            />
          </svg>
        )}
      </div>
      <div className="h-[60px] bg-white p-2 flex flex-col justify-center">
        <h3 className="text-base text-right font-bold text-black">
          {member.name}
        </h3>
        <p className="text-sm text-right text-gray-600">{member.role}</p>
      </div>
    </div>
  );
};

export default CardFront;
