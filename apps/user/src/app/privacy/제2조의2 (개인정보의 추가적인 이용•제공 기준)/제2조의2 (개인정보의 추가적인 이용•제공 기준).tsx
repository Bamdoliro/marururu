import { IconTerms } from '@maru/icon';
import { Text, Row, Column } from '@maru/ui';
import { color } from '@maru/design-token';

const 제2조의2 = () => {
  return (
    <>
      <Column gap={6}>
        <Row gap={3} alignItems="center">
          <IconTerms />
          <Text fontType="H4" color={color.gray900}>
            제2조의2 (개인정보의 추가적인 이용•제공 기준)
          </Text>
        </Row>
        <Text fontType="p3" color={color.gray900}>
          우리학교는 개인정보 보호법 제15조제3항 또는 제17조제4항에 따라 정보주체의 동의
          없이 개인정보를 이용 또는 제공하려는 경우는 다음의 경우를 고려하겠습니다.
          <br /> &nbsp;&nbsp;• 1. 당초 수집 목적과 관련성이 있는지 여부
          <br /> &nbsp;&nbsp;• 2. 개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때
          개인정보의 추가적인 이용 또는 제공에 대한 예측 가능성이 있는지 여부
          <br /> &nbsp;&nbsp;• 3. 정보주체의 이익을 부당하게 침해하는지 여부
          <br /> &nbsp;&nbsp;• 4. 가명처리 또는 암호화 등 안전성 확보에 필요한 조치를
          하였는지 여부
        </Text>
      </Column>
    </>
  );
};

export default 제2조의2;
