'use client';

import {
    AttendanceCalculator,
    CertificateCalculator,
    GradeCalculator,
    GradePreview,
    VolunteerCalculator,
} from '@/components/form';
import { FIELD_DATA } from '@/constants/form/data';
import { AppLayout } from '@/layouts';
import { color } from '@maru/theme';
import { Column, Text, UnderLineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import styled from 'styled-components';

const GradeSimulation = () => {
    const [fieldStep, setFieldStep] = useState('성적 입력');

    return (
        <AppLayout header footer>
            <GradeSimulationPage>
                <Column style={{ marginBottom: 12 }} gap={16}>
                    <Text fontType="p3" color={color.red}>
                        *교과 성적 산출 방식에 대한 자세한 정보는 모집요강에서 확인해주시기
                        바랍니다.
                        <br /> *특례입학 대상자는 일반 전형 교과 성적 산출식이 적용됩니다.
                    </Text>
                </Column>
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
            </GradeSimulationPage>
        </AppLayout>
    );
};

export default GradeSimulation;

const GradeSimulationPage = styled.div`
    width: 816px;
    margin: 82px auto 93px;
`;

const NavigationBar = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 54px;
    margin: 64px 0 16px;
    background-color: ${color.white};
`;
