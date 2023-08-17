import { Form, Subject } from '@/types/form/client';

export const FORM: Form = {
    applicant: {
        identificationPictureUri: '',
        name: '',
        phoneNumber: '',
        birthday: '',
        gender: 'MALE',
    },
    parent: {
        name: '',
        phoneNumber: '',
        zoneCode: '',
        address: '',
        detailAddress: '',
    },
    education: {
        graduationType: '',
        graduationYear: '',
        schoolName: '',
        schoolLocation: '',
        schoolCode: '',
        teacherName: '',
        teacherPhoneNumber: '',
        teacherMobilePhoneNumber: '',
    },
    grade: {
        subjectList: [],
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
        volunteerTime1: 0,
        volunteerTime2: 0,
        volunteerTime3: 0,
        certificateList: [],
    },
    document: {
        coverLetter: '',
        statementOfPurpose: '',
    },
    type: 'REGULAR',
};

export const SUBJECT_LIST: Subject[] = [
    '국어',
    '사회',
    '역사',
    '도덕',
    '수학',
    '과학',
    '기술가정',
    '영어',
    '체육',
    '음악',
    '미술',
    '정보',
].map((currentSubjectName, index) => ({
    id: index,
    subjectName: currentSubjectName,
    achievementLevel21: 'A',
    achievementLevel22: 'A',
    achievementLevel31: 'A',
}));
