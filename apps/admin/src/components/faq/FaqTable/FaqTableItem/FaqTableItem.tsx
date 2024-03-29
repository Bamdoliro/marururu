import TableItem from '@/components/common/TableItem/TableItem';
import { ROUTES } from '@/constants/common/constant';
import { FAQ_CATEGORY } from '@/constants/faq/constants';
import type { Category } from '@/types/faq/client';
import { Row, Text } from '@maru/ui';
import { formatPostedAt } from '@maru/utils';
import Link from 'next/link';

interface Props {
  id: number;
  title: string;
  category: Category;
  createdAt: string;
}

const FaqTableItem = ({ id, title, category, createdAt }: Props) => {
  return (
    <Link href={`${ROUTES.FAQ}/${id}`}>
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
            {FAQ_CATEGORY[category]}
          </Text>
          <Text fontType="p2" width={120} ellipsis>
            {formatPostedAt(createdAt)}
          </Text>
        </Row>
      </TableItem>
    </Link>
  );
};

export default FaqTableItem;
