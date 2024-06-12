import { useNoticeListQuery } from '@/services/notice/queries';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import NoticeItem from './NoticeItem/NoticeItem';

const NoticeList = () => {
  const { data: noticeListData } = useNoticeListQuery();

  return noticeListData ? (
    <StyledNoticeList>
      {noticeListData.map(({ id, title, createdAt }) => (
        <NoticeItem key={id} id={id} title={title} createdAt={createdAt} />
      ))}
    </StyledNoticeList>
  ) : null;
};

export default NoticeList;

const StyledNoticeList = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 20px;
  width: 100%;
`;
