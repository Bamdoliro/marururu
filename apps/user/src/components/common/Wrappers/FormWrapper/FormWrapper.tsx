'use client';

import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormStatusQuery, useSaveFormQuery } from '@/services/form/queries';
import {
    useFormStore,
    useIsSaveFormLoadedStore,
    useSetFormStepStore,
    useSetNewSubjectListStore,
    useSetNew검정고시SubjectListStore,
    useSetSubjectListStore,
    useSet검정고시SubjectListStore,
} from '@/store';
import { useInterval } from '@toss/react';
import { ReactNode, useEffect } from 'react';

interface Props {
    children: ReactNode;
}

const FormWrapper = ({ children }: Props) => {
    const { data: saveFormData } = useSaveFormQuery();
    const { saveFormMutate } = useSaveFormMutation();
    const [isSaveFormLoaded, setIsSaveFormLoaded] = useIsSaveFormLoadedStore();
    const [form, setForm] = useFormStore();
    const setSubjectList = useSetSubjectListStore();
    const setNewtSubjectList = useSetNewSubjectListStore();
    const set검정고시SubjectList = useSet검정고시SubjectListStore();
    const setNew검정고시SubjectList = useSetNew검정고시SubjectListStore();
    const setFormStep = useSetFormStepStore();
    const { data: formStatusData } = useFormStatusQuery();

    useEffect(() => {
        if (formStatusData) {
            if (formStatusData.status === 'SUBMITTED') {
                setFormStep('초안제출완료');
            } else if (formStatusData.status === 'FINAL_SUBMITTED') {
                setFormStep('최종제출완료');
            }
        }
    }, [formStatusData]);

    const SAVE_FORM_INTERVAL = 6000 * 10 * 2;

    useInterval(() => {
        saveFormMutate(form);
    }, SAVE_FORM_INTERVAL);

    useEffect(() => {
        if (saveFormData && !isSaveFormLoaded) {
            setIsSaveFormLoaded(true);
            setForm((prev) => ({ ...prev, ...saveFormData }));
            if (saveFormData.grade.subjectList) {
                if (saveFormData.education.graduationType === 'QUALIFICATION_EXAMINATION') {
                    set검정고시SubjectList(
                        saveFormData.grade.subjectList.slice(0, 5).map((subject, index) => ({
                            ...subject,
                            id: index,
                        })),
                    );
                    setNew검정고시SubjectList(
                        saveFormData.grade.subjectList.slice(5).map((subject, index) => ({
                            ...subject,
                            id: index,
                        })),
                    );
                } else {
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
        }
    }, [saveFormData]);

    return <>{children}</>;
};

export default FormWrapper;
