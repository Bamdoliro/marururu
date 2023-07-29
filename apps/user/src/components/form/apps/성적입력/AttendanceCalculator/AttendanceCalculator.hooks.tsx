import { ChangeEventHandler, useEffect, useState } from 'react';

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

    const handleAttendance1InfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;

        const updatedAttendance1: Attendance = {
            ...attendanceInfo.attendance1,
            [name]: +value,
        };

        setAttendanceInfo({
            ...attendanceInfo,
            attendance1: updatedAttendance1,
        });
    };

    const handleAttendance2InfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;

        const updatedAttendance2: Attendance = {
            ...attendanceInfo.attendance2,
            [name]: +value,
        };

        setAttendanceInfo({
            ...attendanceInfo,
            attendance2: updatedAttendance2,
        });
    };

    const handleAttendance3InfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;

        const updatedAttendance3: Attendance = {
            ...attendanceInfo.attendance3,
            [name]: +value,
        };

        setAttendanceInfo({
            ...attendanceInfo,
            attendance3: updatedAttendance3,
        });
    };

    useEffect(() => {
        console.log(attendanceInfo);
    }, [attendanceInfo]);

    return {
        handleAttendance1InfoDataChange,
        handleAttendance2InfoDataChange,
        handleAttendance3InfoDataChange,
    };
};

export default useInput;
