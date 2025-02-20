interface IntroduceContent {
  paragraphs: string[];
  statistics: {
    projects: number;
    studies: number;
  };
}

interface IntroduceConstants {
  [key: number]: IntroduceContent;
}

export const INTRODUCE_CONTENT: IntroduceConstants = {
  4: {
    paragraphs: [
      '2023년에 시작된 KUIT은 어느덧 4기를 맞이했습니다.',
      'KUIT은 학기 중에는 파트별로 스터디를 진행하며,',
      'Android, Web, Server 파트와 PM, 디자이너가 협업하여 프로젝트를 진행합니다.',
      'KUIT 4기 모집이 시작됩니다.',
      '한 학기 동안 함께 성장할 여러분의 지원을 기다리고 있습니다!'
    ],
    statistics: {
      projects: 18,
      studies: 29
    }
  },
  5: {
    paragraphs: [
      '2023년에 시작된 KUIT은 이제 5기를 맞이합니다.',
      'KUIT은 학기 중에는 파트별로 스터디를 진행하며,',
      'Android, Web, Server 파트와 PM, 디자이너가 협업하여 프로젝트를 진행합니다.',
      'KUIT 5기 모집이 시작됩니다.',
      '한 학기 동안 함께 성장할 여러분의 지원을 기다리고 있습니다!'
    ],
    statistics: {
      projects: 26,
      studies: 40
    }
  }
};
