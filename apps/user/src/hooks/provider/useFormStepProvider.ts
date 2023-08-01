import { useFormProvider } from '@/app/form/form.provider';
import { FormStep } from '@/types/form';
import { useEffect } from 'react';
import { useRecoilState, atom } from 'recoil';

const formStepAtomState = atom<FormStep>({
    key: 'form-step',
    default: '지원자 정보',
});

export const useFormStepProvider = () => {
    const [formStep, setFormStep] = useRecoilState(formStepAtomState);
    const { form } = useFormProvider();

    return { formStep, setFormStep };
};
