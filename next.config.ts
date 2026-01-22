import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mywinnie.com',
      },
      {
        protocol: 'http',
        hostname: '47.130.78.216',
      },
      {
        protocol: 'https',
        hostname: '47.130.78.216',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
