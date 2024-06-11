import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const MemberBoard = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제16조 (회원의 게시물)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        사이트는 회원이 게시하거나 등록하는 서비스내의 내용물이 다음 각 호의 1에
        해당한다고 판단되는 경우에 사전통지 없이 삭제할 수 있습니다. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 다른 회원 또는 제3자를 비방하거나 중상모략으로
        명예를 손상시키는 내용인 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 공공질서 및 미풍양속에 위반되는 내용인 경우
        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 범죄적 행위에 결부된다고 인정되는 내용일
        경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. 사이트의 저작권, 제 3자의 저작권 등 기타 권리를
        침해하는 내용인 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. 사이트에서 규정한 게시기간을 초과한 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6. 게시판의 성격에 부합하지 않는 게시물의 경우
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7. 기타 관계법령에 위반된다고 판단되는 경우 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8. 음란물이나 볼온한 내용 등으로 선량한 미풍양속,
        기타 사회 질서를 해하는 경우
      </Text>
    </Column>
  );
};

export default MemberBoard;
