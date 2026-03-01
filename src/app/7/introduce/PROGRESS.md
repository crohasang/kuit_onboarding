# 7/introduce 진행 기록

## 1) 초기 정리
- `7/introduce`를 `6/introduce`와 분리된 독립 구조로 전환.
- Three.js 실험 코드는 제거.
- `BodyClassManager`로 `seventh-introduce-page` 클래스 적용.

## 2) 인트로 애니메이션
- 슬롯머신 릴 형태의 `777` 애니메이션 구현.
- 좌/우 폭죽 이펙트 추가.
- `777`이 위로 페이드아웃되도록 전환 구현.

## 3) 커리큘럼 데이터
- 커리큘럼 JSON 저장:
  - `src/app/7/introduce/_data/curriculum.json`
- 파트별 9주차 데이터(Web/Android/Server/PM/Designer) 사용.

## 4) 커리큘럼 컴포넌트 구성
- 타입 정의:
  - `src/app/7/introduce/_components/curriculum.types.ts`
- 섹션 컴포넌트:
  - `src/app/7/introduce/_components/CurriculumSection.tsx`
- 파트 로티 탭:
  - `src/app/7/introduce/_components/PartLottieStrip.tsx`
- 주차 라인:
  - `src/app/7/introduce/_components/WeekTimeline.tsx`

## 5) Lottie 경로 전략
- `next.config.mjs` rewrite 추가:
  - `/lottie/seventh-introduce/:path*`
  - `-> https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/:path*`
- 7기 경로를 사용하되 실제 파일은 6기 리소스 재사용.

## 6) 디자인/인터랙션
- 전체 배경에 글라스모피즘 스타일 적용(다크 베이스 + 그린/블루 글로우 + 노이즈).
- 커리큘럼 패널/아이템에 글라스 스타일 적용.
- 모바일에서 로티 탭 5개를 2-2-1이 아닌 가로 스크롤 1줄로 처리.
- 스크롤바 숨김 처리 적용.

## 7) 텍스트/레이아웃 변경
- `Week 1` 표기를 `1주차`로 변경.
- 주차 행 간격 축소.
- 주차 제목 텍스트 영역:
  - 줄바꿈 대신 가로 스크롤로 확인 가능
  - 스크롤바는 숨김

## 8) 애니메이션 범위 조정
- 제목/상단 안내 문구 애니메이션 제거.
- 주차 라인 텍스트에만 글자 생성(stagger) 애니메이션 적용.

## 9) 파트 기본값/순서
- 기본 선택 파트: `android`.
- JSON 순서: `android`를 `web`보다 앞에 배치.
- UI 탭(로티) 순서 고정:
  - `android -> web -> server -> pm -> designer`

## 10) 주요 파일 목록
- `src/app/7/introduce/page.tsx`
- `src/app/7/introduce/AGENTS.md`
- `src/app/7/introduce/PROGRESS.md`
- `src/app/7/introduce/_components/BodyClassManager.tsx`
- `src/app/7/introduce/_components/IntroduceAnimationContainer.tsx`
- `src/app/7/introduce/_components/CurriculumSection.tsx`
- `src/app/7/introduce/_components/PartLottieStrip.tsx`
- `src/app/7/introduce/_components/WeekTimeline.tsx`
- `src/app/7/introduce/_components/CurriculumGlass.module.css`
- `src/app/7/introduce/_components/curriculum.types.ts`
- `src/app/7/introduce/_data/curriculum.json`
- `next.config.mjs`
