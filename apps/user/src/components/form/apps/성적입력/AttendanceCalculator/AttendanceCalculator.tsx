import { NumberInput, Row, Td, Th } from '@maru/ui';
import { styled } from 'styled-components';
import useInput from './AttendanceCalculator.hooks';

const AttendanceCalculator = () => {
    const {
        handleAttendance1InfoDataChange,
        handleAttendance2InfoDataChange,
        handleAttendance3InfoDataChange,
    } = useInput();

    return (
        <Table>
            <Row>
                <Th width="100%" height={56}>
                    학년
                </Th>
                <Th width="100%" height={56}>
                    미인정 결석
                </Th>
                <Th width="100%" height={56}>
                    미인정 지각
                </Th>
                <Th width="100%" height={56}>
                    미인정 조퇴
                </Th>
                <Th width="100%" height={56}>
                    미인정 결과
                </Th>
            </Row>
            <Row>
                <Td width="100%" height={56} option="SECONDARY">
                    1학년
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput name="absenceCount" onChange={handleAttendance1InfoDataChange} />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput name="latenessCount" onChange={handleAttendance1InfoDataChange} />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="earlyLeaveCount"
                        onChange={handleAttendance1InfoDataChange}
                    />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="classAbsenceCount"
                        onChange={handleAttendance1InfoDataChange}
                    />
                </Td>
            </Row>
            <Row>
                <Td width="100%" height={56} option="SECONDARY">
                    2학년
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput name="absenceCount" onChange={handleAttendance2InfoDataChange} />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput name="latenessCount" onChange={handleAttendance2InfoDataChange} />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="earlyLeaveCount"
                        onChange={handleAttendance2InfoDataChange}
                    />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="classAbsenceCount"
                        onChange={handleAttendance2InfoDataChange}
                    />
                </Td>
            </Row>
            <Row>
                <Td width="100%" height={56} option="SECONDARY">
                    3학년
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput name="absenceCount" onChange={handleAttendance3InfoDataChange} />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput name="latenessCount" onChange={handleAttendance3InfoDataChange} />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="earlyLeaveCount"
                        onChange={handleAttendance3InfoDataChange}
                    />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="classAbsenceCount"
                        onChange={handleAttendance3InfoDataChange}
                    />
                </Td>
            </Row>
        </Table>
    );
};

const Table = styled.div`
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
`;

export default AttendanceCalculator;
