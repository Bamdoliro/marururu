import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const ApplicationOfUse = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제6조 (이용 신청)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        ① 회원으로 가입하여 서비스를 이용하기를 희망하는 자는 사이트가 요청하는 소정의
        가입신청 양식에서 요구하는 사항을 기록하여 신청합니다. <br />② 온라인 가입신청
        양식에 기재하는 모든 회원 정보는 실제 데이터인 것으로 간주하며 실명이나 실제
        정보를 입력하지 않은 사용자는 법적인 보호를 받을 수 없으며, 서비스 사용의 제한을
        받으실 수 <br />
        있습니다.
      </Text>
    </Column>
  );
};

export default ApplicationOfUse;
