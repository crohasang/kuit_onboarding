'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const KuitAnimation = () => {
  const [step, setStep] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const animationCycle = () => {
      setStep(1); // CAN DO 페이드 아웃
      setTimeout(() => setStep(2), 1000); // KU와 IT 움직이기 시작
      setTimeout(() => setStep(3), 2000); // KU와 IT 원위치로
      setTimeout(() => setStep(0), 3000); // 처음 상태로 리셋
    };

    // 첫 번째 사이클 시작
    const initialTimer = setTimeout(animationCycle, 1000);

    // 설명 텍스트 표시
    setTimeout(() => setShowDescription(true), 500);

    // 애니메이션 반복
    const interval = setInterval(animationCycle, 4000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
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
    <div className="h-full w-full flex flex-col items-center justify-center">
      <motion.div
        className="text-6xl font-bold text-white flex items-center space-x-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="text-kuit"
          variants={itemVariants}
          animate={step === 2 ? { x: 'calc(+100% + 3rem)' } : { x: 0 }}
          transition={{ duration: 0.5 }}
        >
          KU
        </motion.span>

        <motion.span
          variants={itemVariants}
          animate={{ opacity: step === 0 || step === 3 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          CAN
        </motion.span>

        <motion.span
          variants={itemVariants}
          animate={{ opacity: step === 0 || step === 3 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          DO
        </motion.span>

        <motion.span
          className="text-kuit"
          variants={itemVariants}
          animate={step === 2 ? { x: 'calc(-100% - 5rem)' } : { x: 0 }}
          transition={{ duration: 0.5 }}
        >
          IT
        </motion.span>
      </motion.div>

      <motion.div
        className="mt-4 text-white text-2xl font-semibold text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={showDescription ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        건국대학교 기획/개발 동아리 KUIT
      </motion.div>
    </div>
  );
};

export default KuitAnimation;
