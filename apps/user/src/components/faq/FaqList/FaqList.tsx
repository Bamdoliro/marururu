import { useState, useEffect } from 'react';
import styled from 'styled-components';
import FaqItem from './FaqItem/FaqItem';
import { flex } from '@maru/utils';
import { useFaqListQuery } from '@/services/faq/queries';

interface Props {
  category: string;
}

const FaqList = ({ category }: Props) => {
  const { data: faqListData } = useFaqListQuery(category);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setOpenIndex(null);
  }, [category]);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return faqListData ? (
    <StyledFaqList>
      {faqListData.map(({ title, content }, index) => (
        <FaqItem
          key={`faq ${index}`}
          title={title}
          content={content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </StyledFaqList>
  ) : null;
};

export default FaqList;

const StyledFaqList = styled.div`
  position: relative;
  ${flex({ flexDirection: 'column' })}
  width: 100%;
`;
