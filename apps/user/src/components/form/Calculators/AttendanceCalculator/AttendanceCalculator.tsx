import { AttendanceInfo } from '@/types/form/client';
import { color, font } from '@maru/theme';
import { Column, NumberInput, Row, Td, Th } from '@maru/ui';
import { flex } from '@maru/utils';
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
        <StyledAttendanceCalculator>
            <Desc>
                *2023.09.30까지의 출결상황을 기재해주세요. 졸업생은 졸업일 기준으로 기재해주세요.
            </Desc>
            <Column>
                <Row>
                    <Th borderTopLeftRadius={12} width="100%" height={56}>
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
                    <Th borderTopRightRadius={12} width="100%" height={56}>
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
                    <Td borderBottomLeftRadius={12} width="100%" height={56} option="SECONDARY">
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
                    <Td borderBottomRightRadius={12} width="100%" height={56}>
                        <NumberInput
                            name="attendance3-classAbsenceCount"
                            onChange={handleAttendanceInfoDataChange}
                        />
                    </Td>
                </Row>
            </Column>
        </StyledAttendanceCalculator>
    );
};

export default AttendanceCalculator;

const StyledAttendanceCalculator = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 16px;
    width: 100%;
`;

const Desc = styled.p`
    color: ${color.red};
    ${font.p3}
`;
