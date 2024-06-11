import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const TerminationOfContractAndRestrictionsOnUse = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제21조 (계약 해지 및 이용 제한)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        ① 회원이 이용 계약을 해지하고자 하는 경우에는 회원 본인이 온라인을 통해 회원탈퇴를
        사이트에 신청하여야 합니다. <br />② 사이트는 회원이 다음 각 호의 1에 해당하는
        행위를 하였을 경우 사전통지 없이 이용계약을 해지하거나 또는 기간을 정하여 서비스
        이용을 중지할 수 있습니다. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 타인의 개인정보, ID 및 비밀번호를 도용한 경우
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 가입한 이름이 실명이 아닌 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 같은 사용자가 다른 ID로 이중등록을 한 경우
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. 타인의 명예를 손상시키거나 불이익을 주는 행위를
        한 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. 사이트, 다른 회원 또는 제 3자의 지적재산권을
        침해하는 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6. 공공질서 및 미풍양속에 저해되는 내용을 고의로
        유포시킨 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7. 회원이 국익 또는 사회적 공익을 저해할 목적으로
        서비스 이용을 계획 또는 실행하는 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8. 서비스 운영을 고의로 방해한 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9. 서비스의 안정적 운영을 방해할 목적으로 다량의
        정보를 전송하거나 광고성 정보를 전송하는 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10. 정보통신설비의 오작동이나 정보의 파괴를
        유발시키는 컴퓨터 바이러스 프로그램 등을 유포하는 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11. 정보통신윤리위원회 등 외부기관의 시정요구가
        있거나 불법선거운동과 관련하여 선거관리위원회의 유권해석을 받은 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12. 사이트의 서비스 정보를 이용하여 얻은 정보를
        사이트의 사전 승낙 없이 복제 또는 유통시키거나 상업적으로 이용하는 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13. 회원이 자신의 홈페이지와 게시판에 음란물을
        게재하거나 음란 사이트 링크하는 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14. 본 약관을 포함하여 기타 사이트가 정한 이용
        조건에 위반한 경우
      </Text>
    </Column>
  );
};

export default TerminationOfContractAndRestrictionsOnUse;
