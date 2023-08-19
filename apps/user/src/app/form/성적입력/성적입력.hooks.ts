import { useSaveFormMutation } from '@/services/form/mutations';
import {
    useSetFormStepStore,
    useNewSubjectValueStore,
    useSubjectValueStore,
    useFormStore,
} from '@/store';

export const useCTAButton = () => {
    const [form, setForm] = useFormStore();
    const setFormStep = useSetFormStepStore();
    const newSubjectList = useNewSubjectValueStore();
    const subjectList = useSubjectValueStore();
    const { saveFormMutate } = useSaveFormMutation();

    const studentSubjectList = [...subjectList, ...newSubjectList].map(({ id, ...rest }) => rest);

    const handleNextButtonClick = () => {
        console.log(studentSubjectList);
        setForm((prev) => ({
            ...prev,
            grade: { ...prev.grade, subjectList: studentSubjectList },
        }));
        setFormStep('자기소개서');
        saveFormMutate({ ...form, grade: { ...form.grade, subjectList: studentSubjectList } });
    };

    const handlePreviousButtonClick = () => {
        setFormStep('전형선택');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
