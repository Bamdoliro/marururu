import { useNoticeListQuery } from '@/services/notice/queries';
import { Column } from '@maru/ui';
import NoticeListHeader from '../NoticeListHeader/NoticeListHeader';
import NoticeListItem from '../NoticeListItem/NoticeListItem';

const NoticeList = () => {
    const { data: noticeList } = useNoticeListQuery();

    return (
        <Column gap={12}>
            <NoticeListHeader />
            {noticeList
                ? noticeList
                      .sort((a, b) => a.id - b.id)
                      .map(({ id, title, createdAt }) => (
                          <NoticeListItem id={id} title={title} createdAt={createdAt} />
                      ))
                : null}
        </Column>
    );
};

export default NoticeList;
