import styled from 'styled-components';
import { flex } from '@maru/utils';
import { color } from '@maru/design-token';
import { Column, Row, Text } from '@maru/ui';
import { IconPhone } from '@maru/icon';

interface Props {
  mode: 'small' | 'long';
}

const CallForInquiries = ({ mode }: Props) => {
  return (
    <StyledApplicationBox mode={mode}>
      <Column gap={5} alignItems="left">
        <Row gap={12} alignItems="center">
          <IconPhone width={36} height={36} />
          <Text fontType="H2" color={color.gray900}>
            입학 문의 전화
          </Text>
        </Row>
        {mode === 'small' ? (
          <>
            <Column height={64}> </Column>
          </>
        ) : (
          <>
            <Column height={220}> </Column>
          </>
        )}
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

const StyledApplicationBox = styled.div<{ mode: 'small' | 'long' }>`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: ${(props) => (props.mode === 'small' ? '400px' : '400px')};
  height: ${(props) => (props.mode === 'small' ? '260px' : '415px')};
  padding: 36px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
`;
