'use client';

import { useState, useEffect, useRef, useTransition } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Download, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const langMenuRef = useRef<HTMLDivElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleLanguageChange = (langCode: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${langCode}`);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);
    startTransition(() => {
      router.push(newPath || `/${langCode}`);
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      setIsServicesOpen(false);

      const element = document.querySelector(href);
      if (element) {
        // Element exists on current page, scroll to it
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Element doesn't exist, navigate to home page with hash
        router.push(`/${locale}${href}`);
      }
    } else {
      setIsMobileMenuOpen(false);
      setIsServicesOpen(false);
    }
  };

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  const services = [
    {
      id: 'winnie',
      href: '#winnie',
      label: t('services.winnie'),
      external: false
    },
    {
      id: 'vendor',
      href: 'https://www.winnievendor.com/',
      label: t('services.vendor'),
      external: true
    },
    {
      id: 'yellow',
      href: 'https://www.yellowwinnie.com/',
      label: t('services.yellow'),
      external: true
    },
  ];

  const navLinks = [
    { href: '#ecosystem', label: t('ecosystem') },
    { href: '#creative-studio', label: t('studio') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/partnership`, label: t('partnership') },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300 safe-area-top',
        isScrolled || isMobileMenuOpen
          ? 'bg-white/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center group">
            <img
              src="/images/winnie-logo.svg"
              alt="Winnie"
              className="h-8 sm:h-9 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* Services Dropdown */}
            <div className="relative" ref={servicesMenuRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 rounded-full transition-colors hover:text-gray-900 hover:bg-gray-100"
              >
                {t('services.title')}
                <ChevronDown className={cn('h-4 w-4 transition-transform', isServicesOpen && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-56 rounded-2xl bg-white py-2 shadow-xl ring-1 ring-black/5"
                  >
                    {services.map((service) => (
                      <a
                        key={service.id}
                        href={service.href}
                        onClick={(e) => !service.external && handleNavClick(e, service.href)}
                        target={service.external ? '_blank' : undefined}
                        rel={service.external ? 'noopener noreferrer' : undefined}
                        className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                      >
                        <span>{service.label}</span>
                        {service.external && <ExternalLink className="h-3.5 w-3.5 text-gray-400" />}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-gray-600 rounded-full transition-colors hover:text-gray-900 hover:bg-gray-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={cn(
                  "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100",
                  isPending && "opacity-70"
                )}
                aria-label="Select language"
                disabled={isPending}
              >
                {isPending ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
                ) : (
                  <span>{currentLang.flag}</span>
                )}
                <ChevronDown className={cn('h-4 w-4 transition-transform', isLangMenuOpen && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-40 rounded-2xl bg-white py-2 shadow-xl ring-1 ring-black/5 z-40"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={cn(
                          'flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50',
                          lang.code === locale ? 'text-[var(--color-brand-600)] font-medium' : 'text-gray-600'
                        )}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button - Desktop */}
            <a
              href="#download"
              onClick={(e) => handleNavClick(e, '#download')}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-600)] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-[var(--color-brand-500)]/25 transition-all hover:bg-[var(--color-brand-700)] hover:shadow-xl active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              <span>{t('download')}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 lg:hidden flex items-center justify-center rounded-full w-11 h-11 bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-gray-100 active:bg-gray-200 transition-colors shadow-sm border border-gray-200"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-[9999] bg-white lg:hidden">
          <nav className="flex flex-col p-6 h-full overflow-y-auto safe-area-bottom">
            <div className="space-y-1">
              {/* Services Section */}
              <div className="pb-4 border-b border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  {t('services.title')}
                </p>
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={service.href}
                    onClick={(e) => !service.external && handleNavClick(e, service.href)}
                    target={service.external ? '_blank' : undefined}
                    rel={service.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between py-3 text-base font-medium text-gray-700"
                  >
                    <span>{service.label}</span>
                    {service.external && <ExternalLink className="h-4 w-4 text-gray-400" />}
                  </a>
                ))}
              </div>

              {/* Other Nav Links */}
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center py-4 text-lg font-medium text-gray-900 border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Language Selector */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {t('language')}
              </p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={cn(
                      'flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all',
                      lang.code === locale
                        ? 'bg-[var(--color-brand-600)] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    )}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="mt-auto pt-6">
              <a
                href="#download"
                onClick={(e) => handleNavClick(e, '#download')}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-brand-600)] px-6 py-4 text-base font-medium text-white shadow-lg"
              >
                <Download className="h-5 w-5" />
                <span>{t('download')}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
