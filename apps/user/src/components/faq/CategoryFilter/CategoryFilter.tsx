import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import Category from './Category/Category';

const FAQ_CATEGORY_LIST = [
  { id: 0, category: '질문 TOP', value: 'TOP_QUESTION' },
  { id: 1, category: '입학 과정', value: 'ADMISSION_PROCESS' },
  { id: 2, category: '학교 생활', value: 'SCHOOL_LIFE' },
  { id: 3, category: '관련 제출 서류', value: 'SUBMIT_DOCUMENT' },
] as const;

interface Props {
  setCategory: Dispatch<SetStateAction<string>>;
}

const CategoryFilter = ({ setCategory }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <StyledCategoryFilter>
      {FAQ_CATEGORY_LIST.map(({ id, value, category }) => (
        <Category
          key={id}
          isSelected={selectedCategory === id}
          onClick={() => {
            setCategory(value);
            setSelectedCategory(id);
          }}
        >
          {category}
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
  margin: 36px 0 40px;
`;
