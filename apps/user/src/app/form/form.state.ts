import { useExportFormQuery, useSaveFormQuery } from '@/services/form/queries';
import { Attendance, EducationInfo, ParentInfo, UserInfo } from '@/types/form/client';
import { Form } from '@/types/form/client';
import { useEffect } from 'react';
import { useRecoilState, atom } from 'recoil';

const formDataAtomState = atom<Form>({
    key: 'form-data',
    default: {
        applicant: null,
        parent: null,
        education: null,
        grade: {
            subjectList: null,
            attendance1: null,
            attendance2: null,
            attendance3: null,
            volunteerTime1: null,
            volunteerTime2: null,
            volunteerTime3: null,
            certificateList: null,
        },
        document: {
            coverLetter: null,
            statementOfPurpose: null,
        },
        type: null,
    },
});

export const useFormState = () => {
    const [form, setForm] = useRecoilState(formDataAtomState);
    const { data: saveFormData } = useSaveFormQuery();

    useEffect(() => {
        if (saveFormData) {
            setForm((prev) => ({ ...prev, ...saveFormData }));
        }
    }, [saveFormData]);

    return { form, setForm };
};
