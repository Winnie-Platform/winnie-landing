import { setRequestLocale } from 'next-intl/server';
import { Header, Footer, MobileStickyBar } from '@/components/layout';
import {
  Hero,
  Features,
  HowItWorks,
  Benefits,
  Testimonials,
  FAQ,
  Download,
} from '@/components/sections';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Download />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
