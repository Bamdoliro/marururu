'use client';

import ResultsTable from '@/components/results/ResultsTable/ResultsTable';
import { AppLayout } from '@/layouts';
import { useBoolean } from '@maru/hooks';
import { color } from '@maru/theme';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { ResultsStep } from '@/types/results/client';
import styled from 'styled-components';
import { useState } from 'react';
import { ResultsMain } from '@/components/results';

const FirstResultsPage = () => {
    const [resultsStep, setResultsStep] = useState<ResultsStep>('MAIN');

    return (
        <AppLayout header footer>
            <StyledFirstResultsPage>
                <Column gap={12} alignItems="center">
                    <Text fontType="H5" color={color.gray900}>
                        2024학년도 부산소프트웨어마이스터고등학교
                    </Text>
                    <Text fontType="D3" color={color.gray900}>
                        1차 합격자 발표
                    </Text>
                </Column>
                <SwitchCase
                    value={resultsStep}
                    caseBy={{
                        MAIN: <ResultsMain option="first" setResultsStep={setResultsStep} />,
                        RESULTS: <ResultsTable option="first" />,
                    }}
                />
            </StyledFirstResultsPage>
        </AppLayout>
    );
};

export default FirstResultsPage;

const StyledFirstResultsPage = styled.div`
    padding-top: 82px;
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    gap: 48px;
    width: 100%;
    height: 100%;
`;
