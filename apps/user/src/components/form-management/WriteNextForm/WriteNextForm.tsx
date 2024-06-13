import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import { ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';

const WriteNextForm = () => {
  const router = useRouter();

  return (
    <StyledApplicationBox onClick={() => router.push(ROUTES.FORM)}>
      <Column gap={9}>
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
  width: 400px;
  height: 125px;
  padding: 24px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;
