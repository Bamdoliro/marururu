import { useNoticeDetailQuery } from '@/services/notice/queries';
import { color, font } from '@maru/theme';
import { Column, Text } from '@maru/ui';
import { convertLink, flex, formatCreatedAt } from '@maru/utils';
import styled from 'styled-components';

interface Props {
    id: number;
}

const NoticeDetailContent = ({ id }: Props) => {
    const { data: noticeDetailData } = useNoticeDetailQuery(id);

    return noticeDetailData ? (
        <StyledNoticeDetailContent>
            <NoticeHeader>
                <Column gap="16px" height="72px">
                    <Text fontType="H3" color={color.gray900}>
                        {noticeDetailData.title}
                    </Text>
                    <Text fontType="p3" color={color.gray750}>
                        {formatCreatedAt(noticeDetailData.createdAt)}
                    </Text>
                </Column>
            </NoticeHeader>
            <Content dangerouslySetInnerHTML={{ __html: convertLink(noticeDetailData.content) }} />
        </StyledNoticeDetailContent>
    ) : null;
};

export default NoticeDetailContent;

const StyledNoticeDetailContent = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 24px;
    padding: 0px 7px;
`;

const NoticeHeader = styled.div`
    ${flex({ justifyContent: 'space-between' })}
    width: 100%;
    height: 80px;
    border-bottom: 1px solid ${color.gray300};
    margin-bottom: 8px;
`;
const Content = styled.div`
    ${font.p2};
    color: ${color.gray900};
`;
