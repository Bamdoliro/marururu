import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const PrivacyCollectionOrPurpose = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          개인정보의 수집 및 이용 목적
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        • 본 학교는 홈페이지 운영을 위하여 개인정보를 수집·이용합니다. <br />
        • 수집한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며, 이용 목적이
        변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 개인정보 이용 : 로그인, 학급가입, 게시판
        글쓰기 등에서의 신원확인과 권한 확인, 접속 로그 확인
      </Text>
    </Column>
  );
};

export default PrivacyCollectionOrPurpose;
