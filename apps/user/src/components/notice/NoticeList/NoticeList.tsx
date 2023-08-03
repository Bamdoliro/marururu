import { flex } from '@maru/utils';
import NoticeItem from './NoticeItem/NoticeItem';
import { useNoticeListQuery } from '@/services/notice/queries';
import styled from 'styled-components';

const NoticeList = () => {
    const { data: noticeListData } = useNoticeListQuery();

    if (!noticeListData) return null;

    return (
        <StyledNoticeList>
            {noticeListData.map(({ id, title, createdAt }) => (
                <NoticeItem id={id} title={title} createdAt={createdAt} />
            ))}
        </StyledNoticeList>
    );
};

export default NoticeList;

const StyledNoticeList = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 20px;
    width: 100%;
`;
