import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import styled from 'styled-components';

const 이용시간 = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제11조 (서비스 이용시간 및 제공 중지)
        </Text>
      </Row>
      <TextBlock>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            1. 서비스의 이용은 우리학교의 업무상 또는 기술상 특별한 지장이 없는 한
            연중무휴, 1일 24시간 서비스를 제공합니다. 다만, 일부 서비스의 경우 그 종류나
            성질을 고려하여 별도로 이용시간
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;을 정할 수 있으며, 우리학교는 회원에게 사전
            공지합니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            2. 우리학교는 다음 각 호에 해당하는 경우 서비스 제공을 중지할 수 있습니다.
          </Text>
        </Indent>
        <DoubleIndent>
          <Text fontType="p3" color={color.gray900}>
            a. 서비스용 설비의 보수 등 공사로 인한 부득이한 경우
            <br />
            b. 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우
            <br />
            c. 기타 불가항력적 사유가 있는 경우
          </Text>
        </DoubleIndent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            3. 우리학교는 국가비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주
            등으로 정상적인 서비스 이용에 지장이 있는 때에는 서비스의 전부 또는 일부를
            제한하거나 중지할 수 있습니
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            4. 우리학교는 서비스 개선을 위한 시스템 업데이트 기타 유지보수 작업 등을
            진행하고자 하는 경우, 사전에 서비스 중단 시간과 작업 내용을 고지하여 일시적
            서비스 중단을 시행할 수 있습니
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            5. 사이트는 제1항 내지 제4항까지의 규정에 의하여 서비스의 이용을 제한하거나
            중지한 때에는 그 사유 및 제한기간 등을 사이트를 통하여 공지하거나 전자우편
            기타의 방법으로 지체 없이 회<br />
            &nbsp;&nbsp;&nbsp;&nbsp;원에게 알려야 합니다.
          </Text>
        </Indent>
      </TextBlock>
    </Column>
  );
};

export default 이용시간;

const TextBlock = styled.div`
  line-height: 1.5;
  color: ${color.gray900};
`;

const Indent = styled.div`
  margin-left: 10px;
`;

const DoubleIndent = styled.div`
  margin-left: 20px;
`;
