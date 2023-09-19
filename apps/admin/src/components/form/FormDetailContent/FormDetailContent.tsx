import { FORM_DETAIL_STEP_LIST } from '@/constants/form/data';
import { color } from '@maru/theme';
import { Column, Row, UnderlineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import styled from 'styled-components';
import FormStatus from './FormStatus/FormStatus';
import Profile from './Profile/Profile';
import 지원자정보 from './지원자정보/지원자정보';

interface Props {
    id: number;
}

const FormDetailContent = ({ id }: Props) => {
    const [currentFormDetailStep, setCurrentFormDetailStep] = useState('지원자 정보');

    const handleFormDetailStepButtonClick = (formDetailStep: string) => {
        setCurrentFormDetailStep(formDetailStep);
    };

    return (
        <StyledFormDetailContent>
            <Row gap={48}>
                <Column gap={36}>
                    <Profile id={id} />
                    <FormStatus id={id} />
                </Column>
                <Column gap={48}>
                    <NavigationBar>
                        {FORM_DETAIL_STEP_LIST.map((formDetailStep, index) => (
                            <UnderlineButton
                                key={`form-detail-step ${index}`}
                                active={formDetailStep === currentFormDetailStep}
                                onClick={() => handleFormDetailStepButtonClick(formDetailStep)}>
                                {formDetailStep}
                            </UnderlineButton>
                        ))}
                    </NavigationBar>
                    <SwitchCase
                        value={currentFormDetailStep}
                        caseBy={{
                            '지원자 정보': <지원자정보 id={id} />,
                        }}
                    />
                </Column>
            </Row>
        </StyledFormDetailContent>
    );
};

export default FormDetailContent;

const StyledFormDetailContent = styled.div`
    display: flex;
    gap: 48px;
    width: 100%;
    height: 900px;
`;

const NavigationBar = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 60px;
    background-color: ${color.white};
`;
