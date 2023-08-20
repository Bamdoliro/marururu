import ListHeader from '@/components/common/ListHeader/ListHeader';
import ListItem from '@/components/common/ListItem/ListItem';
import { Column, Row, Text } from '@maru/ui';
import { formatPostedAt } from '@maru/utils';

const NOTICE_DATA = [
    {
        id: 0,
        title: '입학전형 사용 방법에 대한 공지사항',
        date: '2022-05-07T10:35:57',
    },
    {
        id: 1,
        title: '테스트입니다',
        date: '2022-05-07T10:35:57',
    },
    {
        id: 2,
        title: '테스트입니다',
        date: '2022-05-07T10:35:57',
    },
] as const;

const NoticeList = () => {
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
            {NOTICE_DATA.map((item) => (
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
                        {formatPostedAt(item.date)}
                    </Text>
                </ListItem>
            ))}
        </Column>
    );
};

export default NoticeList;
