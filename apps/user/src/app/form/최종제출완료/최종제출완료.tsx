import { CompleteAlaram } from '@/components/form';
import { useUser } from '@/hooks';
import { AppLayout } from '@/layouts';
import { IconCheckCircle } from '@maru/icon';
import { color } from '@maru/design-token';
import { Button, Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';
import { useCTAButton } from './최종제출완료.hooks';

const 최종제출완료 = () => {
  const { userData } = useUser();
  const { handleMoveMainPage } = useCTAButton();

  return (
    <AppLayout header footer>
      <CompleteAlarmBox>
        <CompleteAlaram isComplete completeText="원서 최종 제출 완료" />
      </CompleteAlarmBox>
      <Styled최종제출완료>
        <Row gap={8} alignItems="center" justifyContent="center">
          <IconCheckCircle width={64} height={64} />
          <Text fontType="H1" color={color.gray900}>
            원서 최종 제출 완료
          </Text>
        </Row>
        <Column gap={71} alignItems="center">
          <Column gap={27} alignItems="center">
            <Text fontType="H2" color={color.gray900}>
              부산소프트웨어마이스터고에 지원해주셔서 감사합니다.
            </Text>
            <Text fontType="p2" color={color.gray900} textAlign="center">
              {userData.name} 님, 부산소프트웨어마이스터고에 지원해주셔서 대단히
              감사드립니다.
              <br />
              1차 합격자는 10월 23일에 발표됩니다.
              <br />
              {userData.name} 님의 1차 합격을 기원합니다.
            </Text>
          </Column>
          <Button onClick={handleMoveMainPage} size="SMALL">
            홈으로 돌아가기
          </Button>
        </Column>
      </Styled최종제출완료>
    </AppLayout>
  );
};

export default 최종제출완료;

const Styled최종제출완료 = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 70px;
  width: 100%;
  height: 100%;
  padding-top: 69px;

  opacity: 0;
  animation: show 1.2s 2s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;

  @keyframes show {
    from {
      transform: translateY(200px);
    }
    to {
      transform: translateY(0);
      opacity: 100;
    }
  }
`;

const CompleteAlarmBox = styled.div`
  position: absolute;
  width: 100%;

  animation: hide 1.2s 1s cubic-bezier(0.65, 0.05, 0.36, 1) forwards;

  @keyframes hide {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-300px);
      opacity: 0;
      display: none;
    }
  }
`;
