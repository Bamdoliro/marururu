import { atom, useRecoilState } from 'recoil';

const formTypeAtomState = atom({
    key: 'form-type',
    default: '',
});

const choiceFormTypeAtomState = atom({
    key: 'choice-form-type',
    default: {
        입학전형선택: '',
        특별전형선택: '',
        기회균등전형선택: '',
        사회다양성전형선택: '',
    },
});

export const useFormTypeProvider = () => {
    const [formType, setFormType] = useRecoilState(formTypeAtomState);

    return { formType, setFormType };
};

export const useChoiceFormTypeProvider = () => {
    const [choiceFormType, setChoiceFormType] = useRecoilState(choiceFormTypeAtomState);

    return { choiceFormType, setChoiceFormType };
};
