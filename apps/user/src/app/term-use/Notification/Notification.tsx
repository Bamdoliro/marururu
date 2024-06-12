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
        본 약관에 명시되지 아니한 사항에 대해서는 전기통신기본법, 전기통신사업법,
        정보통신망 이용촉진 등에 관한 법률 및 기타 관련 법령의 규정에 따릅니다.
      </Text>
    </Column>
  );
};

export default Notification;
