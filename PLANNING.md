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

## 2. 현재 문제점 (WordPress 기반)

### 2.1 성능 이슈
- [ ] 무거운 페이지 로딩 (WordPress + 플러그인 오버헤드)
- [ ] 불필요한 JavaScript/CSS 번들
- [ ] 이미지 최적화 부족
- [ ] CDN 미활용

### 2.2 SEO 한계
- [ ] 동적 메타태그 관리 어려움
- [ ] 구조화된 데이터 (Schema.org) 부재
- [ ] Core Web Vitals 점수 저조
- [ ] 다국어 SEO 최적화 부족

### 2.3 AI 접근성 부족
- [ ] LLM 친화적 콘텐츠 구조 없음
- [ ] llms.txt 미제공
- [ ] Open Graph / Twitter Card 최적화 부족
- [ ] 시맨틱 HTML 구조 미흡

### 2.4 유지보수 어려움
- [ ] WordPress 보안 업데이트 부담
- [ ] 플러그인 호환성 이슈
- [ ] 커스터마이징 제약
- [ ] 버전 관리 어려움

---

## 3. 개선 방안 및 신규 랜딩페이지 기획

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

## 4. 기술 스택 및 아키텍처

### 4.1 권장 기술 스택

| 카테고리 | 기술 | 선정 이유 |
|----------|------|-----------|
| **Framework** | Next.js 14 (App Router) | SSG/SSR 지원, 최적화된 이미지 처리, SEO 친화적 |
| **Language** | TypeScript | 타입 안전성, 개발 생산성 |
| **Styling** | Tailwind CSS | 빠른 개발, 작은 번들 사이즈, 유지보수 용이 |
| **Animation** | Framer Motion | 부드러운 애니메이션, 성능 최적화 |
| **Icons** | Lucide React | 가벼운 아이콘 라이브러리 |
| **Deployment** | Vercel | Next.js 최적화, Edge Network, 무료 SSL |
| **Analytics** | Vercel Analytics + GA4 | 성능 모니터링, 사용자 분석 |
| **i18n** | next-intl | 다국어 지원 (KO, VN, EN) |

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

## 5. SEO 최적화 전략

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

## 6. AI 접근성 최적화

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

## 7. 개발 계획 (Milestones)

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

## 8. 디자인 시스템

### 8.1 컬러 팔레트

```css
:root {
  /* Primary - Winnie Blue */
  --color-primary-50: #EBF5FF;
  --color-primary-100: #D1E9FF;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;
  --color-primary-700: #1D4ED8;

  /* Secondary - Winnie Mint */
  --color-secondary-400: #4ADE80;
  --color-secondary-500: #22C55E;

  /* Accent - Winnie Yellow */
  --color-accent-400: #FACC15;
  --color-accent-500: #EAB308;

  /* Neutral */
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-500: #6B7280;
  --color-gray-900: #111827;
}
```

### 8.2 타이포그래피

```css
:root {
  --font-heading: 'Pretendard', sans-serif;
  --font-body: 'Pretendard', sans-serif;

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

### 8.3 브랜드 에셋

- **마스코트**: 하늘색 토끼 캐릭터 (위니)
- **로고**: "winnie" 워드마크 + 토끼 아이콘
- **앱 아이콘**: 하늘색 배경 + 토끼 얼굴

---

## 9. 참고 자료

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

## 10. 성공 지표 (KPIs)

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
