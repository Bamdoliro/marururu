import { formatApplicationDate, formatStartDate, formatStatus } from '@/utils';
import { color } from '@maru/design-token';
import { Row, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';

interface Props {
  place: string;
  applicationStartDate: string;
  applicationEndDate: string;
  start: string;
  status: string;
  applicationUrl: string;
}

const ClosedItem = ({
  place,
  applicationEndDate,
  applicationStartDate,
  start,
  status,
  applicationUrl,
}: Props) => {
  const handleClick = () => {
    window.location.href = applicationUrl;
  };

  return (
    <StyledBox onClick={handleClick}>
      <Row gap={30} alignItems="center">
        <Text fontType="H3" color={color.gray900}>
          {formatStartDate(start)}
        </Text>
        <StyledStatusBox>
          <Text fontType="code" color={color.red}>
            {formatStatus(status)}
          </Text>
        </StyledStatusBox>
      </Row>
      <Text fontType="p2" color={color.gray500}>
        장소: {place}
        <br />
        신청 기한: {formatApplicationDate(applicationStartDate)} ~{' '}
        {formatApplicationDate(applicationEndDate)}
      </Text>
    </StyledBox>
  );
};

export default ClosedItem;

const StyledBox = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 400px;
  height: 180px;
  padding: 28px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;

const StyledStatusBox = styled.div`
  width: 80px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid ${color.red};
  background-color: rgba(244, 67, 54, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
