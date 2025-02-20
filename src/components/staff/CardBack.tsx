import React from 'react';
import { StaffMember } from '@/constants/staffConstants';
import { FaGithub, FaGlobe } from 'react-icons/fa';

interface CardBackProps {
  member: StaffMember;
}

const CardBack = ({ member }: CardBackProps) => {
  return (
    <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[12px] overflow-hidden bg-white shadow-lg flex flex-col">
      <div className="flex justify-end mb-2 px-4 pt-4">
        <h3 className="text-base font-bold text-black">{member.name}</h3>
      </div>
      <hr className="w-full h-[2px] bg-gray-300 mb-4"></hr>
      <div className="flex-grow overflow-y-auto px-4 relative">
        <pre className="text-xs text-gray-600 whitespace-pre-wrap font-sans">
          {member.description || '잘 부탁드립니다!'}
        </pre>
        <div className="absolute bottom-4 right-4 flex items-center gap-3">
          {member.siteLink && (
            <a
              href={member.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-kuit transition-colors"
              aria-label="Personal Website"
            >
              <FaGlobe size={24} />
            </a>
          )}
          {member.githubLink && (
            <a
              href={member.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-kuit transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardBack;
