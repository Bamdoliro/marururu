import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const ProvideInformation = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제14조 (정보의 제공)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        사이트는 회원이 서비스 이용 중 필요가 있다고 인정되는 다양한 정보를 공지사항이나
        전자우편 등의 방법으로 회원에게 제공할 수 있습니다.
      </Text>
    </Column>
  );
};

export default ProvideInformation;
