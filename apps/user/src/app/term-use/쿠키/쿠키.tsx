import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';

const 쿠키 = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제19조 (쿠키 및 기타 추적 기술의 사용)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        우리학교는 이용자의 편의성 증대를 위하여 쿠키 및 기타 추적 기술을 사용할 수
        있으며, 이에 대한 자세한 내용은 개인정보 처리방침에 명시합니다. 회원은 쿠키 사용에
        대해 동의하지 않을 권리
        <br />가 있으며, 쿠키 설정을 거부할 경우 일부 서비스 이용에 제한이 있을 수
        있습니다.
      </Text>
    </Column>
  );
};

export default 쿠키;
