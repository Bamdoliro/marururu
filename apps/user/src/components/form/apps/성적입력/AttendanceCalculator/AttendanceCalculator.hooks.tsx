import { ChangeEventHandler, useState } from 'react';

interface Attendance {
    absenceCount: number;
    latenessCount: number;
    earlyLeaveCount: number;
    classAbsenceCount: number;
}

export interface AttendanceInfo {
    attendance1: Attendance;
    attendance2: Attendance;
    attendance3: Attendance;
}

const useInput = () => {
    const [attendanceInfo, setAttendanceInfo] = useState<AttendanceInfo>({
        attendance1: {
            absenceCount: 0,
            latenessCount: 0,
            earlyLeaveCount: 0,
            classAbsenceCount: 0,
        },
        attendance2: {
            absenceCount: 0,
            latenessCount: 0,
            earlyLeaveCount: 0,
            classAbsenceCount: 0,
        },
        attendance3: {
            absenceCount: 0,
            latenessCount: 0,
            earlyLeaveCount: 0,
            classAbsenceCount: 0,
        },
    });

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

    return {
        handleAttendanceInfoDataChange,
    };
};

export default useInput;
