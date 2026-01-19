import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Header, Footer } from '@/components/layout';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'terms' });

  const sections = [
    { title: t('sections.purpose.title'), content: t('sections.purpose.content') },
    { title: t('sections.definitions.title'), content: t('sections.definitions.content') },
    { title: t('sections.terms.title'), content: t('sections.terms.content') },
    { title: t('sections.services.title'), content: t('sections.services.content') },
    { title: t('sections.membership.title'), content: t('sections.membership.content') },
    { title: t('sections.obligations.title'), content: t('sections.obligations.content') },
    { title: t('sections.transactions.title'), content: t('sections.transactions.content') },
    { title: t('sections.liability.title'), content: t('sections.liability.content') },
    { title: t('sections.disputes.title'), content: t('sections.disputes.content') },
  ];

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
            <p className="mt-4 text-gray-600">{t('lastUpdated')}: 2024-01-01</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <section key={index} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {index + 1}. {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              {t('contact')}: support@mywinnie.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
