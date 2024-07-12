import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';

const Notification = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제4조 (약관의 공지 및 준칙)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        약관에서 규정하지 않은 사항에 관해서는 약관의 규제 등에 관한 법률, 정보통신망 이용
        촉진 및 정보보호 등에 관한 법률, 개인정보 보호법, 전기통신기본법, 전기통신사업법
        등의 관계법령에 따<br />라 규율됩니다.
      </Text>
    </Column>
  );
};

export default Notification;
