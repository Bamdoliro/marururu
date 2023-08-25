import TableItem from '@/components/common/TableItem/TableItem';
import { Row, Text } from '@maru/ui';
import { formatCreatedAt } from '@maru/utils';

interface Props {
    id: number;
    title: string;
    category: string;
    createdAt: string;
}

const FaqTableItem = ({ id, title, category, createdAt }: Props) => {
    return (
        <TableItem>
            <Row gap={48}>
                <Text fontType="p2" width={50} ellipsis>
                    {id}
                </Text>
                <Text fontType="p2" width={400} ellipsis>
                    {title}
                </Text>
            </Row>
            <Row gap={184}>
                <Text fontType="p2" width={120} ellipsis>
                    {category}
                </Text>
                <Text fontType="p2" width={120} ellipsis>
                    {formatCreatedAt(createdAt)}
                </Text>
            </Row>
        </TableItem>
    );
};

export default FaqTableItem;
