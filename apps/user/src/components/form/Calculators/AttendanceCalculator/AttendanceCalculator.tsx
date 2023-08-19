import { useFormStore } from '@/store';
import { color, font } from '@maru/theme';
import { Column, NumberInput, Row, Td, Th } from '@maru/ui';
import { flex } from '@maru/utils';
import { ChangeEventHandler } from 'react';
import { styled } from 'styled-components';

const AttendanceCalculator = () => {
    const [form, setForm] = useFormStore();

    const handleAttendanceInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        const [attendanceName, countName] = name.split('-');

        setForm((prev) => ({
            ...prev,
            grade: {
                ...prev.grade,
                [attendanceName]: {
                    ...prev.grade.attendance1,
                    [countName]: Number(value),
                },
            },
        }));
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
                            value={form.grade.attendance1.absenceCount}
                            isError={Number(form.grade.attendance1.absenceCount) < 0}
                        />
                    </Td>
                    <Td width="100%" height={56}>
                        <NumberInput
                            name="attendance1-latenessCount"
                            onChange={handleAttendanceInfoDataChange}
                            value={form.grade.attendance1.latenessCount}
                            isError={Number(form.grade.attendance1.latenessCount) < 0}
                        />
                    </Td>
                    <Td width="100%" height={56}>
                        <NumberInput
                            name="attendance1-earlyLeaveCount"
                            onChange={handleAttendanceInfoDataChange}
                            value={form.grade.attendance1.earlyLeaveCount}
                            isError={Number(form.grade.attendance1.earlyLeaveCount) < 0}
                        />
                    </Td>
                    <Td width="100%" height={56}>
                        <NumberInput
                            name="attendance1-classAbsenceCount"
                            onChange={handleAttendanceInfoDataChange}
                            value={form.grade.attendance1.classAbsenceCount}
                            isError={Number(form.grade.attendance1.classAbsenceCount) < 0}
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
                            value={form.grade.attendance2.absenceCount}
                            isError={Number(form.grade.attendance2.absenceCount) < 0}
                        />
                    </Td>
                    <Td width="100%" height={56}>
                        <NumberInput
                            name="attendance2-latenessCount"
                            onChange={handleAttendanceInfoDataChange}
                            value={form.grade.attendance2.latenessCount}
                            isError={Number(form.grade.attendance2.latenessCount) < 0}
                        />
                    </Td>
                    <Td width="100%" height={56}>
                        <NumberInput
                            name="attendance2-earlyLeaveCount"
                            onChange={handleAttendanceInfoDataChange}
                            value={form.grade.attendance2.earlyLeaveCount}
                            isError={Number(form.grade.attendance2.earlyLeaveCount) < 0}
                        />
                    </Td>
                    <Td width="100%" height={56}>
                        <NumberInput
                            name="attendance2-classAbsenceCount"
                            onChange={handleAttendanceInfoDataChange}
                            value={form.grade.attendance2.classAbsenceCount}
                            isError={Number(form.grade.attendance2.classAbsenceCount) < 0}
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
                            value={form.grade.attendance3.absenceCount}
                            isError={Number(form.grade.attendance3.absenceCount) < 0}
                        />
                    </Td>
                    <Td width="100%" height={56}>
                        <NumberInput
                            name="attendance3-latenessCount"
                            onChange={handleAttendanceInfoDataChange}
                            value={form.grade.attendance3.latenessCount}
                            isError={Number(form.grade.attendance3.latenessCount) < 0}
                        />
                    </Td>
                    <Td width="100%" height={56}>
                        <NumberInput
                            name="attendance3-earlyLeaveCount"
                            onChange={handleAttendanceInfoDataChange}
                            value={form.grade.attendance3.earlyLeaveCount}
                            isError={Number(form.grade.attendance3.earlyLeaveCount) < 0}
                        />
                    </Td>
                    <Td borderBottomRightRadius={12} width="100%" height={56}>
                        <NumberInput
                            name="attendance3-classAbsenceCount"
                            onChange={handleAttendanceInfoDataChange}
                            value={form.grade.attendance3.classAbsenceCount}
                            isError={Number(form.grade.attendance3.classAbsenceCount) < 0}
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
