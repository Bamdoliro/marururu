'use client';

import { AppLayout } from '@/layouts';
import { color } from '@maru/theme';
import { Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { ResultStep } from '@/types/result/client';
import styled from 'styled-components';
import { useState } from 'react';
import { ResultMain, FirstResultTable } from '@/components/result';

const FirstResultPage = () => {
    const [ResultStep, setResultStep] = useState<ResultStep>('MAIN');

    return (
        <AppLayout header footer>
            <StyledFirstResultPage>
                <Column gap={12} alignItems="center">
                    <Text fontType="H5" color={color.gray900}>
                        2024학년도 부산소프트웨어마이스터고등학교
                    </Text>
                    <Text fontType="D3" color={color.gray900}>
                        1차 합격자 발표
                    </Text>
                </Column>
                <SwitchCase
                    value={ResultStep}
                    caseBy={{
                        MAIN: <ResultMain option="FIRST" setResultStep={setResultStep} />,
                        RESULT: <FirstResultTable />,
                    }}
                />
            </StyledFirstResultPage>
        </AppLayout>
    );
};

export default FirstResultPage;

const StyledFirstResultPage = styled.div`
    padding-top: 82px;
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    gap: 48px;
    width: 100%;
    height: 100%;
`;
