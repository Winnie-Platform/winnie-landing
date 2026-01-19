'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo & Company */}
          <div className="flex items-center gap-6">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary-500)]">
                <span className="text-lg text-white font-bold">W</span>
              </div>
              <span className="text-lg font-bold text-gray-900">WINNIE</span>
            </Link>
            <span className="text-sm text-gray-500">{t('copyright')}</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="mailto:support@mywinnie.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('links.faq')}
            </a>
            <a
              href="mailto:support@mywinnie.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('links.contact')}
            </a>
            <Link
              href={`/${locale}/privacy`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('links.privacy')}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('links.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
