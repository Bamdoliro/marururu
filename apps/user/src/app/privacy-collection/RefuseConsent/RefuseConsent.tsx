import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const RefuseConstent = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          개인정보 수집·이용에 대한 동의를 거부할 권리
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        - 필수항목 : 동의를 거부할 권리가 있으나 회원 가입 시 필요한 항목으로 동의 거부 시
        회원가입이 제한됩니다. <br />- 선택항목 : 보다 원활한 서비스를 위하여 수집하는
        정보로서, 동의하지 않아도 회원가입 및 서비스 제공에 제한을 두지 않습니다. <br />
        (선택항목은 회원가입 후 회원정보 수정을 통하여 추가 입력 할 수 있으며 입력된
        항목은 동의를 한 것으로 간주 합니다.)
      </Text>
    </Column>
  );
};

export default RefuseConstent;
