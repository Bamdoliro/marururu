import { FORM } from '@/constants/form/data';
import { Form } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const formDataAtomState = atom<Form>({
  key: 'form-data',
  default: {
    applicant: FORM.applicant,
    parent: FORM.parent,
    education: FORM.education,
    grade: FORM.grade,
    document: FORM.document,
    type: FORM.type,
  },
});

export const useFormStore = () => useRecoilState(formDataAtomState);
export const useFormValueStore = () => useRecoilValue(formDataAtomState);
export const useSetFormStore = () => useSetRecoilState(formDataAtomState);
