'use client';

import { ApplicationList } from '@/components/application';
import { Loader } from '@/components/common';
import { AppLayout } from '@/layouts';
import { ApplicationStep } from '@/types/application/client';
import { color } from '@maru/theme';
import { Text, UnderlineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { Suspense, useState } from 'react';
import styled from 'styled-components';

enum ApplicationStepEnum {
    '학생, 학부모' = 'STUDENT_AND_PARENT',
    '교사' = 'TEACHER',
}

const APPLICATION_STEP_DATA = ['학생, 학부모', '교사'] as const;

const ApplicationPage = () => {
    const [applicationStep, setApplicationStep] = useState<ApplicationStep>('STUDENT_AND_PARENT');

    return (
        <AppLayout header footer>
            <StyledApplicationPage>
                <Text fontType="H1" color={color.gray900}>
                    2024학년도 부산소프트웨어마이스터고등학교
                    <br />
                    입학전형 설명회 참가 신청
                </Text>
                <NavigationBar>
                    {APPLICATION_STEP_DATA.map((item, index) => (
                        <UnderlineButton
                            key={`navigation ${index}`}
                            active={ApplicationStepEnum[item] === applicationStep}
                            onClick={() => setApplicationStep(ApplicationStepEnum[item])}>
                            {item}
                        </UnderlineButton>
                    ))}
                </NavigationBar>
                <Suspense fallback={<Loader />}>
                    <ApplicationList applicationType={applicationStep} />
                </Suspense>
            </StyledApplicationPage>
        </AppLayout>
    );
};

export default ApplicationPage;

const StyledApplicationPage = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px 312px;
    margin-top: 82px;
`;

const NavigationBar = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 54px;
    margin: 36px 0px;
    background-color: ${color.white};
`;
