import TableItem from '@/components/common/TableItem/TableItem';
import { Row, Text } from '@maru/ui';
import { formatPostedAt } from '@maru/utils';

interface Props {
    id: number;
    title: string;
    createdAt: string;
}

const NoticeListItem = ({ id, title, createdAt }: Props) => {
    return (
        <TableItem key={id}>
            <Row gap={48}>
                <Text fontType="p2" width={50}>
                    {id}
                </Text>
                <Text fontType="p2" width={540}>
                    {title}
                </Text>
            </Row>
            <Text fontType="p2" width={100}>
                {formatPostedAt(createdAt)}
            </Text>
        </TableItem>
    );
};

export default NoticeListItem;
