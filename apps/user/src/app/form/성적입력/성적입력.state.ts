import { SUBJECT_LIST_DATA } from '@/constants/form';
import { AttendanceInfo, Subject, VolunteerInfo } from '@/types/form/client';
import { atom, useRecoilState } from 'recoil';

const subjectListAtomState = atom<Subject[]>({
    key: 'subject-list',
    default: [...SUBJECT_LIST_DATA],
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

export const useStudentSubjectListState = () => {
    const [subjectList, setSubjectList] = useRecoilState(subjectListAtomState);
    const [newSubjectList, setNewSubjectList] = useRecoilState(newSubjectListAtomState);

    return { subjectList, setSubjectList, newSubjectList, setNewSubjectList };
};

export const useAttendanceInfoState = () => {
    const [attendanceInfo, setAttendanceInfo] = useRecoilState(attendanceInfoAtomState);

    return { attendanceInfo, setAttendanceInfo };
};

export const useVolunteerInfoState = () => {
    const [volunteerInfo, setVolunteerInfo] = useRecoilState(volunteerInfoAtomState);

    return { volunteerInfo, setVolunteerInfo };
};

export const useCertificateListInfoState = () => {
    const [certificateListInfo, setCertificateListInfo] = useRecoilState(
        certificateListInfoAtomState,
    );

    return { certificateListInfo, setCertificateListInfo };
};
