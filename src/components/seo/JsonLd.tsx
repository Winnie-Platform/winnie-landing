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

// Mobile App Schema
export const mobileAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Winnie - 위니',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'LifestyleApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'VND',
    availability: 'https://schema.org/InStock',
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
    '베트남 로컬 회원권 플랫폼. 내 주변 가게 회원권 검색, 구매, 관리를 한 번에. Vietnam local membership platform.',
  screenshot: 'https://mywinnie.com/images/app-screenshot.png',
  featureList: [
    '가게/회원권 검색 (Store/Membership Search)',
    '구매 신청/사용 요청 (Purchase/Use Request)',
    '채팅 문의 (Chat Inquiry)',
    '내 회원권 관리 (My Membership Management)',
  ],
  downloadUrl: [
    'https://apps.apple.com/vn/app/winnie/id6737789682?l',
    'https://play.google.com/store/apps/details?id=com.winnie.userapp.v1&pcampaignid',
  ],
  inLanguage: ['ko', 'vi', 'en'],
  countriesSupported: ['VN', 'KR'],
};

// Organization Schema with GEO targeting
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '(주)마이위니',
  alternateName: ['My Winnie Co., Ltd.', 'Winnie', '위니'],
  url: 'https://mywinnie.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://mywinnie.com/images/logo.png',
    width: 512,
    height: 512,
  },
  sameAs: [
    'https://facebook.com/Winnie.yeowubie',
    'https://instagram.com/mywinnie.vn/',
    'https://youtube.com/@my-winnie',
    'https://tiktok.com/@mywinnie2024',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'winnie@yeowubie.com',
      contactType: 'customer service',
      availableLanguage: ['Korean', 'Vietnamese', 'English'],
      areaServed: ['VN', 'KR'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'VN',
    addressLocality: 'Ho Chi Minh City',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Vietnam',
    },
    {
      '@type': 'Country',
      name: 'South Korea',
    },
  ],
  foundingDate: '2024',
  knowsLanguage: ['ko', 'vi', 'en'],
};

// Website Schema with Search Action
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Winnie - 위니',
  alternateName: '위니 - 베트남 로컬 회원권 플랫폼',
  url: 'https://mywinnie.com',
  inLanguage: ['ko', 'vi', 'en'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://mywinnie.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// FAQ Schema for SEO
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '위니 앱은 무료인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 위니 앱은 완전히 무료입니다. App Store와 Google Play에서 무료로 다운로드하실 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '어떤 지역에서 사용할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '현재 베트남 전역(호치민, 하노이, 다낭 등)에서 서비스를 이용하실 수 있습니다. 한국에서도 베트남 여행 전 미리 가게를 찾아보실 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '회원권 결제는 어떻게 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '위니는 플랫폼 수수료가 없습니다. 고객과 가게 사이의 직접 결제(현금, 계좌이체, 카드)로 투명하고 합리적인 거래를 지원합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '사업자도 가입할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 베트남에서 가게를 운영하시는 사업자분들은 위니벤더(winnievendor.com)에서 무료로 가입하실 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '다국어를 지원하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 위니 앱과 웹사이트는 한국어, 베트남어, 영어를 지원합니다. 앱 내에서 언어를 변경하실 수 있습니다.',
      },
    },
  ],
};

// Software Application Schema (for app stores)
export const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Winnie',
  operatingSystem: 'iOS 14.0+, Android 8.0+',
  applicationCategory: 'LifestyleApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '1200',
  },
};

// Breadcrumb helper for blog pages
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Article Schema helper for blog posts
export function createArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  locale: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: article.locale,
    author: {
      '@type': 'Person',
      name: article.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: '(주)마이위니',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mywinnie.com/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}
