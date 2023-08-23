import ListHeader from '@/components/common/TableHeader/TableHeader';
import ListItem from '@/components/common/TableItem/TableItem';
import { useNoticeListQuery } from '@/services/notice/queries';
import { Column, Row, Text } from '@maru/ui';
import { formatPostedAt } from '@maru/utils';

const NoticeList = () => {
    const { data: noticeList } = useNoticeListQuery();
    console.log(noticeList);

    return (
        <Column gap={12}>
            <ListHeader>
                <Row gap={48}>
                    <Text fontType="p2" width={50}>
                        번호
                    </Text>
                    <Text fontType="p2" width={540}>
                        제목
                    </Text>
                </Row>
                <Text fontType="p2" width={100}>
                    게시일
                </Text>
            </ListHeader>
            {noticeList &&
                noticeList.map((item) => (
                    <ListItem key={item.id}>
                        <Row gap={48}>
                            <Text fontType="p2" width={50}>
                                {item.id}
                            </Text>
                            <Text fontType="p2" width={540}>
                                {item.title}
                            </Text>
                        </Row>
                        <Text fontType="p2" width={100}>
                            {formatPostedAt(item.createdAt)}
                        </Text>
                    </ListItem>
                ))}
        </Column>
    );
};

export default NoticeList;
