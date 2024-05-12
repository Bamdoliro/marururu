import { IconTerms } from '@maru/icon';
import { Text, Row, Column } from '@maru/ui';
import { color } from '@maru/design-token';

const 제7조 = () => {
  return (
    <>
      <Column gap={6}>
        <Row gap={3} alignItems="center">
          <IconTerms />
          <Text fontType="H4" color={color.gray900}>
            제7조 (개인정보의 안전성 확보 조치)
          </Text>
        </Row>
        <Text fontType="p3" color={color.gray900}>
          우리학교는 개인정보의 안전성 확보를 위해 다음과 같이 관리적, 기술적, 물리적
          조치를 취하고 있습니다.
          <br />
          &nbsp;1. 내부관리계획의 수립 및 시행
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • 개인정보의 안전한 처리를 위해 관련 법령 및
          관리지침을 준수하여 내부관리계획을 수립 및 시행하고 있습니다.
          <br />
          &nbsp;2. 개인정보 취급직원의 최소화 및 교육
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • 개인정보를 취급하는 직원은 반드시 필요한 인원에
          한하여 지정‧관리하고 있으며 취급직원을 대상으로 안전한 관리를 위한 교육을
          실시하고 있습니다.
          <br />
          &nbsp;3. 개인정보에 대한 접근 제한
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • 개인정보를 처리하는 개인정보처리시스템에 대한
          접근권한의 부여‧변경‧말소를 통하여 개인정보에 대한 접근통제를 위한 필요한 조치를
          하고 있으며 침입차단시스템을 이용하여 외부로
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;부터의 무단 접근을 통제하고
          있습니다.
          <br />
          &nbsp;4. 접속기록의 보관
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • 개인정보처리시스템에 접속한 기록을 최소 12개월
          이상 보관‧관리하고 있습니다.
          <br />
          &nbsp;5. 개인정보의 암호화
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • 개인정보는 암호화 등을 통해 안전하게 저장 및
          관리되고 있습니다. 또한 중요한 데이터는 저장 및 전송 시 암호화하여 사용하는 등의
          별도 보안기능을 사용하고 있습니다.
          <br />
          &nbsp;6. 보안프로그램 설치 및 주기적 점검‧갱신
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • 해킹이나 컴퓨터 바이러스 등에 의한 개인정보
          유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적으로 갱신‧점검하고
          있습니다.
          <br />
          &nbsp;7. 비인가자에 대한 출입 통제
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • 개인정보를 보관하고 있는 개인정보처리시스템의
          물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립‧운영하고 있습니다.
        </Text>
      </Column>
    </>
  );
};

export default 제7조;
