'use client';

import { FORM } from '@/constants/form/initial';
import { useSaveFormQuery } from '@/services/form/queries';
import {
    useIsSaveFormLoadedStore,
    useSetFormStore,
    useSetNewSubjectStore,
    useSetSubjectStore,
} from '@/store';
import { ReactNode, useEffect } from 'react';

interface PropsType {
    children: ReactNode;
}

const FormWrapper = ({ children }: PropsType) => {
    const { data: saveFormData } = useSaveFormQuery();
    const [isSaveFormLoaded, setIsSaveFormLoaded] = useIsSaveFormLoadedStore();
    const setForm = useSetFormStore();
    const setSubjectList = useSetSubjectStore();
    const setNewtSubjectList = useSetNewSubjectStore();

    useEffect(() => {
        if (saveFormData && !isSaveFormLoaded) {
            console.log('save data: ');
            console.log(saveFormData);
            setIsSaveFormLoaded(true);
            setForm({
                applicant: saveFormData.applicant || FORM.applicant,
                parent: saveFormData.parent || FORM.document,
                education: saveFormData.education || FORM.education,
                grade: saveFormData.grade || FORM.grade,
                document: saveFormData.document || FORM.document,
                type: saveFormData.type || FORM.type,
            });
            if (saveFormData.grade.subjectList) {
                setSubjectList(
                    saveFormData.grade.subjectList.slice(0, 12).map((subject, index) => ({
                        ...subject,
                        id: index,
                    })),
                );
                setNewtSubjectList(
                    saveFormData.grade.subjectList.slice(12).map((subject, index) => ({
                        ...subject,
                        id: index,
                    })),
                );
            }
        }
    }, [saveFormData]);

    return <>{children}</>;
};

export default FormWrapper;
