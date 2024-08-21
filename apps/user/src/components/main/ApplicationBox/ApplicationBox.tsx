import { IconArrowOutward } from '@maru/icon';
import { color } from '@maru/design-token';
import { Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';

const ApplicationBox = () => {
  const day = '9월 12일, 9월 28일';
  const router = useRouter();

  return (
    <StyledApplicationBox onClick={() => router.push(ROUTES.FAIR)}>
      <Row gap={8} alignItems="center">
        <Text fontType="H3" color={color.gray900}>
          입학전형 설명회 신청
        </Text>
        <IconArrowOutward width={36} height={36} color={color.maruDefault} />
      </Row>
      <Text fontType="p2" color={color.gray500}>
        일시: {day}
        <br />
        장소: 본교 SRC관 1층
      </Text>
    </StyledApplicationBox>
  );
};

export default ApplicationBox;

const StyledApplicationBox = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 384px;
  height: 180px;
  padding: 28px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;
