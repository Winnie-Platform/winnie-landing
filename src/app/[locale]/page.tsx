import { setRequestLocale } from 'next-intl/server';
import { Header, Footer } from '@/components/layout';
import { SmoothScroll } from '@/components/providers';
import {
  HeroNew,
  TrustedBy,
  Ecosystem,
  ProductShowcase,
  CreativeStudio,
  Download,
} from '@/components/sections';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <SmoothScroll>
      <Header />
      <main>
        <HeroNew />
        <TrustedBy />
        <Ecosystem />
        <ProductShowcase productId="winnie" />
        <ProductShowcase productId="vendor" />
        <ProductShowcase productId="yellow" />
        <CreativeStudio />
        <Download />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
