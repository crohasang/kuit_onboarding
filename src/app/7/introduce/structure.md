# 7/introduce 구조 안내

이 문서는 `src/app/7/introduce` 내부 파일의 역할을 빠르게 파악하기 위한 구조 설명서입니다.

## 현재 슬라이드 순서 (1~5)

1. Introduce  
2. Curriculum  
3. Projects  
4. Staff  
5. Final

## 디렉터리 개요

- `_data`: 섹션 렌더링에 사용하는 JSON 데이터
- `_animation`: 인트로 슬롯(777) 연출 및 애니메이션 로직
- `_layout`: 여러 섹션에서 공통으로 쓰는 레이아웃 컴포넌트/스타일
- `_sections`: 실제 페이지 슬라이드 섹션들(소개/커리큘럼/프로젝트/운영진/파이널)

## 엔트리

- `page.tsx`
  - 7기 introduce 페이지 진입점
  - `BodyClassManager`, `IntroduceAnimationContainer` 조합

- `AGENTS.md`
  - 작업/개발 에이전트 관련 지침

- `PROGRESS.md`
  - 작업 이력/결정 사항 기록

## 데이터

- `_data/introduce.json`
  - 1페이지 소개 문구/링크 데이터

- `_data/curriculum.json`
  - 파트별(웹/안드/서버/PM/디자인) 9주차 커리큘럼 데이터

- `_data/projects.json`
  - 기수별 프로젝트명/설명 데이터

- `_data/staff.json`
  - 운영진 카드 데이터(파트, 이름, 이미지, 소개, 역할)

## 애니메이션

- `_animation/IntroduceAnimationContainer.tsx`
  - 인트로 전체 컨테이너
  - 슬롯 애니메이션 후 슬라이드 섹션(`CurriculumSection`)으로 전환

- `_animation/useIntroSlotAnimation.ts`
  - GSAP 타임라인 로직(릴 회전/전환)

- `_animation/SlotReels.tsx`
  - 슬롯 숫자 릴 UI 렌더링

- `_animation/slot.constants.ts`
  - 릴 숫자/포지션 상수

- `_animation/index.ts`
  - animation 배럴 export

## 공통 레이아웃

- `_layout/BodyClassManager.tsx`
  - 페이지 진입 시 body class 제어

- `_layout/SlidePanel.tsx`
  - 1~5페이지 공통 슬라이드 카드 템플릿

- `_layout/BottomNavigator.tsx`
  - 하단 좌우 화살표 + 페이지 인디케이터

- `_layout/CurriculumGlass.module.css`
  - 글래스모피즘/배경 공통 스타일

- `_layout/index.ts`
  - layout 배럴 export

## 섹션

### 1) Introduce
- `_sections/introduce/IntroduceSection.tsx`
  - `introduce.json` 기반 소개 텍스트/링크 렌더링
- `_sections/introduce/index.ts`
  - introduce 배럴 export

### 2) Curriculum
- `_sections/curriculum/CurriculumSection.tsx`
  - 슬라이더 본체(1~5페이지 조합)
  - 각 섹션 마운트/활성 상태 제어

- `_sections/curriculum/useSlideNavigation.ts`
  - 슬라이드 스크롤/인덱스/디바운스/프로젝트 사전 애니메이션 트리거

- `_sections/curriculum/PartLottieStrip.tsx`
  - 파트 선택 탭(로티 + 라벨)

- `_sections/curriculum/WeekTimeline.tsx`
  - 주차 타임라인 렌더링 + 텍스트 등장 애니메이션

- `_sections/curriculum/curriculum.types.ts`
  - 커리큘럼 타입 정의

- `_sections/curriculum/index.ts`
  - curriculum 배럴 export

### 3) Projects
- `_sections/projects/ProjectsSection.tsx`
  - 프로젝트 섹션 루트(행 구성/활성 애니메이션 제어)

- `_sections/projects/useProjectRows.ts`
  - 기수별 행 데이터 가공 훅

- `_sections/projects/ProjectMarqueeRow.tsx`
  - 행 단위 마키 애니메이션

- `_sections/projects/ProjectCard.tsx`
  - 프로젝트 카드 단위 UI

- `_sections/projects/project.types.ts`
  - 프로젝트 타입 정의

- `_sections/projects/index.ts`
  - projects 배럴 export

### 4) Staff
- `_sections/staff/StaffSection.tsx`
  - 운영진 섹션 루트(탭 상태/카드 상태 관리)

- `_sections/staff/StaffSectionTemplate.tsx`
  - 운영진 공통 레이아웃(타이틀, 탭, 스크롤 영역)

- `_sections/staff/StaffCard.tsx`
  - 운영진 카드(앞면/뒷면, flip, 이미지 로딩)

- `_sections/staff/StaffSkeletonGrid.tsx`
  - 비활성/로딩 시 스켈레톤 카드 그리드

- `_sections/staff/staff.types.ts`
  - 운영진 타입 정의

- `_sections/staff/index.ts`
  - staff 배럴 export

### 5) Final
- `_sections/final/FinalSection.tsx`
  - 파이널 섹션 루트(카운트다운, 버튼, 문의, 크레딧)

- `_sections/final/useCountdown.ts`
  - 카운트다운 계산/interval 훅

- `_sections/final/CountdownDisplay.tsx`
  - 카운트다운 숫자 UI

- `_sections/final/ApplyButtons.tsx`
  - 지원 버튼 UI

- `_sections/final/ContactLinks.tsx`
  - 문의 링크 UI

- `_sections/final/index.ts`
  - final 배럴 export

## 유지보수 가이드

- 새 슬라이드 섹션 추가 시:
  1. `_sections/<name>` 생성
  2. 섹션 컴포넌트 + `index.ts` 추가
  3. `CurriculumSection.tsx`에 `SlidePanel`로 연결
  4. `totalSlides` 및 네비게이션 동작 확인

- 데이터 변경이 필요한 경우:
  - 하드코딩 대신 `_data/*.json` 먼저 수정
  - 섹션 컴포넌트는 데이터 렌더링만 담당하도록 유지
