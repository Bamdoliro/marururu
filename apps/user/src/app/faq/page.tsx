'use client';

import { Loader } from '@/components/common';
import { CategoryFilter, FaqList } from '@/components/faq';
import { AppLayout } from '@/layouts';
import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { Suspense, useState } from 'react';
import styled from 'styled-components';

const FaqPage = () => {
    const [category, setCategory] = useState('TOP_QUESTION');

    return (
        <AppLayout header footer style={{ padding: '0px 204px', marginTop: 82 }}>
            <StyledFaqPage>
                <Text fontType="H1" color={color.gray900}>
                    자주 묻는 질문
                </Text>
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
    max-width: 1240px;
    height: 100%;
    margin: 0 auto;
`;
