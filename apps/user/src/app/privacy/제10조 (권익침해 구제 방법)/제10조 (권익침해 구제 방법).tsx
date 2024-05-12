import { Text, Row, Column } from '@maru/ui';
import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';

const 제10조 = () => {
  return (
    <>
      <Column gap={6}>
        <Row gap={3} alignItems="center">
          <IconTerms />
          <Text fontType="H4" color={color.gray900}>
            제10조 (권익침해 구제 방법)
          </Text>
        </Row>
        <Text fontType="p3" color={color.gray900}>
          ① 정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조절위원회,
          한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수
          있습니다.
          <br />② 우리학교의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지
          못하시거나 보다 자세한 도움이 필요하시면 아래의 기관에 문의하시기 바랍니다.
          <br />▷ 개인정보 분쟁조정 위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
          <br />▷ 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
          <br />▷ 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
          <br />▷ 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
          <br />③ ｢개인정보 보호법｣ 제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제),
          제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대하여 공공기관의 장이 행한
          처분 또는 부작위로 인<br />
          &nbsp;&nbsp;&nbsp;&nbsp; 하여 권리 또는 이익을 침해 받은 자는 행정심판법이
          정하는 바에 따라 행정심판을 청구할 수 있습니다.
          <br />▷ 중앙행정심판위원회 : (국번없이) 110 (www.simpan.go.kr)
        </Text>
      </Column>
    </>
  );
};

export default 제10조;
