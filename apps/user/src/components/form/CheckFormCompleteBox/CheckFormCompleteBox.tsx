import { useSetFormStepStore } from '@/store';
import { styled } from 'styled-components';
import CheckFormComplete from './CheckFormComplete/CheckFormComplete';

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

    return (
        <StyledCheckFormCompleteBox>
            <CheckFormComplete
                onClick={() => setFormStep('지원자정보')}
                formStep="지원자 정보"
                maxCompleteOfNumber={5}
                completeOfNumber={applicantFilledCount}
            />
            <CheckFormComplete
                onClick={() => setFormStep('보호자정보')}
                formStep="보호자 정보"
                maxCompleteOfNumber={6}
                completeOfNumber={parentFilledCount}
            />
            <CheckFormComplete
                onClick={() => setFormStep('출신학교및학력')}
                formStep="출신학교 및 학력"
                maxCompleteOfNumber={8}
                completeOfNumber={educationFilledCount}
            />
            <CheckFormComplete
                onClick={() => setFormStep('전형선택')}
                formStep="전형 선택"
                maxCompleteOfNumber={1}
                completeOfNumber={typeFilledCount}
            />
            <CheckFormComplete
                onClick={() => setFormStep('성적입력')}
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
