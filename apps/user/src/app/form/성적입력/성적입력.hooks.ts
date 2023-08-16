import { useSaveFormMutation } from '@/services/form/mutations';
import {
    useFormSetStore,
    useFormStepSetStore,
    useNewSubjectValueStore,
    useSubjectValueStore,
} from '@/store';

export const useCTAButton = () => {
    const setForm = useFormSetStore();
    const setFormStep = useFormStepSetStore();
    const newSubjectList = useNewSubjectValueStore();
    const subjectList = useSubjectValueStore();
    const { saveFormMutate } = useSaveFormMutation();

    const studentSubjectList = [...subjectList, ...newSubjectList].map(({ id, ...rest }) => rest);

    const handleNextButtonClick = () => {
        setForm((prev) => ({
            ...prev,
            grade: {
                subjectList: studentSubjectList,
                attendance1: prev.grade.attendance1,
                attendance2: prev.grade.attendance2,
                attendance3: prev.grade.attendance3,
                volunteerTime1: prev.grade.volunteerTime1,
                volunteerTime2: prev.grade.volunteerTime2,
                volunteerTime3: prev.grade.volunteerTime3,
                certificateList: prev.grade.certificateList,
            },
        }));
        setFormStep('자기소개서');
        saveFormMutate();
    };

    const handlePreviousButtonClick = () => {
        setFormStep('전형선택');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
