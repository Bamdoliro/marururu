import { useRecoilState, atom } from 'recoil';

const formDataAtomState = atom({
    key: 'form-data',
    default: {
        application: {},
        parent: {},
        education: {},
        grade: {},
        document: {},
        type: 'REGULAR',
    },
});


export const useFormProvider = () => {
    const [form, setForm] = useRecoilState(formDataAtomState);

    return { form, setForm };
};