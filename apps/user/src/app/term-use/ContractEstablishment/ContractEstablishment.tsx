import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const ContractEstablishment = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제5조 (이용 계약의 성립)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        ① 일반회원의 경우 회원이 '동의' 버튼을 누르면 이 약관에 동의하는 것으로
        간주됩니다. 약관 변경 시에도 이와 동일하며, 변경된 약관에 동의하지 않을 경우 회원
        등록 취소가 가능합니다. <br />② 이용계약은 서비스 이용희망자의 이용약관 동의 후
        이용 신청에 대하여 승낙함으로써 성립합니다.
      </Text>
    </Column>
  );
};

export default ContractEstablishment;
