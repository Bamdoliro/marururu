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
        이 약관은 부산광역시교육청 각급 학교 및 유치원(이하 “운영기관”라 합니다.) 홈페이지
        사이트에서 제공하는 인터넷 관련 서비스(이하 서비스라 합니다)를 이용함에 있어
        사이트와 이용자의 권 <br />
        리, 의무 및 책임사항을 규정함을 목적으로 합니다.
      </Text>
    </Column>
  );
};

export default Purpose;
