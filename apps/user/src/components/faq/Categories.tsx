import { useFaqCategoryListQuery } from '@/services/faq/queries';
import { useState } from 'react';
import styled from 'styled-components';
import Category from './Category';
import { color, font } from '@maru/global-style';

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const { data } = useFaqCategoryListQuery();

    return (
        <StyledCategories>
            {data.map((item) => (
                <Category
                    key={item.id}
                    isSelected={selectedCategory === item.id}
                    onClick={() => setSelectedCategory(item.id)}>
                    {item.category}
                </Category>
            ))}
        </StyledCategories>
    );
};

export default Categories;

const StyledCategories = styled.div`
    ${font.context}
    color: ${color.gray900};
    height: 36px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 36px 0px 40px;
`;
