import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { color } from '@maru/design-token';
import { Column, Row, Text } from '@maru/ui';
import { IconArrowOutward } from '@maru/icon';
import { useDownloadAdmissionTicket } from './PrintAdmission.hooks';
import { useFormStatusQuery } from '@/services/form/queries';

const CheckForm = () => {
  const { handleDownloadAdmissionTicketButtonClick } = useDownloadAdmissionTicket();
  const { data: formStatus } = useFormStatusQuery();

  const handleClick = () => {
    if (formStatus?.status === 'FIRST_PASSED') {
      handleDownloadAdmissionTicketButtonClick();
    } else {
      alert('1차 합격일때만 수험표를 출력할 수 있습니다.');
    }
  };

  return (
    <StyledApplicationBox onClick={handleClick}>
      <Column gap={9}>
        <Row gap={15} alignItems="center">
          <Text fontType="H3" color={color.gray900}>
            수험표 출력하기
          </Text>
          <IconArrowOutward width={36} height={36} color={color.maruDefault} />
        </Row>
        <Text fontType="p2" color={color.gray600}>
          클릭해서 수험표를 출력하세요.
        </Text>
      </Column>
    </StyledApplicationBox>
  );
};

export default CheckForm;

const StyledApplicationBox = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 450px;
  height: 125px;
  padding: 24px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;
