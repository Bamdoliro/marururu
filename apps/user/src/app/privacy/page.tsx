/* eslint-disable no-irregular-whitespace */
'use client';

import { AppLayout } from '@/layouts';
import { color } from '@maru/design-token';
import { Text } from '@maru/ui';
import { Box } from '@/components/privacy';
import { IconTerms } from '@maru/icon';
import * as style from './style';
import { styled } from 'styled-components';

const PrivacyPage = () => {
  return (
    <AppLayout header footer>
      <StyledPrivacyPage>
        <Text fontType="H1" color={color.gray900}>
          개인정보처리방침
        </Text>
        <br />
        <style.Separator />
      </StyledPrivacyPage>
      <br />
      <style.PrivacyCenter>
        <Text fontType="H1" color={color.gray900} style={{ textAlign: 'center' }}>
          부산소프트웨어마이스터고등학교 개인정보처리방침
        </Text>
      </style.PrivacyCenter>
      <StyledPrivacyPage style={{ minHeight: '300vh' }}>
        <Box backgroundColor={color.gray100}>
          <Text fontType="code" color={color.maruDefault}>
            부산소프트웨어마이스터고등학교(이하‘우리학교’)
          </Text>
          <Text fontType="code" color={color.gray900}>
            는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한
            고충을 신속하고 <br /> 원활하게 처리할 수 있도록 다음과 같은 개인정보방침을
            두고 있습니다.
          </Text>
        </Box>
        <style.BigPaddingHeight />
        <IconTerms />
        &nbsp;
        <Text fontType="H4" color={color.gray900}>
          제1조 (개인정보의 처리목적, 개인정보의 처리및 보유기간, 처리하는 개인정보의
          항목)
        </Text>
        <style.SmallPaddingHeight />
        <Text fontType="p3" color={color.gray900}>
          우리학교가 개인정보 보호법 제32조에 따라 등록·공개하는 개인정보파일은
          개인정보보호위원회 개인정보 포털(www.privacy.go.kr) ⇨ 개인서비스 ⇨ 정보주체
          권리행사 ⇨ 개인정보 열람등 요구 ⇨ <br />
          개인정보 파일 검색 메뉴를 통해 공개하고 있습니다.
          <style.SmallPaddingHeight />▶ 기관명에 '
        </Text>
        <Text fontType="p3" color={color.maruDefault}>
          부산소프트웨어마이스터고등학교
        </Text>
        <Text fontType="p3" color={color.gray900}>
          '를 입력하면 조회가 가능합니다.
        </Text>
        <style.BigPaddingHeight />
        <IconTerms />
        &nbsp;
        <Text fontType="H4" color={color.gray900}>
          제2조 (개인정보의 제3자 제공)
        </Text>
        <style.SmallPaddingHeight />
        <Text fontType="p3" color={color.gray900}>
          ① 우리학교는 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한
          범위내에서 처리 하며, 다음의 경우를 제외하고는 정보주체의 사전 동의 없이는
          본래의 목적 범위를 초과하여 처리 하거나 제 <br />
          3자에게 제공하지 않습니다.
          <br /> &nbsp;&nbsp;• 1. 다른 법률에 특별한 규정이 있는 경우 <br /> &nbsp;&nbsp;•
          2. 정보주체 또는 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명
          등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한
          생명, 신체, 재산의 이익을 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;위하여 필요하 다고 인정되는 경우
          <br /> &nbsp;&nbsp;• 3. 개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게
          제공하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우로서
          보호위원회의 심의·의결을 거친 경우
          <br /> &nbsp;&nbsp;• 4. 조약, 그 밖의 국제협정의 이행을 위하여 외국정보 또는
          국제기구에 제공하기 위하여 필요한 경우
          <br /> &nbsp;&nbsp;• 5. 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우
          <br /> &nbsp;&nbsp;• 6. 법원의 재판업무 수행을 위하여 필요한 경우 <br />
          &nbsp;&nbsp;• 7. 형(刑) 및 감호, 보호처분의 집행을 위하여 필요한 경우
          <br />
          ➁&nbsp;
        </Text>
        <Text fontType="p3" color={color.maruDefault}>
          (목적 외 이용 또는 제3자제공이 없는 경우)&nbsp;
        </Text>
        <Text fontType="p3" color={color.gray900}>
          개인정보를 목적 외 용도로 이용하거나 제3자에 제공할 경우 정보주체가 확인할 수
          있도록 개인정보처리방침을 통해 안내하겠습니다.
        </Text>
        <style.BigPaddingHeight />
        <IconTerms />
        &nbsp;
        <Text fontType="H4" color={color.gray900}>
          제2조의2 (개인정보의 추가적인 이용•제공 기준)
        </Text>
        <style.SmallPaddingHeight />
        <Text fontType="p3" color={color.gray900}>
          우리학교는 개인정보 보호법 제15조제3항 또는 제17조제4항에 따라 정보주체의 동의
          없이 개인정보를 이용 또는 제공하려는 경우는 다음의 경우를 고려하겠습니다.
          <br /> &nbsp;&nbsp;• 1. 당초 수집 목적과 관련성이 있는지 여부
          <br /> &nbsp;&nbsp;• 2. 개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때
          개인정보의 추가적인 이용 또는 제공에 대한 예측 가능성이 있는지 여부
          <br /> &nbsp;&nbsp;• 3. 정보주체의 이익을 부당하게 침해하는지 여부
          <br /> &nbsp;&nbsp;• 4. 가명처리 또는 암호화 등 안전성 확보에 필요한 조치를
          하였는지 여부
        </Text>
        <style.BigPaddingHeight />
        <IconTerms />
        &nbsp;
        <Text fontType="H4" color={color.gray900}>
          제2조의3 (가명정보 처리에 관한 사항)
        </Text>
        <Box style={{ paddingTop: '1000px' }}>
          <Text fontType="p3" color={color.maruDefault}>
            (가명정보를 처리하지 않는 경우)
          </Text>
          <Text fontType="p3" color={color.gray900}>
             우리학교는 가명정보를 처리하지 않고 있습니다. 가명정보 처리 시 교육부
            개인정보 보호지침 제78조의2에 따라 “교육분야 가명정보 처리
            <br /> 가이드라인”에서 제시하는 기준에 준하여 처리하고 처리된 내용은 개인정보
            처리방침에 공개하겠습니다.
          </Text>
        </Box>
        <style.BigPaddingHeight />
        <IconTerms />
        &nbsp;
        <Text fontType="H4" color={color.gray900}>
          제3조 (개인정보 처리 위탁)
        </Text>
        <Box>
          <Text fontType="p3" color={color.maruDefault}>
            (위탁사항이 없는 경우)
          </Text>
          <Text fontType="p3" color={color.gray900}>
             개인정보 처리를 위탁하는 경우 위탁하는 업무의 내용과 위탁받아 처리하는 자에
            대한 사항을 정보주체가 확인할 수 있도록 개인정보처리방침을 <br />
            통해 안내하겠습니다.
          </Text>
        </Box>
      </StyledPrivacyPage>
    </AppLayout>
  );
};

export default PrivacyPage;

const StyledPrivacyPage = styled.div`
  width: 100%;
  padding-left: 205px;
  padding-top: 50px;
`;
