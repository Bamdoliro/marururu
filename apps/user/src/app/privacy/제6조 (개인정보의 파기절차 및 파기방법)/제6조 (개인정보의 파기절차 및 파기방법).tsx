import { IconTerms } from '@maru/icon';
import { Text, Row, Column } from '@maru/ui';
import { color } from '@maru/design-token';

const 제6조 = () => {
  return (
    <>
      <Column gap={6}>
        <Row gap={3} alignItems="center">
          <IconTerms />
          <Text fontType="H4" color={color.gray900}>
            제6조 (개인정보의 파기절차 및 파기방법)
          </Text>
        </Row>
        <Text fontType="p3" color={color.gray900}>
          ① 우리학교는 원칙적으로 개인정보의 처리목적이 달성된 개인정보는 지체 없이
          파기합니다. 다만, 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는
          개인정보 처리방침을 통하여 해<br />
          &nbsp;&nbsp;&nbsp;&nbsp;당 개인정보 항목과 보존근거를 공개하겠습니다. 파기의
          절차, 기한 및 방법은 다음과 같습니다.
          <br />
          &nbsp;&nbsp;1. 파기절차
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;불필요한 개인정보 및 개인정보파일은 개인정보
          보호책임자의 책임 하에 우리학교의 내부 관리계획 절차에 따라 다음과 같이 처리하고
          있습니다.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 가. 개인정보의 파기: 보유기간이 경과한
          개인정보는 종료일로부터 지체 없이 파기합니다.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 나. 개인정보파일의 파기: 개인정보파일의
          처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보파일이 불필요하게
          되었을 때에는 개인정보의 처리가 불필요한 것으로 인정 되<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;는 날로부터 지체 없이 그
          개인정보파일을 파기합니다.
          <br />
          &nbsp;&nbsp;2. 파기방법
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 가. 전자적 형태의 정보는 기록을 재생할 수
          없는 기술적 방법을 사용합니다.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 나. 종이에 출력된 개인정보는 분쇄기로
          분쇄하거나 소각을 통하여 파기합니다.
        </Text>
      </Column>
    </>
  );
};

export default 제6조;
