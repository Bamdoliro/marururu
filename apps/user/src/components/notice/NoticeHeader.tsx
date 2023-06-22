import { Column } from '@maru/ui';
import { color, font } from '@maru/styles';
import styled from 'styled-components';

interface PropsType {
    title: string;
    date: string;
}

const NoticeHeader = ({ title, date }: PropsType) => {
    return (
        <StyledNoticeHeader>
            <Column gap="16px" height="72px">
                <Title>{title}</Title>
                <Date>{date}</Date>
            </Column>
        </StyledNoticeHeader>
    );
};

export default NoticeHeader;

const StyledNoticeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid ${color.gray300};
    padding-bottom: 8px;
`;

const Title = styled.p`
    ${font.H3}
    color: ${color.gray900};
`;

const Date = styled.p`
    ${font.p3}
    color: ${color.gray750};
`;
