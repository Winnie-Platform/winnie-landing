import { setRequestLocale } from 'next-intl/server';
import { Header, Footer, MobileStickyBar } from '@/components/layout';
import {
  Hero,
  UserAppSection,
  VendorAppSection,
  Benefits,
  NewsSection,
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
        <UserAppSection />
        <VendorAppSection />
        <Benefits />
        <NewsSection />
        <Download />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
