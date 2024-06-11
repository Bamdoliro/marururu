import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const Disclaimer = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제23조 (면책조항)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        ① 사이트는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는
        경우에는 서비스 제공에 관한 책임이 면제됩니다. <br />② 사이트는 회원의 귀책사유로
        인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다. <br />③ 사이트는 회원이
        서비스를 이용하여 기대하는 수익을 상실한 것이나 서비스를 통하여 얻은 자료로 인한
        손해에 관하여 책임을 지지 않습니다. <br />④ 사이트는 회원이 서비스에 게재한 정보,
        자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 책임을 지지 않습니다. <br />⑤
        사이트는 서비스 이용과 관련하여 가입자에게 발생한 손해 가운데 가입자의 고의,
        과실에 의한 손해에 대하여 책임을 지지 않습니다.
      </Text>
    </Column>
  );
};

export default Disclaimer;
