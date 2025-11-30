import type { Metadata } from 'next';
import JsonLd, { mobileAppSchema, organizationSchema, websiteSchema } from '@/components/seo/JsonLd';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Winnie - 베트남 로컬 회원권 플랫폼',
    template: '%s | Winnie',
  },
  description:
    '베트남 로컬 회원권 플랫폼 위니. 내 주변 가게 회원권 검색, 구매, 관리를 한 번에. Vietnam membership marketplace.',
  keywords: ['winnie', '위니', '베트남', '회원권', '멤버십', 'vietnam', 'membership'],
  authors: [{ name: '(주)마이위니' }],
  metadataBase: new URL('https://mywinnie.com'),
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://mywinnie.com',
    siteName: 'Winnie',
    title: 'Winnie - 베트남 로컬 회원권 플랫폼',
    description: '내 주변 가게 회원권 검색, 구매, 관리를 한 번에',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winnie - 베트남 로컬 회원권 플랫폼',
    description: '내 주변 가게 회원권 검색, 구매, 관리를 한 번에',
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
    },
  },
  alternates: {
    canonical: 'https://mywinnie.com',
    languages: {
      'ko-KR': 'https://mywinnie.com/ko',
      'vi-VN': 'https://mywinnie.com/vi',
      'en-US': 'https://mywinnie.com/en',
    },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={mobileAppSchema} />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
