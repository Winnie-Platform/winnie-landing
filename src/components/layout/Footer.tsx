'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const links = [
    { href: `/${locale}/terms`, label: t('links.terms') },
    { href: `/${locale}/privacy`, label: t('links.privacy') },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-600)] transition-transform group-hover:scale-105">
                <span className="text-xl font-bold text-white">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900">winnie</span>
            </Link>
            <p className="mt-4 text-sm text-gray-500 text-center md:text-left max-w-xs">
              {t('description')}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-[var(--color-brand-600)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
