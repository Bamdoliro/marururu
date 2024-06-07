import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const NoTransfer = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제12조 (양도 금지)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        회원은 서비스의 이용권한, 기타 이용 계약상의 지위를 타인에게 양도, 증여할 수
        없으며 이를 담보로 제공할 수 없습니다.
      </Text>
    </Column>
  );
};

export default NoTransfer;
