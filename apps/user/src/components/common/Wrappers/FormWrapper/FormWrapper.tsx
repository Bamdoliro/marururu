'use client';

import { FORM } from '@/constants/form/initial';
import { useSaveFormMutation } from '@/services/form/mutations';
import { useSaveFormQuery } from '@/services/form/queries';
import {
    useFormStore,
    useIsSaveFormLoadedStore,
    useSetNewSubjectStore,
    useSetSubjectStore,
} from '@/store';
import { useInterval } from '@toss/react';
import { ReactNode, useEffect } from 'react';

interface PropsType {
    children: ReactNode;
}

const FormWrapper = ({ children }: PropsType) => {
    const { data: saveFormData } = useSaveFormQuery();
    const { saveFormMutate } = useSaveFormMutation();
    const [isSaveFormLoaded, setIsSaveFormLoaded] = useIsSaveFormLoadedStore();
    const [form, setForm] = useFormStore();
    const setSubjectList = useSetSubjectStore();
    const setNewtSubjectList = useSetNewSubjectStore();

    // 2분마다 한번씩 저장
    useInterval(() => {
        saveFormMutate(form);
    }, 6000 * 10 * 2);

    useEffect(() => {
        if (saveFormData && !isSaveFormLoaded) {
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
