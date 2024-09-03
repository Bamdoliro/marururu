import { useFormValueStore, useSetFormStepStore } from '@/store';
import { styled } from 'styled-components';
import CheckFormComplete from './CheckFormComplete/CheckFormComplete';
import { Storage } from '@/apis/storage/storage';

interface Props {
  applicantFilledCount: number;
  parentFilledCount: number;
  educationFilledCount: number;
  typeFilledCount: number;
  documentFilledCount: number;
}

const CheckFormCompleteBox = ({
  applicantFilledCount,
  parentFilledCount,
  educationFilledCount,
  typeFilledCount,
  documentFilledCount,
}: Props) => {
  const setFormStep = useSetFormStepStore();
  const form = useFormValueStore();

  const handleCorrect지원자정보 = () => {
    setFormStep('지원자정보');
    Storage.setItem('correct', '1');
  };

  const handleCorrect보호자정보 = () => {
    setFormStep('보호자정보');
    Storage.setItem('correct', '1');
  };

  const handleCorrect출신학교및학력 = () => {
    setFormStep('출신학교및학력');
    Storage.setItem('correct', '1');
  };

  const handleCorrect전형선택 = () => {
    setFormStep('전형선택');
    Storage.setItem('correct', '1');
  };

  const handleCorrect성적입력 = () => {
    setFormStep('성적입력');
    Storage.setItem('correct', '1');
  };

  return (
    <StyledCheckFormCompleteBox>
      <CheckFormComplete
        onClick={handleCorrect지원자정보}
        formStep="지원자 정보"
        maxCompleteOfNumber={5}
        completeOfNumber={applicantFilledCount}
      />
      <CheckFormComplete
        onClick={handleCorrect보호자정보}
        formStep="보호자 정보"
        maxCompleteOfNumber={6}
        completeOfNumber={parentFilledCount}
      />
      <CheckFormComplete
        onClick={handleCorrect출신학교및학력}
        formStep="출신학교 및 학력"
        maxCompleteOfNumber={
          form.education.graduationType === 'QUALIFICATION_EXAMINATION' ? +'2' : 9
        }
        completeOfNumber={educationFilledCount}
      />
      <CheckFormComplete
        onClick={handleCorrect전형선택}
        formStep="전형 선택"
        maxCompleteOfNumber={1}
        completeOfNumber={typeFilledCount}
      />
      <CheckFormComplete
        onClick={handleCorrect성적입력}
        formStep="성적 입력"
        maxCompleteOfNumber={4}
        completeOfNumber={4}
      />
      <CheckFormComplete
        onClick={() => setFormStep('자기소개서')}
        formStep="자기소개서 및 학업계획서"
        maxCompleteOfNumber={2}
        completeOfNumber={documentFilledCount}
      />
    </StyledCheckFormCompleteBox>
  );
};

export default CheckFormCompleteBox;

const StyledCheckFormCompleteBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  height: 248px;
`;
