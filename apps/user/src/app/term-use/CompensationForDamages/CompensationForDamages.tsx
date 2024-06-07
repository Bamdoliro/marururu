import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const CompensationForDamages = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제22조 (손해배상)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        ① 사이트는 서비스 요금이 무료인 동안의 서비스 이용과 관련하여 회원에게 발생한
        어떠한 손해에 관하여도 책임을 지지 않습니다. <br />② 이용자는
        부산소프트웨어마이스터고등학교에서 제공하는 서비스 이용 시 발생되는 어떠한 문제에
        대해서도 부산소프트웨어마이스터고등학교 및 관계 기관에 손해배상 청구를 할 수
        없으며 부산소프
        <br />
        트웨어마이스터고등학교는 이에 대해 책임을 지지 아니합니다.
      </Text>
    </Column>
  );
};

export default CompensationForDamages;
