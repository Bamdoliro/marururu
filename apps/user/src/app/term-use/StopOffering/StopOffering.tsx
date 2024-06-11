import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const StopOffering = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제20조 (서비스 제공의 중지 등)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        ① 무료서비스의 경우 사이트는 사이트의 필요에 따라 서비스의 전부 또는 일부를
        수정하거나 중지할 수 있습니다. <br />② 사이트는 다음 각 호에 해당하는 경우 서비스
        제공을 중지할 수 있습니다. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 서비스용 설비의 보수 등 공사로 인한 부득이 한
        경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 전기통신사업법에 규정된 기간통신사업자가
        전기통신 서비스를 중지했을 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 기타 불가항력적 사유가 있는 경우 <br />③
        사이트는 국가비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로
        정상적인 서비스 이용에 지장이 있는 때에는 서비스의 전부 또는 일부를 제한하거나
        중지할 수 있습니다. <br />④ 사이트는 제 1 항 및 2항의 규정에 의하여 서비스의
        이용을 제한하거나 중지한 때에는 그 사유 및 제한기간 등을 사이트를 통하여
        공지하거나 전자우편 기타의 방법으로 지체 없이 회원에게 알려야 합<br />
        니다.
      </Text>
    </Column>
  );
};

export default StopOffering;
