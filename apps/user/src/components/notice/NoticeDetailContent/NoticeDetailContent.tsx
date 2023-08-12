import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { Column } from '@maru/ui';
import { useNoticeDetailQuery } from '@/services/notice/queries';
import { formatCreatedAt } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    id: number;
}

const NoticeDetailContent = ({ id }: PropsType) => {
    const { data: noticeDetailData } = useNoticeDetailQuery(id);

    if (!noticeDetailData) return null;

    return (
        <StyledNoticeDetailContent>
            <NoticeHeader>
                <Column gap="16px" height="72px">
                    <Title>{noticeDetailData.title}</Title>
                    <Date>{formatCreatedAt(noticeDetailData.createdAt)}</Date>
                </Column>
            </NoticeHeader>
            <Content>{noticeDetailData.content}</Content>
        </StyledNoticeDetailContent>
    );
};

export default NoticeDetailContent;

const StyledNoticeDetailContent = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 24px;
    padding: 0px 7px;
`;

const Content = styled.pre`
    ${font.p2}
    color: ${color.gray900};
`;

const NoticeHeader = styled.div`
    ${flex({ justifyContent: 'space-between' })}
    width: 100%;
    height: 80px;
    border-bottom: 1px solid ${color.gray300};
    margin-bottom: 8px;
`;

const Title = styled.p`
    ${font.H3}
    color: ${color.gray900};
`;

const Date = styled.p`
    ${font.p3}
    color: ${color.gray750};
`;
