import { useFormState } from '../form.state';
import { useFormStepState } from '@/hooks/state/useFormStepState';
import { useStudentSubjectListState } from './성적입력.state';
import { useSaveFormMutation } from '@/services/form/mutations';

export const useCTAButton = () => {
    const { subjectList, newSubjectList } = useStudentSubjectListState();

    const { form, setForm } = useFormState();
    const { saveFormMutate } = useSaveFormMutation();
    const { setFormStep } = useFormStepState();

    const handleNextButtonClick = () => {
        const studentSubjectList = [
            ...subjectList.map(({ id, ...rest }) => rest),
            ...newSubjectList.map(({ id, ...rest }) => rest),
        ];

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
        saveFormMutate({
            ...form,
            grade: {
                subjectList: studentSubjectList,
                attendance1: form.grade.attendance1,
                attendance2: form.grade.attendance2,
                attendance3: form.grade.attendance3,
                volunteerTime1: form.grade.volunteerTime1,
                volunteerTime2: form.grade.volunteerTime2,
                volunteerTime3: form.grade.volunteerTime3,
                certificateList: form.grade.certificateList,
            },
        });
    };

    const handlePreviousButtonClick = () => {
        setFormStep('전형선택');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
