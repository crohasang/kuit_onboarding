import { DotLottiePlayer as Player } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { StaffMember } from '../_constants/staff.ts';

const TechStack = ({
  lottie,
  name,
  fRef,
  staff,
}: {
  lottie: string;
  name: string;
  fRef: React.RefObject<HTMLDivElement>;
  staff: StaffMember[];
}) => (
  <div ref={fRef} className="absolute inset-0 flex items-center justify-center p-4">
    <div className="flex flex-col items-center justify-center w-full max-w-5xl">
      <div className="flex items-center justify-center">
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
          <Player src={lottie} autoplay loop style={{ width: '100%', height: '100%' }} />
        </div>
        <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-black ml-2 md:ml-6">{name}</span>
      </div>
      <div
        className={
          name === 'PM & Design'
            ? 'grid grid-cols-2 gap-x-8 gap-y-6 mt-6 md:mt-10'
            : 'flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-10'
        }
      >
        {staff.map(member => (
          <div key={member.name} className="flex flex-col items-center text-center w-24 sm:w-28">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-2">
              <Image src={member.imageUrl} alt={member.name} width={128} height={128} className="object-cover w-full h-full" />
            </div>
            <div className="flex items-center space-x-1.5">
              <p className="font-bold text-sm sm:text-base text-black whitespace-nowrap">{member.name}</p>
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 hover:text-black" />
                </a>
              )}
            </div>
            <p className="text-gray-600 text-xs sm:text-sm">
              {member.position}
              {name !== 'Management' && ' 파트장'}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TechStack;