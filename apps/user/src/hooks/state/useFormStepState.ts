import { FormStep } from '@/types/form/client';
import { useRecoilState, atom } from 'recoil';

const formStepAtomState = atom<FormStep>({
    key: 'form-step',
    default: '초안제출완료',
});

export const useFormStepState = () => {
    const [formStep, setFormStep] = useRecoilState(formStepAtomState);

    return { formStep, setFormStep };
};
