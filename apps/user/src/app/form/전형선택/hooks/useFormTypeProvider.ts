import { atom, useRecoilState } from 'recoil';

const formTypeAtomState = atom({
    key: 'form-type',
    default: '',
});

export const useFormTypeProvider = () => {
    const [formType, setFormType] = useRecoilState(formTypeAtomState);

    return { formType, setFormType };
};
