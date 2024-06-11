import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const ScopeOfServiceUse = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제13조 (서비스 이용 범위)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        회원은 사이트를 통한 가입 시 발급된 ID 하나로 학교, 유치원 사이트의 서비스 및
        자료와 커뮤니티 등을 이용할 수 있습니다.
      </Text>
    </Column>
  );
};

export default ScopeOfServiceUse;
