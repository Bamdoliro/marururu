import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { color } from '@maru/design-token';
import { Column, Row, Text } from '@maru/ui';

const CallForInquiries = () => {
  return (
    <StyledApplicationBox>
      <Column gap={5} alignItems="left">
        <Row gap={12} alignItems="center">
          <Text fontType="H2" color={color.gray900}>
            입학 문의 전화
          </Text>
        </Row>
        <Column height={64}> </Column>
        <Text fontType="H4" color={color.gray600}>
          교무실
        </Text>
        <Text fontType="H1" color={color.gray900}>
          051-971-2153
        </Text>
      </Column>
    </StyledApplicationBox>
  );
};

export default CallForInquiries;

const StyledApplicationBox = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 400px;
  height: 260px;
  padding: 36px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;
