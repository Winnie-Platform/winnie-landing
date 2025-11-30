import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Header, Footer } from '@/components/layout';

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: '이용약관',
  description: 'Winnie 서비스 이용약관',
};

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">이용약관</h1>

          <div className="prose prose-gray mt-8 max-w-none">
            <h2>제1조 (목적)</h2>
            <p>
              이 약관은 (주)마이위니(이하 &quot;회사&quot;)가 제공하는 위니(Winnie) 서비스의
              이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.
            </p>

            <h2>제2조 (정의)</h2>
            <ul>
              <li>&quot;서비스&quot;란 회사가 제공하는 회원권/멤버십 마켓플레이스 플랫폼을 말합니다.</li>
              <li>&quot;회원&quot;이란 서비스에 가입하여 이용하는 자를 말합니다.</li>
              <li>&quot;판매자&quot;란 서비스를 통해 회원권을 판매하는 사업자를 말합니다.</li>
            </ul>

            <h2>제3조 (약관의 효력 및 변경)</h2>
            <p>
              이 약관은 서비스를 이용하고자 하는 모든 회원에게 적용됩니다.
              회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 변경할 수 있습니다.
            </p>

            <h2>제4조 (서비스의 제공)</h2>
            <p>회사가 제공하는 서비스는 다음과 같습니다:</p>
            <ul>
              <li>회원권/멤버십 상품 검색 및 정보 제공</li>
              <li>판매자와 회원 간의 거래 중개</li>
              <li>회원권 관리 서비스</li>
              <li>기타 회사가 정하는 서비스</li>
            </ul>

            <h2>제5조 (회원가입)</h2>
            <p>
              서비스 이용을 희망하는 자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후
              이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.
            </p>

            <h2>제6조 (회원의 의무)</h2>
            <p>회원은 다음 행위를 하여서는 안 됩니다:</p>
            <ul>
              <li>타인의 정보 도용</li>
              <li>서비스의 정상적 운영 방해</li>
              <li>다른 회원에 대한 개인정보 수집</li>
              <li>기타 법령 또는 선량한 풍속에 반하는 행위</li>
            </ul>

            <h2>제7조 (거래 및 결제)</h2>
            <p>
              위니 서비스는 회원과 판매자 간의 직접 거래를 중개합니다.
              결제는 판매자에게 직접 이루어지며, 회사는 플랫폼 수수료를 부과하지 않습니다.
            </p>

            <h2>제8조 (책임제한)</h2>
            <p>
              회사는 회원과 판매자 간의 거래에 대해 중개자 역할만을 수행하며,
              거래 자체에 대한 책임은 거래 당사자에게 있습니다.
            </p>

            <h2>제9조 (분쟁해결)</h2>
            <p>
              서비스 이용과 관련하여 발생한 분쟁에 대해서는 대한민국 법률을 적용하며,
              서울중앙지방법원을 관할법원으로 합니다.
            </p>

            <p className="mt-8 text-sm text-gray-500">
              시행일: 2024년 1월 1일
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
