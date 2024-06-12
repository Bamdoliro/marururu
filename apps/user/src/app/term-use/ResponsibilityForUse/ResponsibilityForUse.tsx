import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const ResponsibilityForUse = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제19조 (서비스 이용 책임)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        회원은 사이트에서 권한 있는 사람이 서명한 명시적인 서면에 구체적으로 허용한 경우를
        제외하고는 서비스를 이용하여 상품을 판매하는 영업활동을 할 수 없으며 특히 해킹,
        돈벌이 광고, 음란 사이트 <br />
        등을 통한 상업행위, 상용S/W 불법배포 등을 할 수 없습니다. 이를 어기고 발생한
        영업활동의 결과 및 손실, 관계기관에 의한 구속 등 법적 조치 등에 관해서는 사이트가
        책임을 지지 않습니다.
      </Text>
    </Column>
  );
};

export default ResponsibilityForUse;
