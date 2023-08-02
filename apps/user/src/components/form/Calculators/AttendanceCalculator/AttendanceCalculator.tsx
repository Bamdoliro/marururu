import { AttendanceInfo } from '@/types/form/client';
import { NumberInput, Row, Td, Th } from '@maru/ui';
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';
import { styled } from 'styled-components';

interface PropsType {
    attendanceInfo: AttendanceInfo;
    setAttendanceInfo: Dispatch<SetStateAction<AttendanceInfo>>;
}

const AttendanceCalculator = ({ attendanceInfo, setAttendanceInfo }: PropsType) => {
    const handleAttendanceInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        const [attendanceName, countName] = name.split('-');

        setAttendanceInfo({
            ...attendanceInfo,
            [attendanceName]: {
                ...attendanceInfo.attendance1,
                [countName]: Number(value),
            },
        });
    };

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
                    <NumberInput
                        name="attendance1-absenceCount"
                        onChange={handleAttendanceInfoDataChange}
                    />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="attendance1-latenessCount"
                        onChange={handleAttendanceInfoDataChange}
                    />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="attendance1-earlyLeaveCount"
                        onChange={handleAttendanceInfoDataChange}
                    />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="attendance1-classAbsenceCount"
                        onChange={handleAttendanceInfoDataChange}
                    />
                </Td>
            </Row>
            <Row>
                <Td width="100%" height={56} option="SECONDARY">
                    2학년
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="attendance2-absenceCount"
                        onChange={handleAttendanceInfoDataChange}
                    />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="attendance2-latenessCount"
                        onChange={handleAttendanceInfoDataChange}
                    />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="attendance2-earlyLeaveCount"
                        onChange={handleAttendanceInfoDataChange}
                    />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="attendance2-classAbsenceCount"
                        onChange={handleAttendanceInfoDataChange}
                    />
                </Td>
            </Row>
            <Row>
                <Td width="100%" height={56} option="SECONDARY">
                    3학년
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="attendance3-absenceCount"
                        onChange={handleAttendanceInfoDataChange}
                    />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="attendance3-latenessCount"
                        onChange={handleAttendanceInfoDataChange}
                    />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="attendance3-earlyLeaveCount"
                        onChange={handleAttendanceInfoDataChange}
                    />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput
                        name="attendance3-classAbsenceCount"
                        onChange={handleAttendanceInfoDataChange}
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
