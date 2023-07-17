import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    onPrevious: () => void;
    onNext: () => void;
}

const FormController = ({ onPrevious, onNext }: PropsType) => {
    return (
        <FormControllerBar>
            <StyledFormController>
                <Button width="50%" option="SECONDARY" onClick={onPrevious}>
                    이전
                </Button>
                <Button width="50%" onClick={onNext}>
                    다음
                </Button>
            </StyledFormController>
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
    width: 331px;
`;
