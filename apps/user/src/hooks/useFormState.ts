import { formDataAtomState } from '@/store/form';
import { useRecoilState } from 'recoil';

const useFormState = () => {
    const [form, setForm] = useRecoilState(formDataAtomState);

    return { form, setForm };
};

export default useFormState;
