import { FormStep } from '@/types/form/client';
import { atom, useRecoilState } from 'recoil';

const formStepAtomState = atom<FormStep>({
    key: 'form-step',
    default: '초안작성완료',
});

export const useFormStepState = () => {
    const [formStep, setFormStep] = useRecoilState(formStepAtomState);

    return { formStep, setFormStep };
};
