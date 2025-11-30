type JsonLdProps = {
  data: Record<string, unknown>;
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const mobileAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Winnie - 위니',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'LifestyleApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1200',
    bestRating: '5',
    worstRating: '1',
  },
  author: {
    '@type': 'Organization',
    name: '(주)마이위니',
    url: 'https://mywinnie.com',
  },
  description:
    '베트남 로컬 회원권 플랫폼. 내 주변 가게 회원권 검색, 구매, 관리를 한 번에.',
  screenshot: 'https://mywinnie.com/images/app-screenshot.png',
  featureList: [
    '가게/회원권 검색',
    '구매 신청/사용 요청',
    '채팅 문의',
    '내 회원권 관리',
  ],
  downloadUrl: [
    'https://apps.apple.com/app/winnie',
    'https://play.google.com/store/apps/details?id=com.mywinnie',
  ],
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '(주)마이위니',
  alternateName: 'My Winnie Co., Ltd.',
  url: 'https://mywinnie.com',
  logo: 'https://mywinnie.com/images/logo.png',
  sameAs: [
    'https://facebook.com/Winnie.yeowubie',
    'https://instagram.com/mywinnie.vn/',
    'https://youtube.com/@my-winnie',
    'https://tiktok.com/@mywinnie2024',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@mywinnie.com',
    contactType: 'customer service',
    availableLanguage: ['Korean', 'Vietnamese', 'English'],
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Winnie - 위니',
  url: 'https://mywinnie.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://mywinnie.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};
