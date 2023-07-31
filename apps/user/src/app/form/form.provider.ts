import { FormStep } from '@/types/form';
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

const formStepAtomState = atom<FormStep>({
    key: 'form-step',
    default: '지원자 정보',
});

export const useFormProvider = () => {
    const [form, setForm] = useRecoilState(formDataAtomState);

    return { form, setForm };
};

export const useFormStepProvider = () => {
    const [formStep, setFormStep] = useRecoilState(formStepAtomState);

    return { formStep, setFormStep };
};
