import { useFaqListQuery } from '@/services/faq/queries';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import FaqTableHeader from './FaqTableHeader/FaqTableHeader';
import FaqTableItem from './FaqTableItem/FaqTableItem';
import type { FaqCategory } from '@/types/faq/client';

interface Props {
  selectedCategory: FaqCategory;
}

const FaqTable = ({ selectedCategory }: Props) => {
  const { data: faqList } = useFaqListQuery();

  const filteredFaqList =
    selectedCategory === 'BOARD_ALL'
      ? faqList
      : faqList?.filter((item) => item.category === selectedCategory);

  return (
    <StyledFaqTable>
      <FaqTableHeader />
      {filteredFaqList
        ?.sort((a, b) => a.id - b.id)
        .map(({ id, title, category, createdAt }) => (
          <FaqTableItem
            key={id}
            id={id}
            title={title}
            category={category}
            createdAt={createdAt}
          />
        ))}
    </StyledFaqTable>
  );
};

export default FaqTable;

const StyledFaqTable = styled.div`
  ${flex({ flexDirection: 'column' })};
  gap: 12px;
  width: 100%;
  height: 100%;
`;
