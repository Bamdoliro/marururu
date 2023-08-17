import { useSaveFormMutation } from '@/services/form/mutations';
import {
    useSetFormStore,
    useSetFormStepStore,
    useNewSubjectValueStore,
    useSubjectValueStore,
} from '@/store';

export const useCTAButton = () => {
    const setForm = useSetFormStore();
    const setFormStep = useSetFormStepStore();
    const newSubjectList = useNewSubjectValueStore();
    const subjectList = useSubjectValueStore();
    const { saveFormMutate } = useSaveFormMutation();

    const studentSubjectList = [...subjectList, ...newSubjectList].map(({ id, ...rest }) => rest);

    const handleNextButtonClick = () => {
        setForm((prev) => ({
            ...prev,
            grade: { ...prev.grade, subjectList: studentSubjectList },
        }));
        setFormStep('자기소개서');
        saveFormMutate();
    };

    const handlePreviousButtonClick = () => {
        setFormStep('전형선택');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
