import ListHeader from '@/components/common/ListHeader/ListHeader';
import { Row, Text } from '@maru/ui';

const FaqTableHeader = () => {
    return (
        <ListHeader>
            <Row gap={48}>
                <Text fontType="p2" width={50}>
                    번호
                </Text>
                <Text fontType="p2" width={400}>
                    제목
                </Text>
            </Row>
            <Row gap={184}>
                <Text fontType="p2" width={120}>
                    카테고리
                </Text>
                <Text fontType="p2" width={120}>
                    게시일
                </Text>
            </Row>
        </ListHeader>
    );
};

export default FaqTableHeader;
