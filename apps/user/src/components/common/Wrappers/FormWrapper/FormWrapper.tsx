'use client';

import { FORM } from '@/constants/form/data';
import { useSaveFormMutation } from '@/services/form/mutations';
import { useSaveFormQuery } from '@/services/form/queries';
import {
    useFormStore,
    useIsSaveFormLoadedStore,
    useSetNewSubjectListStore,
    useSetSubjectListStore,
    useSubjectListValueStore,
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
    const subjectList = useSubjectListValueStore();
    const setNewtSubjectList = useSetNewSubjectListStore();

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
                    saveFormData.grade.subjectList.slice(12).map((newSubject, index) => ({
                        ...newSubject,
                        id: index,
                    })),
                );
                console.info('저장된 데이터 : ', saveFormData);
                console.info('subjectList : ', subjectList);
            }
        }
    }, [saveFormData]);

    return <>{children}</>;
};

export default FormWrapper;
