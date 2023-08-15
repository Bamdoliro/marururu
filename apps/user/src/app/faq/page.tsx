'use client';

import { Loader } from '@/components/common';
import { CategoryFilter, FaqList } from '@/components/faq';
import { AppLayout } from '@/layouts';
import { color, font } from '@maru/theme';
import { Suspense, useState } from 'react';
import styled from 'styled-components';

const FaqPage = () => {
    const [category, setCategory] = useState('TOP_QUESTION');

    return (
        <AppLayout header footer style={{ padding: '0px 207px', marginTop: 82 }}>
            <StyledFaqPage>
                <Title>자주 묻는 질문</Title>
                <CategoryFilter setCategory={setCategory} />
                <Suspense fallback={<Loader />}>
                    <FaqList category={category} />
                </Suspense>
            </StyledFaqPage>
        </AppLayout>
    );
};

export default FaqPage;

const StyledFaqPage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Title = styled.p`
    ${font.H1}
    color: ${color.gray900};
`;
