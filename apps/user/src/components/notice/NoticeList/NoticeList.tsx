import { NoticeList } from '@/types/notice';
import { flex } from '@maru/utils';
import NoticeItem from './NoticeItem/NoticeItem';
import styled from 'styled-components';

interface PropsType {
    noticeListData: NoticeList[];
}

const NoticeList = ({ noticeListData }: PropsType) => {
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
