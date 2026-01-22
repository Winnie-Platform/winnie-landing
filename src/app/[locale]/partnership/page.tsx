import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Header, Footer } from '@/components/layout';
import PartnershipForm from './PartnershipForm';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'partnership' });
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default async function PartnershipPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'partnership' });

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-50)] to-white" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-brand-100)_0%,_transparent_50%)]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-100)] border border-[var(--color-brand-200)] px-4 py-2 mb-6">
                <span className="text-sm font-medium text-[var(--color-brand-700)]">
                  {t('badge')}
                </span>
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('title')}
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Buttons */}
        <section className="pb-8 lg:pb-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://pf.kakao.com/_exdHin/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#FEE500] text-[#3C1E1E] font-semibold rounded-2xl hover:bg-[#FFEB3B] transition-colors shadow-md"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.477 3 2 6.463 2 10.731c0 2.747 1.865 5.166 4.68 6.533-.146.533-.534 1.935-.612 2.234-.097.371.136.367.287.267.118-.078 1.896-1.248 2.66-1.754.654.097 1.324.148 2.008.148 5.523 0 10-3.463 10-7.428C22 6.463 17.523 3 12 3z"/>
                </svg>
                {t('contact.kakao')}
              </a>
              <a
                href="https://zalo.me/352608876316800107"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#0068FF] text-white font-semibold rounded-2xl hover:bg-[#0052CC] transition-colors shadow-md"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.8 6.4h-2.4v1.6h2.4v1.6h-2.4v3.2h-1.6V8.8h4V8.4h-4v-.8h4v.8zm-6.4 6.4H8.8v-4.8h-1.6v6.4h4v-1.6zm-1.6-4.8H7.2v4.8h1.6v-4.8z"/>
                </svg>
                {t('contact.zalo')}
              </a>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <PartnershipForm />
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-3xl shadow-sm">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--color-brand-100)] flex items-center justify-center">
                  <svg className="w-7 h-7 text-[var(--color-brand-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.email.title')}</h3>
                <p className="text-gray-600">partnership@mywinnie.com</p>
              </div>

              <div className="text-center p-8 bg-white rounded-3xl shadow-sm">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--color-brand-100)] flex items-center justify-center">
                  <svg className="w-7 h-7 text-[var(--color-brand-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.phone.title')}</h3>
                <p className="text-gray-600">+84 123 456 789</p>
              </div>

              <div className="text-center p-8 bg-white rounded-3xl shadow-sm">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--color-brand-100)] flex items-center justify-center">
                  <svg className="w-7 h-7 text-[var(--color-brand-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.location.title')}</h3>
                <p className="text-gray-600">Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
