import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  // Skip static files (files with extensions) and Next.js internals
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
