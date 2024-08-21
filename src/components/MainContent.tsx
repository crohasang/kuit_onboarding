'use client';

import { useState, useCallback } from 'react';
import { PageLayout } from './layout/PageLayout';
import HomeContent from '@/components/home/HomeContent';
import IntroduceContent from '@/components/introduce/IntroduceContent';
import StudyContent from './study/StudyContent';
import ProjectsContent from './projects/ProjectsContent';
import StaffContent from './staff/StaffContent';

const MainContent = () => {
  // 현재 페이지 상태 관리
  const [currentPage, setCurrentPage] = useState(0);
  // 애니메이션 진행 중 상태 관리
  const [isAnimating, setIsAnimating] = useState(false);

  // 페이지 변경 핸들러
  const handlePageChange = useCallback(
    (newPage: number) => {
      if (isAnimating) return; // 애니메이션 중이면 페이지 변경 무시
      setIsAnimating(true);
      setCurrentPage(newPage);
    },
    [isAnimating]
  );

  // 애니메이션 완료 핸들러
  const handleAnimationComplete = useCallback(() => {
    setIsAnimating(false);
  }, []);

  return (
    <PageLayout
      currentPage={currentPage}
      onPageChange={handlePageChange}
      onAnimationComplete={handleAnimationComplete}
      isAnimating={isAnimating}
    >
      <HomeContent />
      <IntroduceContent />
      <StudyContent />
      <ProjectsContent />
      <StaffContent />
    </PageLayout>
  );
};

export default MainContent;
