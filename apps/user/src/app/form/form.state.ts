import { Attendance, EducationInfo, ParentInfo, UserInfo } from '@/types/form/client';
import { PostFormReq } from '@/types/form/remote';
import { useRecoilState, atom } from 'recoil';

const formDataAtomState = atom<PostFormReq>({
    key: 'form-data',
    default: {
        applicant: {} as UserInfo,
        parent: {} as ParentInfo,
        education: {} as EducationInfo,
        grade: {
            subjectList: [],
            attendance1: {} as Attendance,
            attendance2: {} as Attendance,
            attendance3: {} as Attendance,
            volunteerTime1: 0,
            volunteerTime2: 0,
            volunteerTime3: 0,
            certificateList: [],
        },
        document: {
            coverLetter: '',
            statementOfPurpose: '',
        },
        type: '',
    },
});

export const useFormState = () => {
    const [form, setForm] = useRecoilState(formDataAtomState);

    return { form, setForm };
};
