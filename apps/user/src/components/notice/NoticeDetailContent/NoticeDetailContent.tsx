import { color, font } from '@maru/theme';
import { flex, formatCreatedAt } from '@maru/utils';
import { Column } from '@maru/ui';
import { styled } from 'styled-components';
import { NoticeDetail } from '@/types/notice';

interface PropsType {
    noticeDetail: NoticeDetail;
}

const NoticeDetailContent = ({ noticeDetail }: PropsType) => {
    return (
        <StyledNoticeDetailContent>
            <NoticeHeader>
                <Column gap="16px" height="72px">
                    <Title>{noticeDetail.title}</Title>
                    <Date>{formatCreatedAt(noticeDetail.createdAt)}</Date>
                </Column>
            </NoticeHeader>
            <Content>{noticeDetail.content}</Content>
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
