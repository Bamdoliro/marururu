import { FormStep } from '@/types/form/client';
import { useRecoilState, atom } from 'recoil';

const formStepAtomState = atom<FormStep>({
    key: 'form-step',
    default: '성적입력',
});

export const useFormStepState = () => {
    const [formStep, setFormStep] = useRecoilState(formStepAtomState);

    return { formStep, setFormStep };
};
