import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const SiteObligations = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제10조 (사이트의 의무)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        ① 사이트는 특별한 사정이 없는 한 회원이 서비스 이용을 신청한 날에 서비스를 이용할
        수 있도록 합니다. <br />② 사이트는 이 약관에서 정한 바에 따라 계속적이고 안정적인
        서비스의 제공을 위하여 지속적으로 노력하며, 설비에 장애가 생기거나 멸실 된 때에는
        지체 없이 이를 수리 복구하여야 합니다. 다만, 천재
        <br />
        지변, 비상사태 또는 그 밖에 부득이한 경우에는 그 서비스를 일시 중단하거나 중지할
        수 있습니다. <br />③ 사이트는 회원으로부터 소정의 절차에 의해 제기되는 의견이나
        불만이 정당하다고 인정할 경우에는 적절한 절차를 거쳐서 처리하여야 합니다. 처리 시
        일정 기간이 소요될 경우 회원에게 그 사유와 처<br />리 일정을 알려주어야 합니다.
        <br />④ 사이트는 회원의 프라이버시 보호와 관련하여 제 7 조 제 1, 2, 3, 4, 5항에
        제시된 내용을 지킵니다.
        <br />⑤ 사이트는 이용계약의 체결, 계약사항의 변경 및 해지 등 이용고객과의 계약
        관련 절차 및 내용 등에 있어 이용고객에게 편의를 제공하도록 노력합니다.
      </Text>
    </Column>
  );
};

export default SiteObligations;
