import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';

const 회원개인정보보호 = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제18조 (회원의 개인정보보호)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        우리학교는 이용자의 개인정보를 보호하기 위하여 노력합니다. 우리학교는 정보통신망
        이용 촉진 및 정보 보호 등에 관한 법률, 개인정보 보호법을 준수하고, 개인정보 보호를
        위하여 사이트 등<br />에 개인정보 처리방침을 고지합니다.
      </Text>
    </Column>
  );
};

export default 회원개인정보보호;
