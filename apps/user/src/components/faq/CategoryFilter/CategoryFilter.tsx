import { useFaqCategoryListQuery } from '@/services/faq/queries';
import { useState } from 'react';
import styled from 'styled-components';
import Category from './Category';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';

const CATEGORY_LIST_DATA = [
    {
        id: 1,
        category: '질문 TOP',
    },
    {
        id: 2,
        category: '입학 과정',
    },
    {
        id: 3,
        category: '학교 생활',
    },
    {
        id: 4,
        category: '관련 서류 제출',
    },
];

const CategoryFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState(1);
    // const faqCategoryListQuery = useFaqCategoryListQuery();

    return (
        <StyledCategoryFilter>
            {CATEGORY_LIST_DATA.map((item) => (
                <Category
                    key={item.id}
                    isSelected={selectedCategory === item.id}
                    onClick={() => setSelectedCategory(item.id)}>
                    {item.category}
                </Category>
            ))}
        </StyledCategoryFilter>
    );
};

export default CategoryFilter;

const StyledCategoryFilter = styled.div`
    ${font.context}
    color: ${color.gray900};
    height: 36px;
    width: 100%;
    ${flex({ alignItems: 'center' })}
    gap: 12px;
    margin: 36px 0px 40px;
`;
