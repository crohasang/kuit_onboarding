'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const KuitAnimation = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1000); // 'CAN DO' 페이드 아웃
    const timer2 = setTimeout(() => setStep(2), 2000); // 'KU'와 'IT' 움직이기 시작

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-full w-full bg-black flex items-center justify-center">
      <motion.div
        className="text-6xl font-bold text-white flex items-center space-x-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="text-kuit"
          variants={itemVariants}
          animate={step >= 2 ? { x: 'calc(100% + 4rem)' } : {}}
          transition={{ duration: 0.5 }}
        >
          KU
        </motion.span>

        <motion.span
          variants={itemVariants}
          animate={step >= 1 ? { opacity: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          CAN
        </motion.span>

        <motion.span
          variants={itemVariants}
          animate={step >= 1 ? { opacity: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          DO
        </motion.span>

        <motion.span
          className="text-kuit"
          variants={itemVariants}
          animate={step >= 2 ? { x: 'calc(-100% - 4rem)' } : {}}
          transition={{ duration: 0.5 }}
        >
          IT
        </motion.span>
      </motion.div>
    </div>
  );
};

export default KuitAnimation;
