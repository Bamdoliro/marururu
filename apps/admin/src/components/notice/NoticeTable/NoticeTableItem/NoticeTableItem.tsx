import TableItem from '@/components/common/TableItem/TableItem';
import { ROUTES } from '@/constants/common/constant';
import { Row, Text } from '@maru/ui';
import { formatPostedAt } from '@maru/utils';
import Link from 'next/link';

interface Props {
    id: number;
    title: string;
    createdAt: string;
}

const NoticeTableItem = ({ id, title, createdAt }: Props) => {
    return (
        <Link href={`${ROUTES.NOTICE}/${id}`}>
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
        </Link>
    );
};

export default NoticeTableItem;
