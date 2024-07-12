import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const Purpose = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제1조 (목적)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        본 약관은 부산소프트웨어마이스터고 (이하 “우리학교”라 합니다.)이 운영하는
        웹사이트(이하 “사이트”라 합니다.)을 통해 서비스를 제공함에 있어 우리학교와
        이용자의 이용조건 및 제반 절차,
        <br />
        기타 필요한 사항의 규정을 목적으로 합니다.
      </Text>
    </Column>
  );
};

export default Purpose;
