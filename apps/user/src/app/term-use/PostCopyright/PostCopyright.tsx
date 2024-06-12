import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const PostCopyright = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제17조 (게시물의 저작권)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        서비스에 게재된 자료에 대한 권리는 다음 각 호의 1과 같습니다. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 게시물에 대한 권리와 책임은 게시자에게 있으며
        사이트는 게시자의 동의 없이는 이를 서비스 내 게재 이외에 영리적 목적으로 사용할 수
        없습니다. 단, 비영리적인 경우에는 그러하지 아 니하며 또<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 한 사이트는 서비스 내의
        게재권을 갖습니다. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 회원은 서비스를 이용하여 얻은 정보를 가공,
        판매하는 행위 등 서비스에 게재된 자료를 상업적으로 이용할 수 없습니다.
      </Text>
    </Column>
  );
};

export default PostCopyright;
