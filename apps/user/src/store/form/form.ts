import { SUBJECT_LIST_DATA } from '@/constants/service/form';
import { Form } from '@/types/form/client';
import { useRecoilState, atom, useSetRecoilState, useRecoilValue } from 'recoil';

const formDataAtomState = atom<Form>({
    key: 'form-data',
    default: {
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
            subjectList: [...SUBJECT_LIST_DATA],
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
    },
});

export const useFormStore = () => useRecoilState(formDataAtomState);
export const useFormValueStore = () => useRecoilValue(formDataAtomState);
export const useFormSetStore = () => useSetRecoilState(formDataAtomState);
