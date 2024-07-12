import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';

const 통지및공지 = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제5조 (회원에 대한 고지, 통지 및 공지)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        우리학교는 회원에게 서비스 정책, 이용약관, 판매약관, 개인정보 처리방침 등 일체의
        약관, 서비스 이용 관련 일정한 사항이나 정보를 알리거나 안내할 목적으로 회원에게
        각종 고지나 통지를 이<br />
        행할 수 있으며, 사이트 등의 게시판이나 화면에 일정한 사항을 게시하여 공지함으로써
        각 회원에 대한 각종 고지나 통지를 갈음할 수 있습니다. 이와 관련하여 고지∙통지
        수단, 공지 방법, 공지
        <br />
        기간 등의 상세한 내용은 개인정보 처리방침을 확인 바랍니다.
      </Text>
    </Column>
  );
};

export default 통지및공지;
