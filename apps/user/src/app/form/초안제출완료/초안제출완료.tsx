import { CompleteAlaram } from '@/components/form';
import { AppLayout } from '@/layouts';
import { IconCheckCircle } from '@maru/icon';
import { color } from '@maru/theme';
import { Button, Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useCTAButton } from './초안제출완료.hooks';

const 초안제출완료 = () => {
  const { handleMovewMainPage, handleMovew최종제출Page } = useCTAButton();

  return (
    <AppLayout header>
      <CompleteAlarmBox>
        <CompleteAlaram isComplete completeText="원서 초안 제출 완료" />
      </CompleteAlarmBox>
      <Styled초안제출완료>
        <Row gap={8} alignItems="center">
          <IconCheckCircle width={64} height={64} />
          <Text fontType="H1" color={color.gray900}>
            원서 초안 제출 완료
          </Text>
        </Row>
        <Column gap={12}>
          <Text fontType="p1" color={color.gray900}>
            원서 초안을 제출 완료하셨습니다.
          </Text>
          <Text fontType="H4" color={color.red}>
            원서 초안과 기타 제출서류를 함께 제출해야 최종적으로 원서 제출이 완료됩니다.
          </Text>
        </Column>
        <Row gap={16}>
          <Button onClick={handleMovewMainPage} option="SECONDARY" size="LARGE">
            홈으로 돌아가기
          </Button>
          <Button onClick={handleMovew최종제출Page} size="LARGE">
            최종 제출 페이지로 이동하기
          </Button>
        </Row>
      </Styled초안제출완료>
    </AppLayout>
  );
};

export default 초안제출완료;

const Styled초안제출완료 = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 48px;
  max-width: 800px;
  height: 100%;
  margin: 62px auto 0;

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
