export interface CurriculumData {
  [key: string]: {
    [key: number]: string[];
  };
}

export const CURRICULUM: CurriculumData = {
  Android: {
    4: [
      '화면 디자인, 구성 및 git과 안드로이드 스튜디오 기능 배우기',
      '화면 간 데이터 연동 및 생명주기',
      '리스트 화면 구성',
      '탭, 페이지 전환 및 로딩',
      '1~4 주차 복습',
      'Thread와 Coroutine',
      '로컬 데이터 저장 및 서버 통신 tool 다루기',
      'REST API 기초',
      'REST API 심화',
      '외부 API 연동 배우기',
    ],
    5: [
      '코틀린, 안드로이드, Git 기초',
      '리스트 구조 UI, 컴포넌트 제작, State 관리',
      'Material Design System, 컴포넌트화 및 UI단 설계, State Hoisting',
      'Jetpack Navigation, Side Effect',
      'Retrofit2를 활용한 서버 통신',
      '비동기 프로그래밍 with Coroutine',
      '반응형 프로그래밍',
      '로컬 데이터 저장 다루기, DataStore 활용하기',
      '의존성 주입 및 Hilt 다루기, 프로젝트 시작 전 꿀팁 공유',

    ]
  },
  Web: {
    4: [
      '협업과 웹사이트 구성',
      'CSS 스타일링',
      'Javascript',
      'React 프로젝트 설정 및 기초',
      'React로 생각하기',
      '라우팅 및 컴포넌트 스타일링',
      '상태 관리',
      'Data Fetching, 컴포넌트의 생명주기',
      'Typescript',
      'Extra Mile',
    ],
    5: [
      '협업과 웹사이트 구성',
      'CSS 스타일링',
      'Javascript',
      'React 프로젝트 설정 및 기초',
      'React로 생각하기',
      '라우팅 및 컴포넌트 스타일링',
      '상태 관리',
      'Data Fetching, 컴포넌트의 생명주기',
      'Typescript',
    ]
  },
  Server: {
    4: [
      '객체지향 & TDD',
      '객체지향 & TDD 리팩토링',
      'HTTP와 Tomcat',
      '서블릿/JSP',
      '서블릿 MVC',
      '스프링 MVC & DI, IoC',
      '스프링 DB접근 & 예외처리',
      '인증과 인가',
      '데이터베이스와 ERD 설계',
      'JDBC로 REST API 개발, 페이징 처리',
    ],
    5: [
      '객체지향 & Test',
      '리팩토링',
      'HTTP와 Tomcat',
      '서블릿/JSP',
      '서블릿 JDBCTemplate (AJAX)',
      '서블릿 MVC',
      'Spring MVC & DI, IoC',
      '인증/인가, 데이터베이스와 ERD 설계',
      'REST API 개발, 페이징 처리'

    ]
  },
  PM: {
    4: [
      '프로젝트 개요/PM 개요',
      '서비스 기획 구체화하기',
      '와이어프레임 및 스토리보드 작성하기',
      '협업을 위한 툴 세팅과 협업방식 학습',
      '기획 총 점검/디자이너 모집하기',
      '디자이너 협업/Q&A (6~10주차)',
    ],
    5: [
      '프로젝트 개요/PM 개요',
      '서비스 기획 구체화하기',
      '유저 설정하기',
      '화면 개요 구성하기',
      '디자이너 모집글 작성하기',
      '서비스 컨셉 구상하기',
      '프로토타입 제작하기',
      '디자인 시스템 구축하기',
      '협업 준비하기'
    ]
  }
};
