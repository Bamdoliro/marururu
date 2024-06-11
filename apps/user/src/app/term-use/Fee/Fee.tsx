import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const Fee = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제15조 (요금)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        사이트가 제공하는 서비스는 기본적으로 무료입니다.
      </Text>
    </Column>
  );
};

export default Fee;
