import { ROUTES } from '@/constants/common/constant';
import { IconFunction } from '@maru/icon';
import { color } from '@maru/theme';
import { Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const SimulatorBox = () => {
  const router = useRouter();

  return (
    <StyledSimulatorBox onClick={() => router.push(ROUTES.SCORE_SIMULATION)}>
      <Row gap={8} alignItems="flex-start" justifyContent="space-between">
        <Text fontType="H3" color={color.gray900}>
          성적 모의 계산
        </Text>
        <IconFunction width={64} height={64} color={color.maruDefault} />
      </Row>
      <Text fontType="p2" color={color.gray500}>
        복잡한 성적 산출 공식을
        <br /> 자동으로 계산할 수 있어요
      </Text>
    </StyledSimulatorBox>
  );
};

export default SimulatorBox;

const StyledSimulatorBox = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 384px;
  height: 180px;
  padding: 28px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;
