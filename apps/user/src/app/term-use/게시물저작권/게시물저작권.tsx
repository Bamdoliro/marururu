import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import styled from 'styled-components';

const 게시물저작권 = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제15조 (게시물의 저작권)
        </Text>
      </Row>
      <TextBlock>
        <Text fontType="p3" color={color.gray900}>
          사이트에 게재된 자료에 대한 권리는 다음 각 호의 1과 같습니다.
        </Text>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            1. 게시물에 대한 권리와 책임은 게시자에게 있으며 사이트는 게시자의 동의 없이는
            이를 서비스 내 게재 이외에 영리적 목적으로 사용할 수 없습니다. 단, 비영리적인
            경우에는 그러하지 아니
            <br />
            &nbsp;&nbsp;&nbsp;하며 또한 사이트는 서비스 내의 게재권을 갖습니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            2. 회원은 서비스를 이용하여 얻은 정보를 가공, 판매하는 행위 등 서비스에 게재된
            자료를 상업적으로 이용할 수 없습니다.
          </Text>
        </Indent>
      </TextBlock>
    </Column>
  );
};

export default 게시물저작권;

const TextBlock = styled.div`
  line-height: 1.5;
  color: ${color.gray900};
`;

const Indent = styled.div`
  margin-left: 8px;
`;
