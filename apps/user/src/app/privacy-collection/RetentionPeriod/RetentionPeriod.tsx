import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';

const RetentionPeriod = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          개인정보의 보유 및 이용 기간
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        <Text fontType="p3" color={color.red}>
          가. 개인정보 보유기간: 회원 가입일로부터 2년까지(2년 주기 재동의) <br />
        </Text>
        나. 이용자가 탈퇴의사를 밝혀 탈퇴 처리 시 <br />
        다. 개인정보 재동의(2년)를 하지 않을 시 <br />
        라. 1년 동안 미접속 시
      </Text>
    </Column>
  );
};

export default RetentionPeriod;
