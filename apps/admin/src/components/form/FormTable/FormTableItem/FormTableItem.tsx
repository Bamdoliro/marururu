import TableItem from '@/components/common/TableItem/TableItem';
import { ROUTES } from '@/constants/common/constant';
import { FORM_TYPE } from '@/constants/main/constants';
import { useIsSecondRoundResultEditingValueStore } from '@/store/form/isSecondRoundResultEditing';
import { useSecondRoundResultStore } from '@/store/form/secondRoundResult';
import { Form, FormType, PassStatusType } from '@/types/form/client';
import { color } from '@maru/theme';
import { Dropdown, Row, Text } from '@maru/ui';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const FormTableItem = ({
    id,
    name,
    graduationType,
    school,
    type,
    totalScore,
    hasDocument,
    firstRoundPassed,
    secondRoundPassed,
}: Form) => {
    const router = useRouter();

    const getStatusColor = (status: boolean | null) => {
        return typeof status !== 'boolean' ? color.gray600 : status ? color.maruDefault : color.red;
    };

    const getStatusString = (status: boolean | null, trueString: string, falseString: string) => {
        return typeof status !== 'boolean' ? '미정' : status ? trueString : falseString;
    };

    const isSecondRoundResultEditing = useIsSecondRoundResultEditingValueStore();
    const [secondRoundResult, setSecondRoundResult] = useSecondRoundResultStore();

    const handleSecondPassResultDropdownChange = (value: string) => {
        setSecondRoundResult((prev) => ({
            ...prev,
            [id]: value as PassStatusType,
        }));
    };

    return (
        <DirectButton
            onClick={() => isSecondRoundResultEditing || router.push(`${ROUTES.FORM}/${id}`)}
            style={{
                cursor: isSecondRoundResultEditing ? 'default' : 'pointer',
            }}>
            <TableItem>
                <Row gap={48}>
                    <Text fontType="p2" width={60}>
                        {id}
                    </Text>
                    <Text fontType="p2" width={60}>
                        {name}
                    </Text>
                    <Text fontType="p2" width={160} ellipsis>
                        {graduationType === 'QUALIFICATION_EXAMINATION' ? '검정고시' : school}
                    </Text>
                    <Text fontType="p2" width={240}>
                        {FORM_TYPE[type as FormType]}
                    </Text>
                </Row>
                <Row gap={48} alignItems="center">
                    <Text fontType="p2" width={60} color={getStatusColor(hasDocument)}>
                        {getStatusString(hasDocument, '제출', '미제출')}
                    </Text>
                    <Text fontType="p2" width={60} color={getStatusColor(firstRoundPassed)}>
                        {getStatusString(firstRoundPassed, '합격', '불합격')}
                    </Text>
                    <Text
                        fontType="p2"
                        width={60}
                        color={typeof totalScore !== 'number' ? color.gray600 : color.gray900}>
                        {typeof totalScore !== 'number' ? '미정' : totalScore}
                    </Text>
                    {isSecondRoundResultEditing ? (
                        <Dropdown
                            name="pass"
                            size="SMALL"
                            width={100}
                            value={
                                secondRoundResult[id] ||
                                getStatusString(secondRoundPassed, '합격', '불합격')
                            }
                            data={['합격', '불합격', '미정']}
                            onChange={handleSecondPassResultDropdownChange}
                        />
                    ) : (
                        <Text fontType="p2" width={60} color={getStatusColor(secondRoundPassed)}>
                            {getStatusString(secondRoundPassed, '합격', '불합격')}
                        </Text>
                    )}
                </Row>
            </TableItem>
        </DirectButton>
    );
};

export default FormTableItem;

const DirectButton = styled.button`
    text-align: start;
`;
