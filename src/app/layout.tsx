import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import JsonLd, {
  mobileAppSchema,
  organizationSchema,
  websiteSchema,
  faqSchema,
  softwareAppSchema,
} from '@/components/seo/JsonLd';
import '@/styles/globals.css';

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: 'Winnie - 베트남 로컬 회원권 플랫폼',
    template: '%s | Winnie',
  },
  description:
    '베트남 로컬 회원권 플랫폼 위니. 내 주변 가게 회원권 검색, 구매, 관리를 한 번에. Vietnam membership marketplace. Nền tảng thẻ thành viên địa phương Việt Nam.',
  keywords: [
    'winnie',
    '위니',
    '베트남',
    '회원권',
    '멤버십',
    'vietnam',
    'membership',
    'thẻ thành viên',
    '호치민',
    '하노이',
    '다낭',
    'Ho Chi Minh',
    'Hanoi',
    'Da Nang',
    '한인',
    '로컬',
    'local business',
  ],
  authors: [{ name: '(주)마이위니', url: 'https://mywinnie.com' }],
  creator: '(주)마이위니',
  publisher: '(주)마이위니',
  metadataBase: new URL('https://mywinnie.com'),
  applicationName: 'Winnie',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  category: 'lifestyle',
  classification: 'Business',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    alternateLocale: ['vi_VN', 'en_US'],
    url: 'https://mywinnie.com',
    siteName: 'Winnie',
    title: 'Winnie - 베트남 로컬 회원권 플랫폼',
    description: '내 주변 가게 회원권 검색, 구매, 관리를 한 번에',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Winnie - 베트남 로컬 회원권 플랫폼',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Winnie - 베트남 로컬 회원권 플랫폼',
    description: '내 주변 가게 회원권 검색, 구매, 관리를 한 번에',
    images: ['/images/og-image.png'],
    creator: '@mywinnie',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Alternates (hreflang)
  alternates: {
    canonical: 'https://mywinnie.com',
    languages: {
      'ko-KR': 'https://mywinnie.com/ko',
      'vi-VN': 'https://mywinnie.com/vi',
      'en-US': 'https://mywinnie.com/en',
      'x-default': 'https://mywinnie.com/ko',
    },
  },

  // Verification (구글 서치 콘솔, 네이버, 빙 등)
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
    // yandex: 'YOUR_YANDEX_CODE',
    // yahoo: 'YOUR_YAHOO_CODE',
    other: {
      'naver-site-verification': 'YOUR_NAVER_SITE_VERIFICATION_CODE',
      'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE',
    },
  },

  // App Links
  appLinks: {
    ios: {
      url: 'https://apps.apple.com/vn/app/winnie/id6737789682?l',
      app_store_id: 'YOUR_APP_STORE_ID',
    },
    android: {
      package: 'com.winnie.userapp.v1',
      url: 'https://play.google.com/store/apps/details?id=com.winnie.userapp.v1&pcampaignid',
    },
    web: {
      url: 'https://mywinnie.com',
      should_fallback: true,
    },
  },

  // Icons
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },

  // Manifest
  manifest: '/manifest.json',

  // Other metadata
  other: {
    'geo.region': 'VN',
    'geo.placename': 'Ho Chi Minh City',
    'geo.position': '10.8231;106.6297',
    ICBM: '10.8231, 106.6297',
    'content-language': 'ko, vi, en',
    'apple-itunes-app': 'app-id=YOUR_APP_STORE_ID',
    'google-play-app': 'app-id=com.mywinnie',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZFVPBGX1B7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZFVPBGX1B7');
          `}
        </Script>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* JSON-LD Structured Data */}
        <JsonLd data={mobileAppSchema} />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={faqSchema} />
        <JsonLd data={softwareAppSchema} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
