import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { v4 as uuid } from 'uuid';
import { CurriculumData, CURRICULUM } from '@/constants/curriculumConstants';

interface CurriculumCarouselProps {
  part: keyof CurriculumData;
}

const CurriculumCarousel: React.FC<CurriculumCarouselProps> = ({ part }) => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalWeeks = CURRICULUM[part].length;

  const nextWeek = () => {
    setDirection(1);
    setCurrentWeek((prev) => (prev + 1) % totalWeeks);
  };

  const prevWeek = () => {
    setDirection(-1);
    setCurrentWeek((prev) => (prev - 1 + totalWeeks) % totalWeeks);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
      };
    },
  };

  return (
    <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg relative">
      <h3 className="text-xl font-bold mb-4 text-kuit">{part} Curriculum</h3>
      <div className="flex items-center justify-between">
        <button
          onClick={prevWeek}
          className="p-2 rounded-full bg-kuit text-black z-10"
          aria-label="Previous week"
        >
          <IoChevronBack size={24} />
        </button>
        <div className="relative w-full h-[150px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentWeek}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full flex flex-col justify-center items-center"
            >
              <h4 className="text-lg font-semibold mb-2">
                {currentWeek + 1}주차
              </h4>
              <p className="text-center">{CURRICULUM[part][currentWeek]}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={nextWeek}
          className="p-2 rounded-full bg-kuit text-black z-10"
          aria-label="Next week"
        >
          <IoChevronForward size={24} />
        </button>
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: totalWeeks }).map((_, index) => (
          <button
            key={uuid()}
            onClick={() => {
              setDirection(index > currentWeek ? 1 : -1);
              setCurrentWeek(index);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentWeek ? 'bg-kuit' : 'bg-white bg-opacity-30'
            }`}
            aria-label={`Go to week ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CurriculumCarousel;
