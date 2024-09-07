import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import { ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';
import { useFormStatusQuery } from '@/services/form/queries';

const WriteNextForm = () => {
  const router = useRouter();
  const status = useFormStatusQuery();

  const isNotSubmit =
    status.data?.status === 'APPROVED' ||
    status.data?.status === 'REJECTED' ||
    status.data?.status === 'FINAL_SUBMITTED' ||
    status.data?.status === 'SUBMITTED' ||
    status.data?.status === 'PASSED' ||
    status.data?.status === 'RECEIVED' ||
    status.data?.status === 'FIRST_PASSED';

  const handleFormWrite = () => {
    if (!isNotSubmit) {
      alert('원서를 제출한 상태입니다.');
    } else {
      router.push(ROUTES.FORM);
    }
  };

  return (
    <StyledApplicationBox onClick={handleFormWrite}>
      <Column gap={15}>
        <Text fontType="H3" color={color.gray900}>
          원서 작성 이어서 하기
        </Text>
        <Text fontType="p2" color={color.gray600}>
          클릭해서 원서 작성 페이지로 이동하세요.
        </Text>
      </Column>
    </StyledApplicationBox>
  );
};

export default WriteNextForm;

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
