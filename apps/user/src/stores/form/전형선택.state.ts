import { FormType } from '@/types/form/client';
import { atom, useRecoilState } from 'recoil';

const formTypeAtomState = atom<FormType>({
    key: 'form-type',
    default: 'NONE',
});

const choiceFormTypeAtomState = atom({
    key: 'choice-form-type',
    default: {
        입학전형선택: 'REGULAR',
        특별전형선택: '',
        기회균등전형선택: '',
        사회다양성전형선택: '',
    },
});

export const useFormTypeState = () => {
    const [formType, setFormType] = useRecoilState(formTypeAtomState);

    return { formType, setFormType };
};

export const useChoiceFormTypeState = () => {
    const [choiceFormType, setChoiceFormType] = useRecoilState(choiceFormTypeAtomState);

    return { choiceFormType, setChoiceFormType };
};
