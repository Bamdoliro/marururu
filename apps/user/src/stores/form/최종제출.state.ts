import { FormDocument } from '@/types/form/client';
import { atom, useRecoilState } from 'recoil';

const formDocumentAtomState = atom<FormDocument>({
    key: 'form-document',
    default: {
        fileName: '',
        formUrl: '',
    },
});

export const useFormDocumentState = () => {
    const [formDocument, setFormDocument] = useRecoilState(formDocumentAtomState);

    return { formDocument, setFormDocument };
};
