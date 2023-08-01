import { Attendance, EducationInfo, Form, ParentInfo, UserInfo } from '@/types/form';
import { useRecoilState, atom } from 'recoil';

const formDataAtomState = atom<Form>({
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

export const useFormProvider = () => {
    const [form, setForm] = useRecoilState(formDataAtomState);

    return { form, setForm };
};
