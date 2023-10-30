'use client';

import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormStatusQuery, useSaveFormQuery } from '@/services/form/queries';
import {
  useFormStore,
  useIsSaveFormLoadedStore,
  useSetFormStepStore,
  useSetNewSubjectListStore,
  useSetNewGEDSubjectListStore,
  useSetSubjectListStore,
  useSetGEDSubjectListStore,
} from '@/store';
import { updateSlicedSubjectList } from '@/utils';
import { useInterval } from '@toss/react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

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
  const setGEDSubjectList = useSetGEDSubjectListStore();
  const setNewGEDSubjectList = useSetNewGEDSubjectListStore();
  const setFormStep = useSetFormStepStore();
  const { data: formStatusData } = useFormStatusQuery();

  useEffect(() => {
    if (formStatusData) {
      const { status } = formStatusData;
      switch (status) {
        case 'SUBMITTED':
          setFormStep('초안제출완료');
          break;
        case 'FINAL_SUBMITTED':
          setFormStep('최종제출완료');
          break;
        default:
          break;
      }
    }
  }, [formStatusData, setFormStep]);

  // 2분마다 자동 저장
  const SAVE_FORM_INTERVAL_MS = 6000 * 10 * 2;
  useInterval(() => {
    saveFormMutate(form);
  }, SAVE_FORM_INTERVAL_MS);

  useEffect(() => {
    if (saveFormData && !isSaveFormLoaded) {
      const subjectList = saveFormData.grade.subjectList;
      const graduationType = saveFormData.education.graduationType;

      setIsSaveFormLoaded(true);
      setForm((prev) => ({ ...prev, ...saveFormData }));
      if (subjectList) {
        if (graduationType === 'QUALIFICATION_EXAMINATION') {
          setGEDSubjectList(updateSlicedSubjectList(subjectList, 0, 5));
          setNewGEDSubjectList(updateSlicedSubjectList(subjectList, 5));
        } else {
          setSubjectList(updateSlicedSubjectList(subjectList, 0, 12));
          setNewtSubjectList(updateSlicedSubjectList(subjectList, 12));
        }
      }
    }
  }, [
    isSaveFormLoaded,
    saveFormData,
    setForm,
    setIsSaveFormLoaded,
    setNewtSubjectList,
    setNewGEDSubjectList,
    setSubjectList,
    setGEDSubjectList,
  ]);

  return <>{children}</>;
};

export default FormWrapper;
