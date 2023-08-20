import { FormDocument } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const formDocumentAtomState = atom<FormDocument>({
    key: 'form-document',
    default: {
        fileName: '',
        formUrl: '',
    },
});

export const useFormDocumentStore = () => useRecoilState(formDocumentAtomState);
export const useFormDocumentValueStore = () => useRecoilValue(formDocumentAtomState);
export const useSetFormDocumentStore = () => useSetRecoilState(formDocumentAtomState);
