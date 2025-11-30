'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/Winnie.yeowubie', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/mywinnie.vn/', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@my-winnie', label: 'YouTube' },
];

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-500)]">
                <span className="text-xl">🐰</span>
              </div>
              <span className="text-xl font-bold text-gray-900">winnie</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-gray-600">
              베트남 로컬 회원권/멤버십 마켓플레이스. 내 주변 가게 회원권 검색, 구매, 관리를 한 번에.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-[var(--color-primary-500)] hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">서비스</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://winnievendor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  비즈니스 포털
                </a>
              </li>
              <li>
                <a
                  href="https://yellow.mywinnie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  옐로우페이지
                </a>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-sm text-gray-600 hover:text-gray-900">
                  블로그
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">법적 고지</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href={`/${locale}/privacy`} className="text-sm text-gray-600 hover:text-gray-900">
                  {t('links.privacy')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-sm text-gray-600 hover:text-gray-900">
                  {t('links.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              {t('copyright')}
            </p>
            <p className="text-sm text-gray-500">
              {t('company')} | Vietnam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
