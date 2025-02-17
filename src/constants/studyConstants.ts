interface StudyContent {
  title: string;
  description: {
    parts: string[];
    duration: string;
    message: string;
  };
}

interface StudyConstants {
  [key: number]: StudyContent;
}

export const STUDY_CONTENT: StudyConstants = {
  4: {
    title: 'Study',
    description: {
      parts: ['Android', 'Web', 'Server', 'PM'],
      duration: '학기 중 10주간 스터디가 진행됩니다.',
      message: '희망하는 파트의 커리큘럼을 확인해보세요!'
    }
  },
  5: {
    title: 'Study',
    description: {
      parts: ['Android', 'Web', 'Server', 'PM'],
      duration: '학기 중 9주간 스터디가 진행됩니다.',
      message: '희망하는 파트의 커리큘럼을 확인해보세요!'
    }
  }
};
