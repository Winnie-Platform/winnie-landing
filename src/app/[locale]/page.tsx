import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 sm:text-xl">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#download"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-cta-500)] px-8 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[var(--color-cta-600)]"
            >
              {t('hero.cta')}
            </a>
            <a
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 bg-white px-8 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('features.title')}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {(['search', 'purchase', 'chat', 'manage'] as const).map((feature) => (
              <div
                key={feature}
                className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {t(`features.${feature}.title`)}
                </h3>
                <p className="text-gray-600">{t(`features.${feature}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('download.title')}
          </h2>
          <p className="mb-10 text-lg text-gray-600">{t('download.subtitle')}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/app/winnie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-black px-6 text-white transition-opacity hover:opacity-90"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">{t('download.appStore')}</div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.mywinnie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-black px-6 text-white transition-opacity hover:opacity-90"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">{t('download.playStore')}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="font-semibold text-gray-900">{t('footer.company')}</p>
              <p className="text-sm text-gray-600">{t('footer.copyright')}</p>
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                {t('footer.links.privacy')}
              </a>
              <a href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                {t('footer.links.terms')}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
