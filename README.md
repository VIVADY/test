# Handoff: TEMEN — Personal Data Dashboard

## Overview
TEMEN은 개인의 일상 데이터(가계부, 자동차, 건강, 구독, 할 일)를 한 곳에서 관리·시각화하는 웹앱입니다. Tesla 공식 홈페이지의 디자인 언어(풀블리드 히어로 + 중앙정렬 타이포그래피 + 카테고리 카드 행)를 참고한 다크모드 미니멀 대시보드입니다.

우선 구현 카테고리는 **가계부**와 **자동차 관리**이며, 이후 건강·구독·할 일·여행 등으로 자연스럽게 확장 가능한 카드형 구조입니다.

## About the Design Files
이 번들의 HTML 파일은 **디자인 레퍼런스**입니다 — 의도한 룩앤필과 인터랙션을 보여주는 프로토타입이지 그대로 프로덕션에 복사할 코드가 아닙니다. 작업의 목표는 **이 HTML 디자인을 타겟 코드베이스의 기존 환경**(React, Vue, Next.js, SwiftUI, 네이티브 등)에서 그곳의 컨벤션·컴포넌트 라이브러리·디자인 시스템에 맞춰 **재현**하는 것입니다. 아직 코드베이스가 없다면, 프로젝트에 가장 적합한 프레임워크를 선택해 구현해 주세요.

권장 스택: **Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Recharts** — 정적 시각화 위주이고 다크모드 기반이라 잘 맞습니다.

## Fidelity
**High-fidelity (hifi)**입니다. 색상, 타이포그래피, 간격, 인터랙션 모두 의도된 최종 값입니다. 픽셀 단위로 재현하시되, 차트와 컴포넌트는 코드베이스 기존 라이브러리를 활용해 주세요. 데이터는 모두 더미입니다 — 실제 데이터 모델/스토어는 직접 설계해야 합니다.

## Screens / Views

### 1. Top Navigation (전역)
- **Layout**: `position: fixed; top: 0;` 3컬럼 그리드 `200px 1fr 200px`, 패딩 `18px 28px`, 상단 그라디언트 배경 + `backdrop-filter: blur(8px)`
- **Left**: 브랜드 워드마크 `T E M E N` — `letter-spacing: 0.42em; font-weight: 600; font-size: 14px;`
- **Center**: 메뉴 — 대시보드 / 가계부 / 자동차 / 살펴보기 (`font-size: 13px; gap: 32px;`, hover 시 `background: rgba(255,255,255,0.06)` + `border-radius: 8px`)
- **Right**: 검색 아이콘, 알림 아이콘, 32×32 원형 아바타(이니셜 표시)

### 2. Hero (랜딩)
- **Purpose**: 첫인상 + 대시보드 진입점
- **Layout**: `100vh`, `min-height: 720px`, 풀블리드 배경 이미지(밤하늘 별) + 그라디언트 오버레이(상하 어둡게), 콘텐츠 하단 14vh 위치, 중앙정렬
- **Components**:
  - Eyebrow: `— Personal data, your way` (모노스페이스, 11px, letter-spacing 0.2em, 대문자, fg-3 색)
  - 헤드라인: `내 모든 정보를 / <em>한 곳에서</em>` — Inter/Pretendard 500, 클램프 `clamp(56px, 8vw, 104px)`, line-height 0.95, letter-spacing -0.03em, `<em>`은 italic 300 + fg-2 색
  - 서브 카피: 17px, line-height 1.55, max-width 540px, fg-2 색
  - CTA 두 개: `대시보드 열기` (primary, white bg, dark text), `새 기록 추가` (ghost, blur background) — 둘 다 높이 42px, padding `0 28px`, border-radius 22px, min-width 220px
  - Scroll cue: 하단 28px, "SCROLL" + 1px 28px 그라디언트 라인

### 3. Overview Stats (이번 달 한눈에)
- **Purpose**: 5개 영역의 핵심 지표 요약
- **Layout**: 섹션 패딩 `96px 28px`, max-width 1440px. Section header: 좌측 eyebrow+h2, 우측 sub copy. 그 아래 4컬럼 그리드 `gap: 14px`
- **Stat 카드**: `bg-2` 배경, `1px solid var(--line)`, border-radius 22px, 패딩 28px, min-height 200px. 구성: label row (모노 10px UPPERCASE + 색상 dot) → value (38px, -0.02em letter-spacing, 단위는 16px fg-3) → spark/bar SVG 36px height → meta line (12px, fg-3, delta는 positive/danger 색)
- **표시 데이터** (모두 더미):
  - 지출: ₩1,847,200 · 예산 대비 +8.2% (warning dot, danger delta)
  - 주행: 1,284 km · 평균 연비 12.4 km/L (positive delta)
  - 활동: 23 / 30 day · 목표 76.7% (bar chart sparkline)
  - 구독: ₩147,800/mo · 활성 12 · 다음 결제 D-3 (accent dot)

### 4. Ledger Row (가계부)
- **Layout**: 풀블리드 카드 row, `height: 540px`, border-radius 22px. 좌측 정렬 콘텐츠(max-width 580px) — `cat-eyebrow` + `h3.cat-title` (56px, -0.025em) + sub + 두 개 CTA. 우측에는 `position: absolute; left/right/bottom: 56px;` 위치에 두 개의 floating panel
- **Background**: 동전·차트 이미지 + 좌→우 어두움→투명 그라디언트 + 하단 어둡게
- **Panel 1 (Daily Spend)**: 30일 중 최근 15일을 막대 차트로. 최근 5일은 `bar` (불투명도 0.85), 그 이전은 `bar dim` (fg-4 회색, 0.6). 패널 헤더에 총합 ₩1,847,200
- **Panel 2 (By Category)**: 식비 624,800 (84%) / 교통 421,000 (62%) / 주거 350,000 (48%) / 쇼핑 238,400 (36%) / 기타 213,000 (30%). 각 행: name(13px fg-2) + 4px 진행 바 + 모노 amount
- **Panel chrome**: `rgba(20,23,26,0.72)` + `backdrop-filter: blur(18px)` + `1px solid var(--line-2)` + border-radius 14px + padding 22px

### 5. Car Row (자동차 관리)
- **Layout**: ledger row와 동일한 `cat-row` 패턴이지만 `center` variant — 콘텐츠 상단 중앙 정렬. 4컬럼 floating stat 그리드를 하단 `position: absolute; left/right/bottom: 56px`에 배치
- **Background**: 도로 위 자동차 이미지 + 상단 살짝 + 하단 진하게 그라디언트
- **Car Stats** (4개 패널, 동일 chrome):
  - ODOMETER: 42,184 km · 현대 아반떼
  - 평균 연비: 12.4 km/L · 30일 평균
  - 이번 달 주행: 1,284 km · ₩168,400 연료비
  - 다음 정비: 2,816 km 후 · 엔진오일

### 6. Mini Card Grid (그 밖의 영역)
- **Layout**: 3컬럼 그리드 gap 14px. 각 카드 `height: 420px`, border-radius 22px, hover 시 배경 이미지 1.04x scale (transition 0.6s)
- **Health Card**: 걷는 사람 이미지. 우상단 SVG 진행 ring (74%, 64×64, stroke 4px, dasharray 163.4). 좌상단 mini-data: Steps 8,420/10k · Run 12 days. 하단 body: Health · 건강 · 운동 + 카피 + "살펴보기 →" 링크
- **Subscriptions Card**: 카드/결제 이미지. 좌상단 mini-data 3행: Active 12 services / Monthly ₩147,800 / Next Netflix · D-3
- **Tasks Card**: 노트 이미지. mini-data: Today 3/7 / Notes 128 / Pinned 4

### 7. Footer
- 상단 1px 라인, 패딩 `40px 28px 28px`, 좌측 카피라이트 + 우측 링크 4개(About/Privacy/Backup/Help), 12px fg-3

## Interactions & Behavior
- 네비게이션 메뉴 항목 hover: `background: rgba(255,255,255,0.06)`, color → fg
- CTA 버튼 hover: primary는 fg → #fff, ghost는 bg 진하게
- Mini card hover: 내부 `.bg`만 `transform: scale(1.04)`, transition 0.6s
- 스크롤 시 nav는 fixed로 유지 — 상단 그라디언트 + blur로 컨텐츠 위에 레이어
- Tweaks 패널(우측 하단): 색감(tone)·액센트·밀도·섹션 간격·폰트 5개 컨트롤. 디자인 시스템 토글 데모이며, 프로덕션에는 빼도 됨

## Responsive Behavior
- ≤1100px: overview/car-stats/grid-3 → 2컬럼, ledger-grid는 정적 1컬럼으로 풀어 패딩 28px, cat-row 높이 자동
- 모바일 정밀 디자인은 별도 작업 필요 — 현재 데스크톱(1440px 그리드) 우선

## State Management
정적 데모이므로 모든 데이터가 하드코딩되어 있습니다. 실제 구현 시:
- **User**: 프로필, 환경설정 (테마/액센트/밀도)
- **Ledger**: 거래 내역 [{ date, amount, category, memo }], 월별 카테고리 합계, 일별 합계, 예산 한도
- **Car**: 차량 메타 (모델, 등록일), 주행 기록 [{ date, odometer, distance, fuel }], 정비 이력, 다음 정비 예정
- **Health**: 일별 걸음, 운동 기록 [{ date, type, duration }]
- **Subscriptions**: [{ service, amount, billingCycle, nextChargeDate, active }]
- **Tasks**: [{ id, text, done, pinned, createdAt }], notes [{ id, text, createdAt }]
- 모든 카테고리는 카드 컴포넌트 + route를 추가하는 식으로 확장

## Design Tokens

### Colors (다크 / Neutral 톤이 기본)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#0b0d0e` | Page background |
| `--bg-2` | `#14171a` | Card / stat surface |
| `--bg-3` | `#1d2125` | Elevated surface |
| `--fg` | `#f5f6f7` | Primary text, primary CTA bg |
| `--fg-2` | `#c9ccd1` | Secondary text |
| `--fg-3` | `#8a8f97` | Tertiary / labels |
| `--fg-4` | `#5a5f66` | Disabled / dim bars |
| `--line` | `rgba(255,255,255,0.08)` | Default border |
| `--line-2` | `rgba(255,255,255,0.14)` | Floating panel border |
| `--accent` | `oklch(72% 0.10 210)` | Default accent (ice) |
| `--positive` | `oklch(75% 0.10 155)` | Up trend / success |
| `--warning` | `oklch(80% 0.11 75)` | Spend dot |
| `--danger` | `oklch(70% 0.13 25)` | Negative delta |

대안 톤 (Tweaks):
- Warm: bg `#0d0c0a`, bg-2 `#18160f`, bg-3 `#221f17`
- Cool: bg `#0a0d10`, bg-2 `#131820`, bg-3 `#1c2330`

대안 액센트: ice `oklch(78% 0.08 220)`, moss `oklch(72% 0.09 150)`, amber `oklch(78% 0.12 75)`, white `#f5f6f7`

### Spacing
- Section 패딩: `96px 28px` (default), `72px 24px` (cozy), `64px 28px` (condensed)
- Card 패딩: 28px (stat), 22px (panel), 26px-28px (mini card body)
- Section header → content: 48px
- Inter-card gap: 14px (모든 그리드 공통)

### Border Radius
- `--radius`: 14px (panel)
- `--radius-lg`: 22px (stat card, hero card, mini card)
- 버튼: 22px (pill)
- 아바타·아이콘 버튼: 50% (32×32)

### Typography
- Display: **Inter** 500 (제목, 큰 숫자)
- Body: **Pretendard** 400/500 (한글 본문, 라벨)
- Mono: **JetBrains Mono** 400/500 (UPPERCASE eyebrow, 숫자, 데이터 행)
- 스케일:
  - Hero h1: clamp(56px, 8vw, 104px) / 0.95 / -0.03em
  - Section h2: 40px / -0.02em / 500
  - Stat value: 38px / -0.02em / 500
  - Cat title: 56px / -0.025em
  - Mini card h3: 28px / -0.02em
  - Body: 14-15px / 1.55
  - Eyebrow (mono UPPERCASE): 10-11px / 0.18-0.2em letter-spacing

### Shadows / Effects
- Floating panel: `backdrop-filter: blur(18px)` + 반투명 배경
- Nav: `backdrop-filter: blur(8px)` + 상단 그라디언트
- 명시적 box-shadow는 거의 없음 — Tesla처럼 톤·블러·라인으로 깊이감 표현

## Assets
모든 이미지는 Unsplash 플레이스홀더입니다 (개발 시 자체 자산으로 교체 권장):
- Hero: `photo-1451187580459-43490279c0fa` (밤하늘 별)
- Ledger: `photo-1554224155-6726b3ff858f` (동전/계산기)
- Car: `photo-1494976388531-d1058494cdd8` (도로 위 자동차)
- Health: `photo-1571019613454-1cb2f99b2d8b` (러너)
- Subscriptions: `photo-1517245386807-bb43f82c33c4` (카드/디바이스)
- Tasks: `photo-1455390582262-044cdead277a` (노트)

아이콘은 모두 인라인 SVG (검색·알림 등). 프로덕션에서는 lucide-react 같은 아이콘 세트 사용 권장.

## Files
- `TEMEN.html` — 메인 디자인 레퍼런스 (전체 페이지)
- `tweaks-panel.jsx` — 데모용 Tweaks 컨트롤 패널 (프로덕션에는 불필요)
- 둘 다 이 폴더에 함께 동봉되어 있습니다.

## Implementation Checklist (recommended)
1. 디자인 토큰을 Tailwind config 또는 CSS variables로 이식
2. 라우트 분리: `/` (랜딩 hero) / `/dashboard` (overview + 카테고리 행) — 또는 한 페이지 스크롤 유지
3. `<StatCard>`, `<CatRow>`, `<MiniCard>`, `<Panel>` 4개 핵심 컴포넌트 추출
4. Recharts 등으로 BarChart/Sparkline 컴포넌트 구현 (현재는 인라인 SVG)
5. 상태/스토어 설계 후 더미 데이터를 실제 데이터로 교체
6. 카테고리 추가 메커니즘: `<MiniCard>`를 데이터 드리븐으로 만들어 새 카테고리만 등록하면 그리드에 자동 합류하도록
