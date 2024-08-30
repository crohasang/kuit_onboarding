import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CurriculumCarousel from './CurriculumCarousel';
import Chip from '../common/chip';

const StudyContent = () => {
  const [selectedPart, setSelectedPart] = useState('Android');
  const parts = ['Android', 'Web', 'Server', 'PM'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen w-full flex flex-col justify-center items-center bg-transparent text-white p-4 sm:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-4xl">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-6"
          variants={itemVariants}
        >
          Study
        </motion.h1>

        <motion.div
          className="text-lg sm:text-xl text-center mb-8"
          variants={itemVariants}
        >
          <p>
            KUIT 4기는{' '}
            <span className="text-kuit font-semibold">
              Android, Web, Server, PM
            </span>{' '}
            파트로 이루어져 있고,
          </p>
          <p>학기 중 10주간 스터디가 진행됩니다.</p>
          <p className="mt-2 font-semibold">
            희망하는 파트의 커리큘럼을 확인해보세요!
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4 mb-8"
          variants={itemVariants}
        >
          {parts.map((part) => (
            <Chip
              key={part}
              label={part}
              isSelected={selectedPart === part}
              onClick={() => setSelectedPart(part)}
              size="medium"
            />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            <CurriculumCarousel part={selectedPart} />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default StudyContent;
