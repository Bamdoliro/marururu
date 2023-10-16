'use client';

import { FirstResultTable, ResultMain } from '@/components/result';
import { Layout } from '@/layouts';
import { ResultStep } from '@/types/result/client';
import { color } from '@maru/theme';
import { Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import styled from 'styled-components';

const FirstResultPage = () => {
    const [firstResultStep, setFirstResultStep] = useState<ResultStep>('MAIN');

    return (
        <Layout header footer>
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
                    value={firstResultStep}
                    caseBy={{
                        MAIN: <ResultMain option="FIRST" setResultStep={setFirstResultStep} />,
                        RESULT: <FirstResultTable />,
                    }}
                />
            </StyledFirstResultPage>
        </Layout>
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
