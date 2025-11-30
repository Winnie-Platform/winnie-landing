# Winnie Landing Page Migration Project

> WordPress에서 Next.js로 마이그레이션 - 현대적이고, 가볍고, SEO 친화적이며 AI 접근성이 뛰어난 랜딩페이지

---

## 1. 서비스 분석 (mywinnie.com)

### 1.1 서비스 개요

| 항목 | 내용 |
|------|------|
| **서비스명** | Winnie (위니) |
| **법인명** | (주)마이위니 |
| **타겟 시장** | 베트남 거주 한인, 베트남 SME(소상공인), 로컬 사용자 |
| **서비스 유형** | 로컬 회원권/멤버십 마켓플레이스 플랫폼 |
| **플랫폼** | iOS, Android 모바일 앱 |

### 1.2 핵심 가치 제안 (Value Proposition)

```
"우리동네 혜택이 몽땅 내 손안에"
"베트남에서도 이제 스마트한 소비생활로 전환하세요!"
```

- **스마트한 소비생활** - 주변 가게의 회원권을 모바일로 간편하게 관리
- **무료 바우처 혜택** - 다양한 프로모션 및 할인 혜택 제공
- **단골 가게 핀업** - 자주 이용하는 가게를 즐겨찾기하여 관리

### 1.3 주요 기능 (App Features)

| 기능 | 설명 |
|------|------|
| **가게/회원권 검색** | 내 주변 가게 및 회원권 상품 검색 |
| **구매 신청/사용 요청** | 회원권 구매 및 사용 신청 프로세스 |
| **채팅 문의** | 가게 사장님과 실시간 채팅 상담 |
| **내 회원권 관리** | 구매한 회원권 조회, 사용내역, 잔여횟수 관리 |

### 1.4 서비스 생태계

```
┌─────────────────────────────────────────────────────────────┐
│                    Winnie Ecosystem                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [Consumer App]          [Business Portal]                 │
│   Winnie Mobile App       winnievendor.com                  │
│   (iOS / Android)         - 가게 등록/관리                   │
│   - 회원권 검색/구매      - 회원권 상품 생성                  │
│   - 사용 요청             - 고객 관리                        │
│   - 채팅 문의                                               │
│                                                             │
│   [Landing Page]          [Yellow Pages]                    │
│   mywinnie.com            yellow.mywinnie.com               │
│   - 서비스 소개           - 가게 디렉토리                    │
│   - 앱 다운로드 유도      - 업종별 검색                      │
│   - 블로그 콘텐츠                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 1.5 공식 채널

**플랫폼:**
- 소비자 앱: Winnie (App Store / Google Play)
- 랜딩페이지: https://mywinnie.com
- 옐로우페이지: https://yellow.mywinnie.com
- 사업자 포털: https://winnievendor.com
- 블로그: WordPress 기반 (Headless CMS로 활용 예정)

**소셜 미디어:**
- Facebook: https://facebook.com/Winnie.yeowubie
- Instagram: https://instagram.com/mywinnie.vn/
- Threads: https://threads.com/@mywinnie.vn
- YouTube: https://youtube.com/@my-winnie
- TikTok: https://tiktok.com/@mywinnie2024

**앱 다운로드:**
- App Store: (QR 코드 제공)
- Google Play: (QR 코드 제공)

---

## 2. 레거시 사이트 분석 (mywinnie.com 현황)

### 2.1 현재 사이트 구조

```
현재 mywinnie.com 구조:
┌─────────────────────────────────────────────────────────────┐
│  Header (고정 네비게이션)                                    │
│  - 로고 "Winnie"                                            │
│  - 간단 메뉴                                                │
│  - 다운로드 CTA 버튼                                        │
├─────────────────────────────────────────────────────────────┤
│  Hero Banner                                                │
│  - H1: "상상하는 모든 서비스가 한 곳에!"                      │
│  - 부제: "내 주변에 새로운 단골가게를 찾고, 선 결제 할인 받고, │
│          리워드 스탬프/포인트 받고, 간편 예약까지"             │
│  - CTA: 앱 다운로드 버튼                                     │
├─────────────────────────────────────────────────────────────┤
│  서비스 소개 섹션                                            │
│  - H2: "위니 Winnie는"                                      │
│  - 2열 레이아웃: 고객 혜택 | 판매자 혜택                      │
├─────────────────────────────────────────────────────────────┤
│  기능 상세 섹션                                              │
│  - 사용자: 즐겨찾기, 신제품 소식, 리워드 수령                  │
│  - 판매자: 마케팅, 단골 확장, 예약 시스템                     │
├─────────────────────────────────────────────────────────────┤
│  결제 방식 섹션                                              │
│  - "직접 지불 방식" - 플랫폼 수수료 없음                      │
├─────────────────────────────────────────────────────────────┤
│  Footer                                                     │
│  - 회사 정보, 연락처, 정책 링크, 소셜 미디어                  │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 현재 디자인 분석

| 요소 | 현재 상태 |
|------|-----------|
| **컬러** | Primary: 블루/그린, Accent: 오렌지/옐로우 (CTA) |
| **타이포** | Bold Sans-serif (H1: 60px+), Body: 16-18px |
| **레이아웃** | 단일 페이지 SPA, 수직 스크롤, 모바일 우선 |
| **애니메이션** | 스크롤 시 페이드인/슬라이드 |

### 2.3 현재 사이트 강점 (유지할 요소)

- **간결함**: 30초 내 핵심 파악 가능
- **CTA 강조**: 모든 섹션에 다운로드 유도
- **모바일 퍼스트**: 터치 친화적 버튼 크기
- **직관적 구조**: 스크롤만으로 모든 콘텐츠 접근

### 2.4 개선 필요 사항

- [ ] 앱 스크린샷/데모 비디오 부재
- [ ] 사용자 리뷰/테스티모니얼 없음
- [ ] 다국어 지원 미흡 (베트남어/영어)
- [ ] 소셜 프루프 (다운로드 수, 평점) 미노출
- [ ] 판매자 전용 랜딩 섹션 분리 필요

---

## 3. 현재 기술적 문제점 (WordPress 기반)

### 3.1 성능 이슈
- [ ] 무거운 페이지 로딩 (WordPress + 플러그인 오버헤드)
- [ ] 불필요한 JavaScript/CSS 번들
- [ ] 이미지 최적화 부족
- [ ] CDN 미활용

### 3.2 SEO 한계
- [ ] 동적 메타태그 관리 어려움
- [ ] 구조화된 데이터 (Schema.org) 부재
- [ ] Core Web Vitals 점수 저조
- [ ] 다국어 SEO 최적화 부족

### 3.3 AI 접근성 부족
- [ ] LLM 친화적 콘텐츠 구조 없음
- [ ] llms.txt 미제공
- [ ] Open Graph / Twitter Card 최적화 부족
- [ ] 시맨틱 HTML 구조 미흡

### 3.4 유지보수 어려움
- [ ] WordPress 보안 업데이트 부담
- [ ] 플러그인 호환성 이슈
- [ ] 커스터마이징 제약
- [ ] 버전 관리 어려움

---

## 4. 개선 방안 및 신규 랜딩페이지 기획

### 3.1 페이지 구조 (Sitemap)

```
/                           # 메인 랜딩페이지
├── /#hero                  # 히어로 섹션
├── /#features              # 주요 기능 소개
├── /#how-it-works          # 이용 방법
├── /#benefits              # 혜택 안내
├── /#download              # 앱 다운로드 CTA
├── /#faq                   # 자주 묻는 질문
└── /#contact               # 문의하기

/blog                       # 블로그 (WP Headless CMS 연동)
├── /blog/[slug]            # 개별 포스트
└── /blog/category/[cat]    # 카테고리별 목록

/for-business               # 사업자용 페이지 (winnievendor.com 연결)
/privacy                    # 개인정보처리방침
/terms                      # 이용약관
```

### 3.2 블로그 아키텍처 (WordPress Headless CMS)

기존 WordPress 블로그를 Headless CMS로 활용하여 콘텐츠 관리 효율성 유지

```
┌─────────────────┐     REST API      ┌─────────────────┐
│   WordPress     │ ◄───────────────► │   Next.js       │
│   (Headless)    │    /wp-json/wp/v2 │   Frontend      │
│                 │                   │                 │
│ - 포스트 작성   │                   │ - SSG 빌드      │
│ - 미디어 관리   │                   │ - ISR 적용      │
│ - SEO 설정      │                   │ - 이미지 최적화 │
└─────────────────┘                   └─────────────────┘
```

**장점:**
- 기존 콘텐츠 및 에디터 경험 유지
- 마케팅팀 독립적 콘텐츠 관리 가능
- Next.js의 성능 이점 + WP의 CMS 편의성

### 3.3 섹션별 상세 기획

#### Hero Section
```
┌─────────────────────────────────────────────────────────────┐
│  [Winnie Logo]                                    [KO|VN|EN]│
├─────────────────────────────────────────────────────────────┤
│                                                             │
│     위니 모바일앱으로                                         │
│     스마트한 소비생활                                         │
│                                                             │
│     우리동네 혜택이 몽땅 내 손안에,                            │
│     베트남에서도 이제 스마트한 소비생활로 전환하세요!            │
│                                                             │
│     [App Store]  [Google Play]                              │
│                                                             │
│                    [Hero Image: 위니 캐릭터 + 폰 목업]        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Features Section
```
┌─────────────────────────────────────────────────────────────┐
│                    위니와 함께하는 스마트 소비                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Icon]              [Icon]              [Icon]             │
│  가게/회원권 검색     구매 신청/사용       채팅 문의           │
│  내 주변 가게와       간편한 구매와        실시간 상담으로      │
│  회원권을 한눈에      사용 요청            궁금증 해결          │
│                                                             │
│  [Icon]              [Icon]              [Icon]             │
│  내 회원권 관리       무료 바우처          단골 가게 핀업       │
│  구매/사용 내역       다양한 혜택을        자주 가는 가게를      │
│  한번에 확인          무료로 받기          즐겨찾기             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### How It Works Section
```
┌─────────────────────────────────────────────────────────────┐
│                    이용 방법                                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Step 1              Step 2              Step 3             │
│  [앱 다운로드]        [회원가입]           [검색 & 구매]       │
│  App Store 또는      간단한 정보로        내 주변 가게의       │
│  Google Play에서     빠르게 가입          회원권을 검색하고     │
│  위니 앱 다운로드                         구매하세요           │
│                                                             │
│  Step 4              Step 5                                 │
│  [사용 요청]          [혜택 누리기]                           │
│  가게 방문 시         무료 바우처와                           │
│  앱에서 사용 요청     다양한 혜택을                           │
│                      누려보세요                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Download CTA Section
```
┌─────────────────────────────────────────────────────────────┐
│                    지금 바로 시작하세요                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│     [QR Code - App Store]    [QR Code - Google Play]        │
│                                                             │
│     또는                                                     │
│                                                             │
│     [Download on App Store]  [Get it on Google Play]        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Footer Section
```
┌─────────────────────────────────────────────────────────────┐
│  [Winnie Logo]                                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  서비스              회사 정보             고객 지원          │
│  ─────────          ─────────            ─────────          │
│  소비자 앱           회사 소개             자주 묻는 질문      │
│  사업자 등록         이용약관              1:1 문의           │
│  옐로우페이지        개인정보처리방침       공지사항           │
│                                                             │
│  소셜 미디어                                                 │
│  [FB] [IG] [YT] [TT] [Threads]                              │
│                                                             │
│  © 2024 (주)마이위니. All rights reserved.                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. 기술 스택 및 아키텍처

### 4.1 권장 기술 스택

| 카테고리 | 기술 | 선정 이유 |
|----------|------|-----------|
| **Framework** | Next.js 14 (App Router) | SSG/SSR 지원, 최적화된 이미지 처리, SEO 친화적 |
| **Language** | TypeScript | 타입 안전성, 개발 생산성 |
| **UI Library** | **shadcn/ui** | 엔터프라이즈급, Radix UI 기반 접근성, 완전한 커스터마이징 |
| **Styling** | Tailwind CSS | 빠른 개발, 작은 번들 사이즈, 유지보수 용이 |
| **Animation** | Framer Motion | 부드러운 애니메이션, 성능 최적화 |
| **Icons** | Lucide React | shadcn/ui 기본 아이콘, 가벼움 |
| **Deployment** | Vercel | Next.js 최적화, Edge Network, 무료 SSL |
| **Analytics** | Vercel Analytics + GA4 | 성능 모니터링, 사용자 분석 |
| **i18n** | next-intl | 다국어 지원 (KO, VN, EN) |

#### shadcn/ui 선정 이유

```
엔터프라이즈급 UI 라이브러리 비교:

┌──────────────┬─────────────┬─────────────┬─────────────┐
│              │ shadcn/ui   │ Ant Design  │ Chakra UI   │
├──────────────┼─────────────┼─────────────┼─────────────┤
│ 번들 사이즈   │ 매우 작음    │ 큼          │ 중간        │
│ 커스터마이징  │ 완전 제어    │ 제한적      │ 보통        │
│ 접근성       │ Radix 기반   │ 보통        │ 좋음        │
│ Tailwind     │ 네이티브     │ 별도 설정   │ 충돌 가능   │
│ 트리쉐이킹   │ 완벽        │ 제한적      │ 보통        │
│ 디자인 모던함 │ 최신 트렌드  │ 비즈니스    │ 심플        │
└──────────────┴─────────────┴─────────────┴─────────────┘

선정: shadcn/ui
- 코드 완전 소유 (copy-paste 방식)
- Radix UI Primitives 기반 접근성 보장
- Tailwind CSS 네이티브 통합
- Vercel/Next.js 공식 권장
- 모바일 최적화 용이
```

### 4.2 프로젝트 구조

```
winnie-landing/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── features/
│   │   ├── app-screenshots/
│   │   └── mascot/
│   ├── fonts/
│   ├── llms.txt              # AI 접근성
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx      # 메인 랜딩
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx  # 블로그 목록
│   │   │   │   └── [slug]/   # 개별 포스트
│   │   │   ├── for-business/
│   │   │   ├── privacy/
│   │   │   └── terms/
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── Download.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ...
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── utils.ts
│   │   └── wordpress.ts      # WP REST API 클라이언트
│   ├── messages/
│   │   ├── ko.json
│   │   ├── vi.json
│   │   └── en.json
│   └── types/
│       └── index.ts
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

### 4.3 성능 목표

| 메트릭 | 목표 | 현재(예상) |
|--------|------|------------|
| **LCP** | < 2.5s | > 4s (WP) |
| **FID** | < 100ms | > 200ms |
| **CLS** | < 0.1 | > 0.25 |
| **Lighthouse Score** | > 95 | < 60 |
| **Page Size** | < 500KB | > 2MB |
| **Time to Interactive** | < 3s | > 5s |

---

## 6. SEO 최적화 전략

### 5.1 Technical SEO

```typescript
// app/[locale]/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://mywinnie.com'),
  title: {
    default: '위니 - 베트남 로컬 회원권 플랫폼 | Winnie Vietnam',
    template: '%s | 위니'
  },
  description: '베트남에서 스마트한 소비생활! 내 주변 가게 회원권을 검색하고, 구매하고, 관리하세요. 무료 바우처와 다양한 혜택을 누려보세요. Smart membership platform for Vietnam.',
  keywords: ['위니', 'winnie', 'vietnam membership', '회원권', '멤버십', '바우처', '베트남', 'SME', 'local business'],
  authors: [{ name: '(주)마이위니' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    alternateLocale: ['vi_VN', 'en_US'],
    siteName: 'Winnie',
    images: ['/og-image.png']
  },
  twitter: {
    card: 'summary_large_image'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};
```

### 5.2 구조화된 데이터 (Schema.org)

```json
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Winnie - 위니",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "LifestyleApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1200"
  },
  "author": {
    "@type": "Organization",
    "name": "(주)마이위니",
    "url": "https://mywinnie.com"
  }
}
```

### 5.3 다국어 SEO

```typescript
// next.config.js
module.exports = {
  i18n: {
    locales: ['ko', 'vi', 'en'],
    defaultLocale: 'ko',
    localeDetection: true
  }
};
```

```html
<!-- hreflang 태그 -->
<link rel="alternate" hreflang="ko" href="https://mywinnie.com/ko" />
<link rel="alternate" hreflang="vi" href="https://mywinnie.com/vi" />
<link rel="alternate" hreflang="en" href="https://mywinnie.com/en" />
<link rel="alternate" hreflang="x-default" href="https://mywinnie.com" />
```

---

## 7. AI 접근성 최적화

### 6.1 llms.txt 파일

```markdown
# Winnie (위니)

> 베트남 로컬 회원권/멤버십 마켓플레이스 플랫폼

## About
Winnie는 베트남의 로컬 비즈니스와 소비자를 연결하는 회원권 마켓플레이스 앱입니다.
베트남 거주 한인, SME(소상공인), 로컬 사용자 모두를 위한 스마트한 소비 플랫폼입니다.

## Key Features
- 가게/회원권 검색: 내 주변 가게와 회원권 상품 검색
- 구매 신청/사용 요청: 모바일로 간편하게 회원권 구매 및 사용
- 채팅 문의: 가게 사장님과 실시간 채팅
- 내 회원권 관리: 구매 내역, 사용 내역, 잔여 횟수 확인

## For Businesses (SME)
- 회원권 상품 등록 및 관리
- 고객 관리 및 분석
- 프로모션/바우처 발행

## Download
- iOS: App Store에서 "위니" 또는 "Winnie" 검색
- Android: Google Play에서 "위니" 또는 "Winnie" 검색

## Official Links
- Landing Page: https://mywinnie.com
- Business Portal: https://winnievendor.com
- Yellow Pages: https://yellow.mywinnie.com
- Blog: https://mywinnie.com/blog

## Social Media
- Facebook: https://facebook.com/Winnie.yeowubie
- Instagram: https://instagram.com/mywinnie.vn/
- YouTube: https://youtube.com/@my-winnie
- TikTok: https://tiktok.com/@mywinnie2024

## Contact
- Company: (주)마이위니
- Location: Vietnam
- Target: Korean expats, Vietnamese SMEs, Local consumers
```

### 6.2 시맨틱 HTML 구조

```html
<main>
  <article itemscope itemtype="https://schema.org/MobileApplication">
    <header>
      <h1 itemprop="name">위니 - 스마트한 소비생활</h1>
      <p itemprop="description">베트남 로컬 회원권 플랫폼</p>
    </header>

    <section aria-labelledby="features-heading">
      <h2 id="features-heading">주요 기능</h2>
      <!-- Feature cards with proper semantic markup -->
    </section>

    <section aria-labelledby="download-heading">
      <h2 id="download-heading">앱 다운로드</h2>
      <!-- Download CTAs -->
    </section>
  </article>
</main>
```

### 6.3 메타데이터 최적화

```html
<!-- AI 크롤러 친화적 메타태그 -->
<meta name="description" content="베트남 로컬 회원권 플랫폼 위니. 내 주변 가게 회원권 검색, 구매, 관리를 한 번에. Vietnam's smart membership marketplace.">
<meta name="ai-content-type" content="landing-page">
<meta name="ai-summary" content="Winnie is a membership marketplace app in Vietnam connecting local SMEs with consumers (Korean expats, Vietnamese locals). Users can discover, purchase, and manage local business memberships.">
```

---

## 8. UX 전략 (2차 행동 전환 최적화)

### 8.1 전환 퍼널 설계

```
┌─────────────────────────────────────────────────────────────┐
│                    Conversion Funnel                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [1. Awareness]     방문자가 페이지 도착                      │
│        ↓                                                    │
│  [2. Interest]      Hero에서 가치 제안 인식 (3초 내)          │
│        ↓                                                    │
│  [3. Desire]        기능/혜택 섹션에서 니즈 자극              │
│        ↓                                                    │
│  [4. Action]        앱 다운로드 클릭 (2차 행동 전환)          │
│                                                             │
│  목표: 방문자 → 앱 다운로드 전환율 > 3%                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 8.2 CTA 배치 전략 (앱 다운로드 최적화)

| 위치 | CTA 유형 | 목적 |
|------|----------|------|
| **Header** | 고정 다운로드 버튼 | 상시 접근성 |
| **Hero** | Primary CTA (App Store/Play Store) | 첫 전환 기회 |
| **Features 하단** | Secondary CTA | 기능 인지 후 전환 |
| **Testimonial 후** | Trust CTA | 신뢰 확보 후 전환 |
| **Footer 상단** | Final CTA (QR 코드 포함) | 마지막 전환 기회 |
| **Mobile Sticky** | 하단 고정 바 | 모바일 전용 상시 CTA |

### 8.3 소셜 프루프 (신뢰 요소)

```
┌─────────────────────────────────────────────────────────────┐
│                    Social Proof Elements                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [다운로드 수]        [앱스토어 평점]      [리뷰 수]          │
│   "10,000+"           "★★★★★ 4.8"       "500+ 리뷰"        │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  [사용자 후기]                                               │
│  "베트남에서 한인 가게 찾기 너무 편해요!" - 김OO, 호치민      │
│  "회원권 관리가 한 눈에 돼서 좋아요" - 이OO, 하노이           │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  [파트너 로고]                                               │
│  [가게1] [가게2] [가게3] [가게4] ...                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 8.4 스크롤 기반 인터랙션

```typescript
// 스크롤 진행률에 따른 CTA 노출 전략
const scrollInteractions = {
  '0-25%': {
    element: 'Hero CTA',
    action: 'Primary download buttons visible'
  },
  '25-50%': {
    element: 'Sticky Header CTA',
    action: 'Header download button appears'
  },
  '50-75%': {
    element: 'Inline CTA',
    action: 'Feature section CTA pulse animation'
  },
  '75-100%': {
    element: 'Mobile Sticky Bar',
    action: 'Bottom sticky bar appears (mobile only)'
  },
  'Exit Intent': {
    element: 'Modal',
    action: 'Exit intent popup with QR code (desktop only)'
  }
};
```

### 8.5 A/B 테스트 계획

| 테스트 | 변수 A | 변수 B | 측정 지표 |
|--------|--------|--------|-----------|
| Hero CTA 색상 | 블루 | 오렌지 | CTR |
| CTA 문구 | "무료 다운로드" | "지금 시작하기" | CTR |
| 소셜 프루프 위치 | Hero 하단 | Features 상단 | 전환율 |
| 모바일 Sticky Bar | 있음 | 없음 | 다운로드 수 |

---

## 9. 모바일 최적화 전략

### 9.1 Mobile-First 설계 원칙

```
┌─────────────────────────────────────────────────────────────┐
│              Mobile-First Design Breakpoints                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Mobile (Default)     Tablet              Desktop           │
│  < 768px              768px - 1024px      > 1024px          │
│                                                             │
│  ┌─────────┐         ┌───────────┐       ┌─────────────┐   │
│  │ 1 Column│         │ 2 Columns │       │  3 Columns  │   │
│  │ Stack   │         │ Grid      │       │  Grid       │   │
│  │         │         │           │       │             │   │
│  │ [CTA]   │         │ [CTA][CTA]│       │[CTA][CTA][] │   │
│  └─────────┘         └───────────┘       └─────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 9.2 터치 최적화

| 요소 | 최소 크기 | 간격 |
|------|-----------|------|
| **버튼** | 48px × 48px | 8px |
| **링크** | 44px 터치 영역 | 16px |
| **폼 입력** | 48px 높이 | 12px |
| **카드** | 전체 너비 | 16px 마진 |

### 9.3 모바일 전용 컴포넌트

```
┌─────────────────────────────────────────────────────────────┐
│                 Mobile-Specific Components                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [1] Sticky Download Bar (하단 고정)                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 🐰 위니 앱 다운로드    [App Store] [Play Store]     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  [2] Swipeable Feature Cards                                │
│  ← [Card 1] [Card 2] [Card 3] →                            │
│                                                             │
│  [3] Collapsible FAQ (Accordion)                            │
│  ▼ 자주 묻는 질문 1                                         │
│  ▼ 자주 묻는 질문 2                                         │
│                                                             │
│  [4] Bottom Sheet (상세 정보)                               │
│  ↑ 자세히 보기                                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 9.4 성능 최적화 (모바일)

| 최적화 항목 | 기법 | 목표 |
|-------------|------|------|
| **이미지** | WebP + srcset + lazy loading | LCP < 2.5s |
| **폰트** | next/font + subset (한글) | CLS < 0.1 |
| **JS** | Code splitting + dynamic import | FID < 100ms |
| **CSS** | Critical CSS inline + Tailwind purge | < 50KB |
| **애니메이션** | GPU 가속 (transform, opacity) | 60fps |

### 9.5 PWA 지원 (선택)

```json
// manifest.json
{
  "name": "Winnie - 위니",
  "short_name": "Winnie",
  "description": "베트남 로컬 회원권 플랫폼",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#3B82F6",
  "background_color": "#ffffff",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192" },
    { "src": "/icon-512.png", "sizes": "512x512" }
  ]
}
```

---

## 10. 개발 계획 (Milestones)

### Phase 1: 프로젝트 셋업 및 기본 구조
- [ ] Next.js 14 프로젝트 초기화
- [ ] TypeScript + ESLint + Prettier 설정
- [ ] Tailwind CSS 설정 및 디자인 토큰 정의
- [ ] 폴더 구조 및 기본 레이아웃 구성
- [ ] i18n (next-intl) 설정

### Phase 2: 핵심 컴포넌트 개발
- [ ] Header 컴포넌트 (로고, 네비게이션, 언어 선택)
- [ ] Hero 섹션
- [ ] Features 섹션
- [ ] How It Works 섹션
- [ ] Benefits 섹션
- [ ] Download CTA 섹션
- [ ] FAQ 섹션 (Accordion)
- [ ] Footer 컴포넌트

### Phase 3: 블로그 연동 (WordPress Headless CMS)
- [ ] WordPress REST API 클라이언트 구현
- [ ] 블로그 목록 페이지 개발
- [ ] 블로그 상세 페이지 개발
- [ ] ISR (Incremental Static Regeneration) 설정
- [ ] 블로그 SEO 최적화 (og:article 등)

### Phase 4: 콘텐츠 및 다국어 지원
- [ ] 한국어 콘텐츠 작성
- [ ] 베트남어 콘텐츠 번역
- [ ] 영어 콘텐츠 번역
- [ ] 이미지/에셋 최적화 및 적용

### Phase 5: SEO 및 AI 접근성
- [ ] 메타데이터 설정 (OG, Twitter Card)
- [ ] Schema.org 구조화 데이터
- [ ] llms.txt 파일 생성
- [ ] sitemap.xml 자동 생성
- [ ] robots.txt 설정

### Phase 6: 성능 최적화 및 배포
- [ ] 이미지 최적화 (next/image)
- [ ] 폰트 최적화 (next/font)
- [ ] Core Web Vitals 테스트 및 개선
- [ ] Vercel 배포 설정
- [ ] Analytics 연동

### Phase 7: QA 및 런칭
- [ ] 크로스 브라우저 테스트
- [ ] 모바일 반응형 테스트
- [ ] 접근성 (a11y) 테스트
- [ ] SEO 감사
- [ ] 최종 배포 및 DNS 설정

---

## 11. 디자인 시스템

### 11.1 컬러 팔레트

레거시 mywinnie.com 디자인을 참조하여 모던하게 재구성

```css
:root {
  /* Primary - Winnie Blue (레거시 유지) */
  --color-primary-50: #EBF5FF;
  --color-primary-100: #D1E9FF;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;
  --color-primary-700: #1D4ED8;

  /* Secondary - Winnie Mint/Green (레거시 유지) */
  --color-secondary-400: #4ADE80;
  --color-secondary-500: #22C55E;
  --color-secondary-600: #16A34A;

  /* CTA - Orange (레거시 CTA 색상 - 전환율 최적화) */
  --color-cta-400: #FB923C;
  --color-cta-500: #F97316;
  --color-cta-600: #EA580C;

  /* Accent - Yellow (보조 강조) */
  --color-accent-400: #FACC15;
  --color-accent-500: #EAB308;

  /* Neutral */
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-500: #6B7280;
  --color-gray-700: #374151;
  --color-gray-900: #111827;

  /* Semantic */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
}
```

#### 색상 사용 가이드

| 용도 | 색상 | 사용처 |
|------|------|--------|
| **Primary** | Blue | 로고, 헤더, 링크, 아이콘 |
| **Secondary** | Green | 성공 메시지, 혜택 강조 |
| **CTA** | Orange | 다운로드 버튼, 핵심 행동 유도 |
| **Background** | Gray-50 | 섹션 배경 교차 |
| **Text** | Gray-900 | 본문, 제목 |

### 11.2 타이포그래피

모든 언어(한국어, 베트남어, 영어)에 **Montserrat** 폰트 통일 사용

```css
:root {
  /* Montserrat - 모든 언어 공통 (Google Fonts) */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Montserrat', sans-serif;

  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
}
```

#### Next.js 폰트 설정

```typescript
// app/layout.tsx
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],  // 한글은 latin으로 커버, 베트남어 포함
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function RootLayout({ children }) {
  return (
    <html className={montserrat.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
};
```

### 11.3 브랜드 에셋

- **마스코트**: 하늘색 토끼 캐릭터 (위니)
- **로고**: "winnie" 워드마크 + 토끼 아이콘
- **앱 아이콘**: 하늘색 배경 + 토끼 얼굴

---

## 12. 참고 자료

### 디자인 레퍼런스
- Toss 랜딩페이지 (금융 앱 마케팅)
- Grab Vietnam (로컬 슈퍼앱)
- 카카오페이 (회원권/멤버십 UI)

### 기술 문서
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Schema.org MobileApplication](https://schema.org/MobileApplication)

---

## 13. 성공 지표 (KPIs)

| 지표 | 목표 |
|------|------|
| Lighthouse Performance | > 95점 |
| SEO Score | > 95점 |
| Accessibility Score | > 90점 |
| Page Load Time | < 2초 |
| Bounce Rate | < 40% |
| App Store Click Rate | > 5% |
| Conversion Rate (Download) | > 3% |

---

*문서 작성일: 2024년*
*최종 업데이트: 프로젝트 진행에 따라 갱신*
