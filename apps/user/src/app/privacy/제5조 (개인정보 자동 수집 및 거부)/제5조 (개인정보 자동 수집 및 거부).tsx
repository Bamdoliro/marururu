import { IconTerms } from '@maru/icon';
import { Text, Row, Column } from '@maru/ui';
import { color } from '@maru/design-token';

const 제5조 = () => {
  return (
    <>
      <Column gap={6}>
        <Row gap={3} alignItems="center">
          <IconTerms />
          <Text fontType="H4" color={color.gray900}>
            제5조 (개인정보 자동 수집 및 거부)
          </Text>
        </Row>
        <Text fontType="p3" color={color.gray900}>
          ① 우리학교 홈페이지는 이용자 편의성을 제공하기 위해 이용정보를 저장하고 불러오는
          '쿠키(cookie)'를 사용합니다.
          <br />
          ② 쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 컴퓨터 브라우저에게
          보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
          <br />
          &nbsp;&nbsp;• 1. 쿠키의 사용 목적: 팝업차단 및 방문통계 정보 제공
          <br />
          &nbsp;&nbsp;• 2. 쿠키의 설치·운영 및 거부: 웹브라우저 상단의 도구 {`>`} 인터넷
          옵션 {`>`} 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다.
          <br />
          &nbsp;&nbsp;• 3. 쿠키 저장을 거부할 경우 홈페이지 팝업차단 및 방문통계 정보
          제공이 안 될 수 있습니다.
          <br />
        </Text>
      </Column>
    </>
  );
};

export default 제5조;
