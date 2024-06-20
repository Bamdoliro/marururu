'use client';

import {
  CheckFormCompleteBox,
  CompleteAlaram,
  DraftFormConfirm,
} from '@/components/form';
import { AppLayout } from '@/layouts';
import { IconCancelCircle, IconCheckCircle } from '@maru/icon';
import { color } from '@maru/design-token';
import { Button, Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useOverlay } from '@toss/use-overlay';
import styled from 'styled-components';
import {
  useCTAButton,
  useCheckFilledForm,
  useSubmitDraftFormAction,
} from './초안작성완료.hooks';

const 초안작성완료 = () => {
  const overlay = useOverlay();
  const { handleCheckAgainForm } = useCTAButton();
  const {
    applicantFilledCount,
    parentFilledCount,
    educationFilledCount,
    typeFilledCount,
    documentFilledCount,
    isFilledForm: isComplete,
  } = useCheckFilledForm();
  const { handleDraftFormSubmit } = useSubmitDraftFormAction();

  const openDraftFormConfrim = () => {
    overlay.open(({ isOpen, close }) => (
      <DraftFormConfirm
        isOpen={isOpen}
        onClose={close}
        onConfirm={() => {
          handleDraftFormSubmit();
          close();
        }}
      />
    ));
  };

  return (
    <AppLayout header>
      <CompleteAlarmBox>
        <CompleteAlaram
          isComplete={isComplete}
          completeText="원서 초안 작성 완료"
          incompleteText="아직 작성하지 않은 곳이 있어요"
        />
      </CompleteAlarmBox>
      <Styled초안작성완료 isComplete={isComplete}>
        <Row gap={8} alignItems="center">
          {isComplete ? (
            <IconCheckCircle width={64} height={64} />
          ) : (
            <IconCancelCircle width={64} height={64} />
          )}
          <Text fontType="H1" color={color.gray900}>
            {isComplete ? '원서 초안 작성 완료' : '아직 작성하지 않은 곳이 있어요'}
          </Text>
        </Row>
        <Column gap={12} style={{ maxWidth: '80%' }}>
          <Text fontType="p1" color={color.gray900}>
            {isComplete
              ? '원서 접수에 필요한 초안을 모두 작성하셨습니다.'
              : '원서 작성 중 입력하지 않은 곳이 있습니다.'}
          </Text>
          <Text fontType="H4" color={color.red}>
            {isComplete ? (
              <>
                원서 초안 제출 시 부산소프트웨어마이스터고등학교 입학전형에 응시한 것으로
                <br />
                처리되며 더 이상 입학원서 수정이 불가능합니다.
              </>
            ) : (
              '원서 작성 중 입력하지 않은 곳이 있다면 초안을 제출할 수 없습니다.'
            )}
          </Text>
          <Text fontType="p1" color={color.gray900}>
            {isComplete
              ? '잘못 입력한 곳이 없는지 면밀히 검토해주시기 바랍니다.'
              : '또한 잘못 입력한 곳이 없는지 면밀히 검토해주시기 바랍니다.'}
          </Text>
        </Column>
        <CheckFormCompleteBox
          applicantFilledCount={applicantFilledCount}
          parentFilledCount={parentFilledCount}
          educationFilledCount={educationFilledCount}
          typeFilledCount={typeFilledCount}
          documentFilledCount={documentFilledCount}
        />
        {isComplete ? (
          <Column gap={24}>
            <Text fontType="H3" color={color.gray900}>
              제출하시겠습니까?
            </Text>
            <Row gap={16}>
              <Button onClick={handleCheckAgainForm} styleType="SECONDARY" size="LARGE">
                다시 한번 확인하기
              </Button>
              <Button onClick={openDraftFormConfrim} size="LARGE">
                원서 초안 제출하기
              </Button>
            </Row>
          </Column>
        ) : (
          <Column gap={24}>
            <Text fontType="H3" color={color.gray900}>
              돌아가시겠습니까?
            </Text>
            <Button onClick={handleCheckAgainForm} styleType="SECONDARY" size="LARGE">
              처음으로 돌아가기
            </Button>
          </Column>
        )}
      </Styled초안작성완료>
    </AppLayout>
  );
};

export default 초안작성완료;

const Styled초안작성완료 = styled.div<{ isComplete: boolean }>`
  ${flex({ flexDirection: 'column' })}
  gap: ${(props) => (props.isComplete ? '48px' : '62px')};
  max-width: 800px;
  height: 100%;
  margin: 62px auto 240px;

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
