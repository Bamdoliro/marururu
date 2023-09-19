import { useFormDetailQuery } from '@/services/form/queries';
import { CellInput, Column, Row, Td, Th } from '@maru/ui';

interface Props {
    id: number;
}

const 출결상황 = ({ id }: Props) => {
    const { data: formDetailData } = useFormDetailQuery(id);

    return (
        <div>
            <Column>
                <Row>
                    <Th width={140} height={56} borderTopLeftRadius={12}>
                        학년
                    </Th>
                    <Th width={140} height={56}>
                        미인정 결석
                    </Th>
                    <Th width={140} height={56}>
                        미인정 지각
                    </Th>
                    <Th width={140} height={56}>
                        미인정 조퇴
                    </Th>
                    <Th width={140} height={56} borderTopRightRadius={12}>
                        미인정 결과
                    </Th>
                </Row>
                <Row>
                    <Td option="SECONDARY" width={140} height={56}>
                        1학년
                    </Td>
                    <Td width={140} height={56}>
                        <CellInput
                            value={formDetailData?.grade.attendance1.absenceCount}
                            readOnly
                        />
                    </Td>
                    <Td width={140} height={56}>
                        <CellInput
                            value={formDetailData?.grade.attendance1.latenessCount}
                            readOnly
                        />
                    </Td>
                    <Td width={140} height={56}>
                        <CellInput
                            value={formDetailData?.grade.attendance1.earlyLeaveCount}
                            readOnly
                        />
                    </Td>
                    <Td width={140} height={56}>
                        <CellInput
                            value={formDetailData?.grade.attendance1.classAbsenceCount}
                            readOnly
                        />
                    </Td>
                </Row>
                <Row>
                    <Td option="SECONDARY" width={140} height={56}>
                        2학년
                    </Td>
                    <Td width={140} height={56}>
                        <CellInput
                            value={formDetailData?.grade.attendance2.absenceCount}
                            readOnly
                        />
                    </Td>
                    <Td width={140} height={56}>
                        <CellInput
                            value={formDetailData?.grade.attendance2.latenessCount}
                            readOnly
                        />
                    </Td>
                    <Td width={140} height={56}>
                        <CellInput
                            value={formDetailData?.grade.attendance2.earlyLeaveCount}
                            readOnly
                        />
                    </Td>
                    <Td width={140} height={56}>
                        <CellInput
                            value={formDetailData?.grade.attendance2.classAbsenceCount}
                            readOnly
                        />
                    </Td>
                </Row>
                <Row>
                    <Td option="SECONDARY" width={140} height={56} borderBottomLeftRadius={12}>
                        3학년
                    </Td>
                    <Td width={140} height={56}>
                        <CellInput
                            value={formDetailData?.grade.attendance3.absenceCount}
                            readOnly
                        />
                    </Td>
                    <Td width={140} height={56}>
                        <CellInput
                            value={formDetailData?.grade.attendance3.latenessCount}
                            readOnly
                        />
                    </Td>
                    <Td width={140} height={56}>
                        <CellInput
                            value={formDetailData?.grade.attendance3.earlyLeaveCount}
                            readOnly
                        />
                    </Td>
                    <Td width={140} height={56}>
                        <CellInput
                            value={formDetailData?.grade.attendance3.classAbsenceCount}
                            readOnly
                        />
                    </Td>
                </Row>
            </Column>
        </div>
    );
};

export default 출결상황;
