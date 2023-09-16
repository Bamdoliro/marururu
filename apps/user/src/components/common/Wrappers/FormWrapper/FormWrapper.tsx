'use client';

import { FORM } from '@/constants/form/data';
import { useSaveFormMutation } from '@/services/form/mutations';
import { useSaveFormQuery } from '@/services/form/queries';
import {
    useFormStore,
    useIsSaveFormLoadedStore,
    useSetNewSubjectListStore,
    useSetNew검정고시SubjectListStore,
    useSetSubjectListStore,
    useSet검정고시SubjectListStore,
} from '@/store';
import { StudentSubject } from '@/types/form/client';
import { useInterval } from '@toss/react';
import { ReactNode, useEffect } from 'react';

interface Props {
    children: ReactNode;
}

const sliceMapSubjectList = (
    subjectList: StudentSubject[],
    sliceStart: number,
    sliceEnd?: number,
) => {
    if (sliceEnd) {
        return subjectList.slice(sliceStart, sliceEnd).map((subject, index) => ({
            ...subject,
            id: index,
        }));
    }
    return subjectList.slice(sliceStart).map((subject, index) => ({
        ...subject,
        id: index,
    }));
};

const FormWrapper = ({ children }: Props) => {
    const { data: saveFormData } = useSaveFormQuery();
    const { saveFormMutate } = useSaveFormMutation();
    const [isSaveFormLoaded, setIsSaveFormLoaded] = useIsSaveFormLoadedStore();
    const [form, setForm] = useFormStore();
    const setSubjectList = useSetSubjectListStore();
    const setNewtSubjectList = useSetNewSubjectListStore();
    const set검정고시SubjectList = useSet검정고시SubjectListStore();
    const setNew검정고시SubjectList = useSetNew검정고시SubjectListStore();

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
                if (form.education.graduationYear === 'QUALIFICATION_EXAMINATION') {
                    set검정고시SubjectList(
                        sliceMapSubjectList(saveFormData.grade.subjectList, 0, 5),
                    );
                    setNew검정고시SubjectList(
                        sliceMapSubjectList(saveFormData.grade.subjectList, 5),
                    );
                } else {
                    setSubjectList(sliceMapSubjectList(saveFormData.grade.subjectList, 0, 12));
                    setNewtSubjectList(sliceMapSubjectList(saveFormData.grade.subjectList, 12));
                }
            }
        }
    }, [saveFormData]);

    return <>{children}</>;
};

export default FormWrapper;
