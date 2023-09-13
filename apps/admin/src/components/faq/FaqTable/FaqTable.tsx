import { useFaqListQuery } from '@/services/faq/queries';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import FaqTableHeader from './FaqTableHeader/FaqTableHeader';
import FaqTableItem from './FaqTableItem/FaqTableItem';

const FaqTable = () => {
    const { data: faqList } = useFaqListQuery();
    return (
        <StyledFaqTable>
            <FaqTableHeader />
            {faqList &&
                faqList.map(({ id, title, category, createdAt }) => (
                    <FaqTableItem id={id} title={title} category={category} createdAt={createdAt} />
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
