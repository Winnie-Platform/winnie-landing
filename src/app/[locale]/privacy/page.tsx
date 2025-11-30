import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Header, Footer } from '@/components/layout';

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: 'Winnie 개인정보처리방침',
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">개인정보처리방침</h1>

          <div className="prose prose-gray mt-8 max-w-none">
            <p className="text-gray-600">
              (주)마이위니(이하 &quot;회사&quot;)는 이용자의 개인정보를 중요시하며,
              「개인정보 보호법」을 준수하고 있습니다.
            </p>

            <h2>1. 수집하는 개인정보 항목</h2>
            <p>
              회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:
            </p>
            <ul>
              <li>필수항목: 이메일 주소, 비밀번호, 닉네임</li>
              <li>선택항목: 프로필 사진, 전화번호</li>
              <li>자동수집: 기기정보, 서비스 이용기록, 접속 IP 정보</li>
            </ul>

            <h2>2. 개인정보의 수집 및 이용목적</h2>
            <ul>
              <li>서비스 제공 및 운영</li>
              <li>회원 관리 및 본인확인</li>
              <li>서비스 개선 및 신규 서비스 개발</li>
              <li>마케팅 및 광고에 활용 (동의 시)</li>
            </ul>

            <h2>3. 개인정보의 보유 및 이용기간</h2>
            <p>
              회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
              단, 관계법령에 따라 보존할 필요가 있는 경우 일정기간 보관합니다.
            </p>

            <h2>4. 개인정보의 제3자 제공</h2>
            <p>
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
              다만, 이용자의 동의가 있거나 법령의 규정에 의한 경우는 예외로 합니다.
            </p>

            <h2>5. 이용자의 권리</h2>
            <p>
              이용자는 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며,
              가입해지를 요청할 수 있습니다.
            </p>

            <h2>6. 개인정보 보호책임자</h2>
            <p>
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
              개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여
              아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <ul>
              <li>개인정보 보호책임자: (주)마이위니 대표</li>
              <li>연락처: support@mywinnie.com</li>
            </ul>

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
