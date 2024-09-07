import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { Column, Row, Text } from '@maru/ui';
import { IconArrowOutward } from '@maru/icon';
import { useDownloadRecipt } from './DownloadRecipt.hooks';
import { useFormStatusQuery } from '@/services/form/queries';

const DownloadRecipt = () => {
  const { handleDownloadReciptButtonClick } = useDownloadRecipt();
  const { data: formStatus } = useFormStatusQuery();

  const isDownloadable =
    formStatus?.status === 'FINAL_SUBMITTED' ||
    formStatus?.status === 'APPROVED' ||
    formStatus?.status === 'RECEIVED' ||
    formStatus?.status === 'REJECTED';

  const handleClick = () => {
    if (isDownloadable) {
      handleDownloadReciptButtonClick();
    } else {
      alert('접수증을 다운로드할 수 없는 상태입니다.');
    }
  };

  return (
    <StyledApplicationBox onClick={handleClick}>
      <Column gap={15}>
        <Row gap={4} alignItems="center">
          <Text fontType="H3" color={color.gray900}>
            내 접수증 확인하기
          </Text>
          <IconArrowOutward width={36} height={36} color={color.maruDefault} />
        </Row>
        <Text fontType="p2" color={color.gray600}>
          클릭해서 접수증을 다운로드 받으세요.
        </Text>
      </Column>
    </StyledApplicationBox>
  );
};

export default DownloadRecipt;

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
