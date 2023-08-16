import {
    AttendanceCalculator,
    CertificateCalculator,
    FormController,
    GradeCalculator,
    GradePreview,
    VolunteerCalculator,
} from '@/components/form';
import { FormLayout } from '@/layouts';
import { color } from '@maru/theme';
import { UnderLineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import { styled } from 'styled-components';
import { useCTAButton } from './성적입력.hooks';

const FIELD_DATA = ['성적 입력', '출결상황', '봉사시간', '자격증'] as const;

const 성적입력 = () => {
    const { handleNextButtonClick, handlePreviousButtonClick } = useCTAButton();
    const [fieldStep, setFieldStep] = useState('성적 입력');

    return (
        <FormLayout title="성적 입력">
            <GradePreview />
            <NavigationBar>
                {FIELD_DATA.map((item, index) => (
                    <UnderLineButton
                        key={`field-data ${index}`}
                        active={item === fieldStep}
                        onClick={() => setFieldStep(item)}>
                        {item}
                    </UnderLineButton>
                ))}
            </NavigationBar>
            <SwitchCase
                value={fieldStep}
                caseBy={{
                    성적입력: <GradeCalculator />,
                    출결상황: <AttendanceCalculator />,
                    봉사시간: <VolunteerCalculator />,
                    자격증: <CertificateCalculator />,
                }}
                defaultComponent={<GradeCalculator />}
            />
            <FormController
                onPrevious={handlePreviousButtonClick}
                onNext={handleNextButtonClick}
                step="성적입력"
            />
        </FormLayout>
    );
};

export default 성적입력;

const NavigationBar = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 54px;
    margin: 64px 0 16px;
    background-color: ${color.white};
`;
