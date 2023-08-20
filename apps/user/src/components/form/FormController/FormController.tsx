import { FormStep } from '@/types/form/client';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    onPrevious?: () => void;
    onNext: () => void;
    step: FormStep;
}

const FormController = ({ onPrevious, onNext, step }: PropsType) => {
    return (
        <FormControllerBar>
            {step === '지원자정보' ? (
                <Button width={150} onClick={onNext}>
                    다음 단계
                </Button>
            ) : (
                <StyledFormController>
                    <Button width="50%" option="SECONDARY" onClick={onPrevious}>
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
