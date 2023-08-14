import { useFormState } from '../form.state';
import { useFormStepState } from '@/hooks/state/useFormStepState';
import {
    useStudentSubjectListState,
    useAttendanceInfoState,
    useVolunteerInfoState,
    useCertificateListInfoState,
} from './성적입력.state';
import { useSaveFormMutation } from '@/services/form/mutations';

export const useCTAButton = () => {
    const { subjectList, newSubjectList } = useStudentSubjectListState();
    const { attendanceInfo } = useAttendanceInfoState();
    const { volunteerInfo } = useVolunteerInfoState();
    const { certificateListInfo } = useCertificateListInfoState();

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
                ...attendanceInfo,
                ...volunteerInfo,
                certificateList: certificateListInfo,
            },
        }));
        setFormStep('자기소개서');
        saveFormMutate({
            ...form,
            grade: {
                subjectList: studentSubjectList,
                ...attendanceInfo,
                ...volunteerInfo,
                certificateList: certificateListInfo,
            },
        });
    };

    const handlePreviousButtonClick = () => {
        setFormStep('전형선택');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
