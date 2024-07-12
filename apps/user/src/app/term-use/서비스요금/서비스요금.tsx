import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';

const 서비스요금 = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제10조 (서비스의 요금)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        사이트가 제공하는 서비스는 기본적으로 무료입니다. 단, 유료 서비스의 경우 별도의
        요금 정책을 명시하고 회원의 동의를 받아야 합니다.
      </Text>
    </Column>
  );
};

export default 서비스요금;
