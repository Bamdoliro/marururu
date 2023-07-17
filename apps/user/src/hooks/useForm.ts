import { formStepAtomState, FormStepType } from '@/store/form/form';
import { useRecoilState } from 'recoil';

const useForm = () => {
    const [formStep, setFormStep] = useRecoilState(formStepAtomState);

    const onMoveForm = (step: FormStepType) => setFormStep(step);

    return { formStep, onMoveForm };
};

export default useForm;
