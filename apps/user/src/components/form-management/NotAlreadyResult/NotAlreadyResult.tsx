import { color } from '@maru/design-token';
import styled from 'styled-components';
import { Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { IconGrayIngCircle } from '@maru/icon';

interface Props {
  result: string;
}

const NotAlreadyResult = ({ result }: Props) => {
  return (
    <StyledNotAlreadyResult>
      <Row alignItems="top" gap={190}>
        <Column gap={8}>
          <Text fontType="p1" color={color.gray600}>
            원서 상태
          </Text>
          <Text fontType="H1" color={color.gray900}>
            검토중
          </Text>
        </Column>
        <IconGrayIngCircle width={95} height={95} />
      </Row>
      <Text fontType="p3" color={color.gray600}>
        아직 {result} 합격자 발표일이 아닙니다.
        <br />
        발표일까지 기다려 주세요.
      </Text>
    </StyledNotAlreadyResult>
  );
};

export default NotAlreadyResult;

const StyledNotAlreadyResult = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 450px;
  height: 260px;
  padding: 36px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;
