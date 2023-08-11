'use client';

import { CategoryFilter, FaqList } from '@/components/faq';
import { AppLayout } from '@/layouts';
import { color, font } from '@maru/theme';
import { useState } from 'react';
import styled from 'styled-components';

const FaqPage = () => {
    const [category, setCategory] = useState('TOP_QUESTION');

    return (
        <AppLayout header footer style={{ padding: '0px 207px' }}>
            <StyledFaqPage>
                <CategoryFilter setCategory={setCategory} />
                <Title>자주 묻는 질문</Title>
                <FaqList category={category} />
            </StyledFaqPage>
        </AppLayout>
    );
};

export default FaqPage;

const StyledFaqPage = styled.div`
    width: 100%;
    height: 100%;
`;

const Title = styled.p`
    ${font.H2}
    color: ${color.gray900};
`;
