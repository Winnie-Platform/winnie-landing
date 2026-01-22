import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Header, Footer } from '@/components/layout';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[var(--color-brand-50)] to-white pt-20 lg:pt-24">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-100)] px-4 py-2 mb-4">
              <span className="text-sm font-medium text-[var(--color-brand-700)]">{t('badge')}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('title')}</h1>
            <p className="mt-4 text-gray-600">{t('lastUpdated')}: {t('effectiveDate')}</p>
          </div>

          {/* Content */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {t('fullContent')}
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              {t('contactInfo')}: winnie@yeowubie.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
