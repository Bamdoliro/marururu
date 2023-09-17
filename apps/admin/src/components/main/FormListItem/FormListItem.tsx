import TableItem from '@/components/common/TableItem/TableItem';
import { KoreanFormType } from '@/constants/main/constants';
import { Form, FormType } from '@/types/main/client';
import { color } from '@maru/theme';
import { Row, Text } from '@maru/ui';

const FormListItem = ({
    id,
    name,
    birthday,
    graduationType,
    school,
    type,
    totalScore,
    hasDocument,
    firstRoundPassed,
    secondRoundPassed,
}: Form) => {
    const getStatusColor = (status: boolean | null) => {
        return typeof status !== 'boolean' ? color.gray600 : status ? color.maruDefault : color.red;
    };

    const getStatusString = (status: boolean | null, trueString: string, falseString: string) => {
        return typeof status !== 'boolean' ? '미정' : status ? trueString : falseString;
    };

    return (
        <TableItem>
            <Row gap={48}>
                <Text fontType="p2" width={60}>
                    {id}
                </Text>
                <Text fontType="p2" width={60}>
                    {name}
                </Text>
                <Text fontType="p2" width={60}>
                    {birthday.replaceAll('-', '').slice(2)}
                </Text>
                <Text fontType="p2" width={160}>
                    {graduationType === 'QUALIFICATION_EXAMINATION' ? '검정고시' : school}
                </Text>
                <Text fontType="p2" width={240}>
                    {KoreanFormType[type as FormType]}
                </Text>
            </Row>
            <Row gap={48}>
                <Text fontType="p2" width={80} color={getStatusColor(hasDocument)}>
                    {getStatusString(hasDocument, '제출', '미제출')}
                </Text>
                <Text fontType="p2" width={80} color={getStatusColor(firstRoundPassed)}>
                    {getStatusString(firstRoundPassed, '합격', '불합격')}
                </Text>
                <Text
                    fontType="p2"
                    width={80}
                    color={typeof totalScore !== 'number' ? color.gray600 : color.gray900}>
                    {typeof totalScore !== 'number' ? '미정' : totalScore}
                </Text>
                <Text fontType="p2" width={80} color={getStatusColor(secondRoundPassed)}>
                    {getStatusString(secondRoundPassed, '합격', '불합격')}
                </Text>
            </Row>
        </TableItem>
    );
};

export default FormListItem;
