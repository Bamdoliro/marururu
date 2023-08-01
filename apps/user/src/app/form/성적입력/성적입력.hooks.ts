import { useFormState } from '../form.state';
import { useFormStepState } from '@/hooks/state/useFormStepState';
import {
    useStudentSubjectListState,
    useAttendanceInfoState,
    useVolunteerInfoState,
    useCertificateListInfoState,
} from './성적입력.state';

export const useCTAButton = () => {
    const { subjectList, newSubjectList } = useStudentSubjectListState();
    const { attendanceInfo } = useAttendanceInfoState();
    const { volunteerInfo } = useVolunteerInfoState();
    const { certificateListInfo } = useCertificateListInfoState();

    const { setForm } = useFormState();
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
    };

    const handlePreviousButtonClick = () => {
        setFormStep('전형선택');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
