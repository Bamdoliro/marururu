import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const CompetentCourt = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제24조 (관할법원)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우 사이트의 본사 소재지를
        관할하는 법원을 전속 관할법원으로 합니다.
      </Text>
    </Column>
  );
};

export default CompetentCourt;
