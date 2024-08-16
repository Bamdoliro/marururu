import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import styled from 'styled-components';

const ApprovalOfApplicationForUse = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제8조 (서비스 이용 계약의 변경)
        </Text>
      </Row>
      <TextBlock>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            1. 회원은 개인정보관리를 통해 언제든지 본인의 개인정보를 열람하고 수정할 수
            있습니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            2. 회원은 이용 신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정하여야
            하며 회원정보의 미변경으로 인하여 발생되는 문제의 책임은 본인에게 있습니다.
          </Text>
        </Indent>
      </TextBlock>
    </Column>
  );
};

export default ApprovalOfApplicationForUse;

const TextBlock = styled.div`
  line-height: 1.5;
  color: ${color.gray900};
`;

const Indent = styled.div`
  margin-left: 10px;
`;
