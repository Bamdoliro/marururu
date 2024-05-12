'use client';

import { AppLayout } from '@/layouts';
import { color } from '@maru/design-token';
import { Text, Column } from '@maru/ui';
import { MainInformationBox } from '@/components/privacy';
import { styled } from 'styled-components';
import 제1조 from './제1조 (개인정보의 처리목적)/제1조 (개인정보의 처리목적)';
import 제2조 from './제2조 (개인정보의 제3자 제공)/제2조 (개인정보의 제3자 제공)';
import 제2조의2 from './제2조의2 (개인정보의 추가적인 이용•제공 기준)/제2조의2 (개인정보의 추가적인 이용•제공 기준)';
import 제2조의3 from './제2조의3 (가명정보 처리에 관한 사항)/제2조의3 (가명정보 처리에 관한 사항)';
import 제3조 from './제3조 (개인정보 처리 위탁)/제3조 (개인정보 처리 위탁)';
import 제4조 from './제4조 (정보주체와 법정대리인의 권리․의무 및 그 행사 방법)/제4조 (정보주체와 법정대리인의 권리․의무 및 그 행사 방법)';
import 제5조 from './제5조 (개인정보 자동 수집 및 거부)/제5조 (개인정보 자동 수집 및 거부)';
import 제6조 from './제6조 (개인정보의 파기절차 및 파기방법)/제6조 (개인정보의 파기절차 및 파기방법)';
import 제7조 from './제7조 (개인정보의 안전성 확보 조치)/제7조 (개인정보의 안전성 확보 조치)';
import 제8조 from './제8조 (개인정보 보호책임자)/제8조 (개인정보 보호책임자)';
import 제9조 from './제9조 (개인정보 열람청구 및 고충사항을 접수ㆍ처리하는 부서)/제9조 (개인정보 열람청구 및 고충사항을 접수ㆍ처리하는 부서)';
import 제10조 from './제10조 (권익침해 구제 방법)/제10조 (권익침해 구제 방법)';
import 제11조 from './제11조 (영상정보처리기기 설치‧운영)/제11조 (영상정보처리기기 설치‧운영)';
import 제12조 from './제12조(개인정보처리방침 변경)/제12조(개인정보처리방침 변경)';

const PrivacyPage = () => {
  return (
    <AppLayout header footer>
      <StyledPrivacyPage style={{ minHeight: '880vh' }}>
        <Column gap={5}>
          <Text fontType="H1" color={color.gray900}>
            개인정보처리방침
          </Text>
          <Separator />
          <Text fontType="H1" color={color.gray900}>
            부산소프트웨어마이스터고등학교 개인정보처리방침
          </Text>
          <Column height={10}> </Column>
          <MainInformationBox />
        </Column>
        <Column height={40}> </Column>
        <Column gap={40}>
          <제1조 />
          <제2조 />
          <제2조의2 />
          <제2조의3 />
          <제3조 />
          <제4조 />
          <제5조 />
          <제6조 />
          <제7조 />
          <제8조 />
          <제9조 />
          <제10조 />
          <제11조 />
          <제12조 />
        </Column>
      </StyledPrivacyPage>
    </AppLayout>
  );
};

export default PrivacyPage;

const StyledPrivacyPage = styled.div`
  width: 100%;
  padding-left: 205px;
  padding-top: 50px;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-top: 20px;
  }
`;

const Separator = styled.hr`
  border: 1px solid ${color.gray400};
  margin: 2% 0;
  width: 82%;

  @media (max-width: 768px) {
    width: 82%;
  }
`;
