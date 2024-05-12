import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';

const 제1조 = () => {
  return (
    <>
      <Column gap={6}>
        <Row gap={3} alignItems="center">
          <IconTerms />
          <Text fontType="H4" color={color.gray900}>
            제1조 (개인정보의 처리목적, 개인정보의 처리및 보유기간, 처리하는 개인정보의
            항목)
          </Text>
        </Row>
        <Text fontType="p3" color={color.gray900}>
          우리학교가 개인정보 보호법 제32조에 따라 등록·공개하는 개인정보파일은
          개인정보보호위원회 개인정보 포털(www.privacy.go.kr) ⇨ 개인서비스 ⇨ 정보주체
          권리행사 ⇨ 개인정보 열람등
          <br />
          요구 ⇨ 개인정보 파일 검색 메뉴를 통해 공개하고 있습니다.
        </Text>
        <Text fontType="p3" color={color.gray900}>
          ▶ 기관명에 '
          <Text fontType="p3" color={color.maruDefault}>
            부산소프트웨어마이스터고등학교
          </Text>
          '를 입력하면 조회가 가능합니다.
        </Text>
      </Column>
    </>
  );
};

export default 제1조;
