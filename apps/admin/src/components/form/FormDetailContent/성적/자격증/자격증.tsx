import { useFormDetailQuery } from '@/services/form/queries';
import { CheckBox, Column, Row, Td, Th } from '@maru/ui';

interface Props {
    id: number;
}

const 자격증 = ({ id }: Props) => {
    const { data: formDetailData } = useFormDetailQuery(id);

    const is기능사included =
        formDetailData?.grade.certificateList.includes('CRAFTSMAN_INFORMATION_PROCESSING') ||
        formDetailData?.grade.certificateList.includes(
            'CRAFTSMAN_INFORMATION_EQUIPMENT_OPERATION',
        ) ||
        formDetailData?.grade.certificateList.includes('CRAFTSMAN_COMPUTER');

    return (
        <Column>
            <Row>
                <Th width={416} height={56} borderTopLeftRadius={12}>
                    자격증명
                </Th>
                <Th width={200} height={56}>
                    시행기관
                </Th>
                <Th width={120} height={56}>
                    반영점수
                </Th>
                <Th width={80} height={56} borderTopRightRadius={12}>
                    선택
                </Th>
            </Row>
            <Row>
                <Td width={416} height={56}>
                    정보처리기능사, 정보기기운용기능사, 전자계산기기능사
                </Td>
                <Td width={200} height={56}>
                    한국산업인력공단
                </Td>
                <Td width={120} height={56}>
                    4점
                </Td>
                <Td width={80} height={56}>
                    <CheckBox checked={is기능사included} />
                </Td>
            </Row>
            <Row>
                <Td width={416} height={168} borderBottomLeftRadius={12}>
                    컴퓨터활용능력
                </Td>
                <Td width={200} height={168}>
                    한국산업인력공단
                </Td>
                <Column>
                    <Row>
                        <Td width={120} height={56}>
                            1급(3점)
                        </Td>
                        <Td width={80} height={56}>
                            <CheckBox
                                checked={formDetailData?.grade.certificateList.includes(
                                    'COMPUTER_SPECIALIST_LEVEL_1',
                                )}
                            />
                        </Td>
                    </Row>
                    <Row>
                        <Td width={120} height={56}>
                            2급(2점)
                        </Td>
                        <Td width={80} height={56}>
                            <CheckBox
                                checked={formDetailData?.grade.certificateList.includes(
                                    'COMPUTER_SPECIALIST_LEVEL_2',
                                )}
                            />
                        </Td>
                    </Row>
                    <Row>
                        <Td width={120} height={56}>
                            3급(1점)
                        </Td>
                        <Td width={80} height={56} borderBottomRightRadius={12}>
                            <CheckBox
                                checked={formDetailData?.grade.certificateList.includes(
                                    'COMPUTER_SPECIALIST_LEVEL_3',
                                )}
                            />
                        </Td>
                    </Row>
                </Column>
            </Row>
        </Column>
    );
};

export default 자격증;
