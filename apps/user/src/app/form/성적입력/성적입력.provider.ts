import { subjectListInitialData } from '@/constants/form';
import { AttendanceInfo, Subject, VolunteerInfo } from '@/types/form';
import { atom, useRecoilState } from 'recoil';

const subjectListAtomState = atom<Subject[]>({
    key: 'subject-list',
    default: [...subjectListInitialData],
});

const newSubjectListAtomState = atom<Subject[]>({
    key: 'new-subject-list',
    default: [],
});

const attendanceInfoAtomState = atom<AttendanceInfo>({
    key: 'attendance-info',
    default: {
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
    },
});

const volunteerInfoAtomState = atom<VolunteerInfo>({
    key: 'volunteer-info',
    default: {
        volunteerTime1: 0,
        volunteerTime2: 0,
        volunteerTime3: 0,
    },
});

const certificateListInfoAtomState = atom<string[]>({
    key: 'certificate-list-info',
    default: [],
});

export const useStudentSubjectListProvider = () => {
    const [subjectList, setSubjectList] = useRecoilState(subjectListAtomState);
    const [newSubjectList, setNewSubjectList] = useRecoilState(newSubjectListAtomState);

    return { subjectList, setSubjectList, newSubjectList, setNewSubjectList };
};

export const useAttendanceInfoProvider = () => {
    const [attendanceInfo, setAttendanceInfo] = useRecoilState(attendanceInfoAtomState);

    return { attendanceInfo, setAttendanceInfo };
};

export const useVolunteerInfoProvider = () => {
    const [volunteerInfo, setVolunteerInfo] = useRecoilState(volunteerInfoAtomState);

    return { volunteerInfo, setVolunteerInfo };
};

export const useCertificateListInfoProvider = () => {
    const [certificateListInfo, setCertificateListInfo] = useRecoilState(
        certificateListInfoAtomState,
    );

    return { certificateListInfo, setCertificateListInfo };
};
