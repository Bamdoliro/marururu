import { formStepAtomState } from '@/store/form';
import { useRecoilState } from 'recoil';

const useFormStep = () => {
    const [formStep, setFormStep] = useRecoilState(formStepAtomState);

    return { formStep, setFormStep };
};

export default useFormStep;
