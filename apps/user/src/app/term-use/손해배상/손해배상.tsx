import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import styled from 'styled-components';

const 손해배상 = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제17조 (손해배상 및 면책)
        </Text>
      </Row>
      <TextBlock>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            1. 회원이 본 약관의 제7조, 제16조 등의 규정에 위반한 행위로 우리학교 및
            제3자에게 손해를 입히거나 회원의 책임 있는 사유에 의해 우리학교 및 제3자에게
            손해를 입힌 경우에는 회원은 그<br />
            &nbsp;&nbsp;&nbsp;손해를 배상하여야 합니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            2. 우리학교는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수
            없는 경우 서비스 제공에 관한 책임이 면제됩니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            3. 우리학교는 서비스 이용과 관련하여 회원에게 발생한 손해 가운데 회원의 고의
            또는 과실로 인한 서비스 이용의 장애 및 손해에 대하여 어떠한 책임도 부담하지
            않습니다.
          </Text>
        </Indent>
      </TextBlock>
    </Column>
  );
};

export default 손해배상;

const TextBlock = styled.div`
  line-height: 1.5;
  color: ${color.gray900};
`;

const Indent = styled.div`
  margin-left: 10px;
`;
