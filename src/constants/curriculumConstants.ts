export interface CurriculumData {
  [key: string]: string[];
}

export const CURRICULUM: CurriculumData = {
  Android: [
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
  Web: [
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
  Server: [
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
  PM: [
    '프로젝트 개요/PM 개요',
    '서비스 기획 구체화하기',
    '와이어프레임 및 스토리보드 작성하기',
    '협업을 위한 툴 세팅과 협업방식 학습',
    '기획 총 점검/디자이너 모집하기',
    '디자이너 협업/Q&A (6~10주차)',
  ],
};
