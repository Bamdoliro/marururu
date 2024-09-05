import type { FormStep } from '@/types/form/client';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useFormStepStore, use성적입력StepStore } from '@/store';
import { Storage } from '@/apis/storage/storage';

interface Props {
  onPrevious?: () => void;
  onNext: () => void;
  step: FormStep;
}

const FormController = ({ onPrevious, onNext, step }: Props) => {
  const [성적입력Step] = use성적입력StepStore();
  const correct = Storage.getItem('correct');

  return (
    <FormControllerBar>
      {step === '지원자정보' ||
      (correct &&
        (성적입력Step == '교과성적' ||
          step === '보호자정보' ||
          step === '자기소개서' ||
          step === '전형선택' ||
          step === '출신학교및학력')) ? (
        <Button width={150} onClick={onNext}>
          다음 단계
        </Button>
      ) : (
        <StyledFormController>
          <Button width="50%" styleType="SECONDARY" onClick={onPrevious}>
            이전
          </Button>
          <Button width="50%" onClick={onNext}>
            {step === '자기소개서' ? <p>작성 완료</p> : <p>다음</p>}
          </Button>
        </StyledFormController>
      )}
    </FormControllerBar>
  );
};

export default FormController;

const FormControllerBar = styled.div`
  ${flex({ justifyContent: 'flex-end' })}
  width: 100%;
  margin-top: 60px;
`;

const StyledFormController = styled.div`
  ${flex({ alignItems: 'center' })}
  gap: 24px;
  width: 324px;
`;
