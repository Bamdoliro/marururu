import { useSaveFormQuery } from '@/services/form/queries';
import { Form } from '@/types/form/client';
import { ChangeEventHandler, useEffect } from 'react';
import { useRecoilState, atom, useSetRecoilState } from 'recoil';

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

    useEffect(() => {
        console.log(form);
    }, [form]);

    return { form, setForm };
};

export const useFormInput = () => {
    const setForm = useSetRecoilState(formDataAtomState);
    const handleFormDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return { handleFormDataChange };
};
