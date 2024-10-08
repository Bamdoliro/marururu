import styled from 'styled-components';
import { flex } from '@maru/utils';
import { color } from '@maru/design-token';
import { Column, Row, Text } from '@maru/ui';
import { IconArrowOutward } from '@maru/icon';
import { useDownloadForm } from './CheckForm.hooks';
import { useFormStatusQuery } from '@/services/form/queries';

const CheckForm = () => {
  const { handlleDownloadFormButtonClick } = useDownloadForm();
  const { data: formStatus } = useFormStatusQuery().data ?? {};

  const handleClick = () => {
    const allowedStatuses = ['FINAL_SUBMITTED', 'APPROVED', 'RECEIVED', 'REJECTED'];

    if (formStatus?.status && allowedStatuses.includes(formStatus.status)) {
      handlleDownloadFormButtonClick();
    } else {
      alert('원서를 다운로드를 할 수 없습니다.');
    }
  };

  return (
    <StyledApplicationBox onClick={handleClick}>
      <Column gap={15}>
        <Row gap={4} alignItems="center">
          <Text fontType="H3" color={color.gray900}>
            내 원서 확인하기
          </Text>
          <IconArrowOutward width={36} height={36} color={color.maruDefault} />
        </Row>
        <Text fontType="p2" color={color.gray600}>
          클릭해서 원서를 다운로드 받으세요.
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
