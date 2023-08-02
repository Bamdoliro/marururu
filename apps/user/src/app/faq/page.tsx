'use client';

import { CategoryFilter, FaqList } from '@/components/faq';
import { AppLayout } from '@/layouts';
import { useFaqListQuery } from '@/services/faq/queries';
import { color, font } from '@maru/theme';
import styled from 'styled-components';

const FaqPage = () => {
    const { data: faqList } = useFaqListQuery('TOP_QUESTION');

    return (
        <AppLayout header={true} footer={true} style={{ padding: '0px 207px' }}>
            <StyledFaqPage>
                <Title>자주 묻는 질문</Title>
                <CategoryFilter />
                <FaqList faqList={faqList} />
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
