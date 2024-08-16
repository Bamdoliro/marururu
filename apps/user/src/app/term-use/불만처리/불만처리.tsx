import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import styled from 'styled-components';

const 불만처리 = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제20조 (불만 처리 및 분쟁 해결)
        </Text>
      </Row>
      <TextBlock>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            1. 우리학교와 회원은 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여
            필요한 모든 노력을 하여야 합니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            2. 회원이 서비스 이용과 관련하여 불만이 있는 경우, 우리학교의 고객지원팀에
            연락하여 불만을 제기할 수 있으며, 우리학교는 이를 신속하게 처리하기 위해
            노력합니다. 불만 처리 결과는 회<br />
            &nbsp;&nbsp;&nbsp;&nbsp;원에게 통보합니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            3. 전항의 노력에도 불구하고, 우리학교와 회원 간에 발생한 분쟁에 관한 소송이
            제기될 경우, 민사소송법에 따른 관할법원을 제1심 관할법원으로 지정합니다.
          </Text>
        </Indent>
      </TextBlock>
    </Column>
  );
};

export default 불만처리;

const TextBlock = styled.div`
  line-height: 1.5;
  color: ${color.gray900};
`;

const Indent = styled.div`
  margin-left: 10px;
`;
