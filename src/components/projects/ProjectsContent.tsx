// pages/projects.tsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, Project } from '@/constants/projectsConstants';

const ProjectCard: React.FC<{
  project: Project;
  width: string;
  height: string;
}> = ({ project, width, height }) => {
  return (
    <div
      className={`${width} ${height} bg-white bg-opacity-10 rounded-lg overflow-hidden flex flex-col`}
    >
      <div className="w-full h-3/5 bg-gray-300" />
      <div className="p-2 h-2/5 flex flex-col justify-between">
        <h3 className="text-xs font-bold truncate">{project.title}</h3>
        <p className="text-xs truncate">{project.description}</p>
      </div>
    </div>
  );
};

const ProjectsContent: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 프로젝트를 7개씩 나누고, 각 줄에 대해 3번 반복
  const firstRow = [
    ...PROJECTS.slice(0, 7),
    ...PROJECTS.slice(0, 7),
    ...PROJECTS.slice(0, 7),
  ];
  const secondRow = [
    ...PROJECTS.slice(7),
    ...PROJECTS.slice(7),
    ...PROJECTS.slice(7),
  ];

  // 카드의 너비와 높이를 조정
  const cardWidth = 192; // 48px (w-48) * 4 = 192px
  const cardHeight = 128; // 32px (h-32) * 4 = 128px
  const gapWidth = 16; // gap-4 = 16px
  const totalWidth = (cardWidth + gapWidth) * 7 * 3; // 7개의 카드, 3번 반복

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-transparent text-white p-4 sm:p-8">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          Projects
        </h1>

        <motion.div className="text-lg sm:text-xl text-center mb-8">
          <p>스터디가 끝난 후, </p>
          <p className="text-kuit font-semibold mt-2">
            PM, 디자이너, 프론트엔드, 백엔드
          </p>{' '}
          <p>가 한 팀이 되어 프로젝트 개발이 진행됩니다.</p>
          <p className="mt-2 font-semibold">
            KUIT에서 진행된 프로젝트를 확인해보세요!
          </p>
        </motion.div>

        <div className="overflow-hidden w-full relative">
          {isClient ? (
            <div className="flex flex-col gap-4">
              <motion.div
                className="flex gap-4"
                initial={{ x: 0 }}
                animate={{ x: [-totalWidth / 3, 0] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear',
                  },
                }}
                style={{ width: `${totalWidth}px` }}
              >
                {firstRow.map((project, index) => (
                  <ProjectCard
                    key={`first-${project.title}-${index}`}
                    project={project}
                    width="w-48"
                    height="h-32"
                  />
                ))}
              </motion.div>
              <motion.div
                className="flex gap-4"
                initial={{ x: -totalWidth / 3 }}
                animate={{ x: [0, -totalWidth / 3] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear',
                  },
                }}
                style={{ width: `${totalWidth}px` }}
              >
                {secondRow.map((project, index) => (
                  <ProjectCard
                    key={`second-${project.title}-${index}`}
                    project={project}
                    width="w-48"
                    height="h-32"
                  />
                ))}
              </motion.div>
            </div>
          ) : (
            <div
              className="flex flex-col gap-4"
              style={{ width: `${totalWidth}px` }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
