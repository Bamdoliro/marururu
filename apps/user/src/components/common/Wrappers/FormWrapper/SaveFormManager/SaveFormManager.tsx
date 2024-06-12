import { useSaveFormQuery } from '@/services/form/queries';
import {
  useIsSaveFormLoadedStore,
  useSetNewSubjectListStore,
  useSetNewGEDSubjectListStore,
  useSetSubjectListStore,
  useSetGEDSubjectListStore,
  useSetFormStore,
} from '@/store';
import { updateSlicedSubjectList } from '@/utils';
import { useEffect } from 'react';

const SaveFormManager = () => {
  const { data: saveFormData } = useSaveFormQuery();
  const [isSaveFormLoaded, setIsSaveFormLoaded] = useIsSaveFormLoadedStore();
  const setForm = useSetFormStore();
  const setSubjectList = useSetSubjectListStore();
  const setNewtSubjectList = useSetNewSubjectListStore();
  const setGEDSubjectList = useSetGEDSubjectListStore();
  const setNewGEDSubjectList = useSetNewGEDSubjectListStore();

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

  return null;
};

export default SaveFormManager;
