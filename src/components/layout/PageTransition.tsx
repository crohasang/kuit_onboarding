import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  currentPage: number;
  direction: 'up' | 'down';
  onAnimationComplete: () => void;
}

// 페이지 전환 애니메이션을 위한 variants 정의
const pageVariants = {
  enter: (direction: 'up' | 'down') => ({
    y: direction === 'down' ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: 'up' | 'down') => ({
    y: direction === 'down' ? '-100%' : '100%',
    opacity: 0,
  }),
};

// 페이지 전환 애니메이션 설정
const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8,
};

// 페이지 전환 애니메이션을 처리
export const PageTransition = ({
  children,
  currentPage,
  direction,
  onAnimationComplete,
}: PageTransitionProps) => (
  <AnimatePresence
    initial={false}
    custom={direction}
    mode="sync"
    onExitComplete={onAnimationComplete}
  >
    <motion.div
      key={currentPage}
      custom={direction}
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full absolute top-0 left-0"
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
