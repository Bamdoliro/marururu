import { NoticeList } from '@/types/notice';
import { flex } from '@maru/utils';
import NoticeItem from './NoticeItem/NoticeItem';
import styled from 'styled-components';

interface PropsType {
    noticeList: NoticeList[];
}

const NoticeList = ({ noticeList }: PropsType) => {
    return (
        <StyledNoticeList>
            {noticeList.map((item) => (
                <NoticeItem id={item.id} title={item.title} createdAt={item.createdAt} />
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
