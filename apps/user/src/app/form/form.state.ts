import { useSaveFormQuery } from '@/services/form/queries';
import { Attendance, EducationInfo, ParentInfo, UserInfo } from '@/types/form/client';
import { Form } from '@/types/form/client';
import { useEffect } from 'react';
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
        type: 'REGULAR',
    },
});

export const useFormState = () => {
    const [form, setForm] = useRecoilState(formDataAtomState);
    const { data: saveFormData } = useSaveFormQuery();

    useEffect(() => {
        if (saveFormData) {
            setForm((prev) => ({ ...prev, ...saveFormData }));
            console.log(saveFormData);
        }
    }, []);

    return { form, setForm };
};
