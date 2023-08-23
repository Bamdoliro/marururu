import { flex } from '@maru/utils';
import styled from 'styled-components';
import FaqTableHeader from './FaqTableHeader/FaqTableHeader';
import FaqTableItem from './FaqTableItem/FaqTableItem';

const FaqTable = () => {
    return (
        <StyledFaqTable>
            <FaqTableHeader />
            <FaqTableItem
                id={1}
                title="부산소마고 기숙사 왜 이꼬라지 인가요?"
                category="기타"
                createdAt="2022-05-07T10:35:57"
            />
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
