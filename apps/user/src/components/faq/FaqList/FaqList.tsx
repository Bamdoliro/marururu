import { useFaqListQuery } from '@/services/faq/queries';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import FaqItem from './FaqItem/FaqItem';

interface Props {
  category: string;
}

const FaqList = ({ category }: Props) => {
  const { data: faqListData } = useFaqListQuery(category);

  return faqListData ? (
    <StyledFaqList>
      {faqListData.map(({ title, content }, index) => (
        <FaqItem key={`faq ${index}`} title={title} content={content} />
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
