import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CurriculumCarousel from './CurriculumCarousel';
import Chip from '../common/chip';
import { STUDY_CONTENT } from '@/constants/studyConstants';

interface StudyContentProps {
  generation?: 4 | 5;
}

const StudyContent = ({ generation = 4 }: StudyContentProps) => {
  const content = STUDY_CONTENT[generation];
  const [selectedPart, setSelectedPart] = useState(content.description.parts[0]);

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
          {content.title}
        </motion.h1>

        <motion.div
          className="text-lg sm:text-xl text-center mb-8"
          variants={itemVariants}
        >
          <p>
            KUIT {generation}기는{' '}
            <span className="text-kuit font-semibold">
              {content.description.parts.join(', ')}
            </span>{' '}
            파트로 이루어져 있고,
          </p>
          <p>{content.description.duration}</p>
          <p className="mt-2 font-semibold">
            {content.description.message}
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4 mb-8"
          variants={itemVariants}
        >
          {content.description.parts.map((part) => (
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
            <CurriculumCarousel part={selectedPart} generation={generation} />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default StudyContent;
