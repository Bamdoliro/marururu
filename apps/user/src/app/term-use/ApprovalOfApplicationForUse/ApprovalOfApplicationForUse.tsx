import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const ApprovalOfApplicationForUse = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제8조 (이용 신청의 승낙)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        ① 사이트는 제 6 조에 따른 이용신청에 대하여 특별한 사정이 없는 한 접수 순서대로
        이용 신청을 승낙합니다. <br />② 사이트는 다음 각 호의 1에 해당하는 경우 이용신청에
        대한 승낙을 제한할 수 있고, 그 사유가 해소될 때까지 승낙을 유보할 수 있습니다.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 서비스 관련 설비에 여유가 없는 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 기술상 지장이 있는 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 기타 사이트의 사정상 필요하다고 인정되는 경우
        <br />③ 사이트는 다음 각 호의 1에 해당하는 이용계약 신청에 대하여는 이를 승낙하지
        아니 할 수 있습니다. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 본인의 실명으로 신청하지 않은 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 다른 사람의 명의를 사용하여 신청한 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 이용 신청 시 필요 사항을 허위로 기재하여 신청한
        경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. 사회의 안녕과 질서 혹은 미풍양속을 저해할
        목적으로 신청한 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. 제 22 조 제 2 항에 따라 회원자격을 상실한 적이
        있는 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6. 기타 사이트가 정한 이용 신청 요건이 미비 된 경우
        <br />④ 제 2 항 또는 제 3 항에 의하여 이용신청의 승낙을 유보하거나 승낙하지
        아니하는 경우, 사이트는 이를 이용신청자에게 알려야 합니다. 다만, 회사의 귀책사유
        없이 이용신청자에게 통지할 수 없는 <br />
        경우는 예외로 합니다.
      </Text>
    </Column>
  );
};

export default ApprovalOfApplicationForUse;
