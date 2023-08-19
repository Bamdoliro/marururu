'use client';

import { AppLayout } from '@/layouts';
import { useBoolean } from '@maru/hooks';
import { color } from '@maru/theme';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { ResultsStep } from '@/types/results/client';
import styled from 'styled-components';
import { useState } from 'react';
import { ResultsMain, FinalResultsTable } from '@/components/results';

const FinalResultsPage = () => {
    const [resultsStep, setResultsStep] = useState<ResultsStep>('MAIN');

    return (
        <AppLayout header footer>
            <StyledFinalResultsPage>
                <Column gap={12} alignItems="center">
                    <Text fontType="H5" color={color.gray900}>
                        2024학년도 부산소프트웨어마이스터고등학교
                    </Text>
                    <Text fontType="D3" color={color.gray900}>
                        1차 최종 합격자 발표
                    </Text>
                </Column>
                <SwitchCase
                    value={resultsStep}
                    caseBy={{
                        MAIN: <ResultsMain option="FINAL" setResultsStep={setResultsStep} />,
                        RESULTS: <FinalResultsTable />,
                    }}
                />
            </StyledFinalResultsPage>
        </AppLayout>
    );
};

export default FinalResultsPage;

const StyledFinalResultsPage = styled.div`
    padding-top: 82px;
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    gap: 48px;
    width: 100%;
    height: 100%;
`;
