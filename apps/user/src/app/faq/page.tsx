'use client';

import Categories from '@/components/faq/Categories';
import FaqItem from '@/components/faq/FaqItem';
import FaqLayout from '@/layouts/FaqLayout';
import { useFaqListQuery } from '@/services/faq/queries';
import { color, font } from '@maru/global-style';
import styled from 'styled-components';

const FaqPage = () => {
    const { data } = useFaqListQuery();

    return (
        <FaqLayout>
            <StyledFaqPage>
                <Title>자주 묻는 질문</Title>
                <Categories />
                <FaqList>
                    {data.map((item) => (
                        <FaqItem key={item.id} question={item.question} answer={item.answer} />
                    ))}
                </FaqList>
            </StyledFaqPage>
        </FaqLayout>
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

const FaqList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
