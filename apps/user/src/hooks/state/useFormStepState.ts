import { FormStep } from '@/types/form';
import { useRecoilState, atom } from 'recoil';

const formStepAtomState = atom<FormStep>({
    key: 'form-step',
    default: '지원자정보',
});

export const useFormStepState = () => {
    const [formStep, setFormStep] = useRecoilState(formStepAtomState);

    return { formStep, setFormStep };
};
