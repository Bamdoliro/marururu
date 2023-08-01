import { useFormProvider } from '../form.provider';
import { useFormStepProvider } from '@/hooks/provider/useFormStepProvider';
import {
    useStudentSubjectListProvider,
    useAttendanceInfoProvider,
    useVolunteerInfoProvider,
    useCertificateListInfoProvider,
} from './성적입력.provider';

export const useCTAButton = () => {
    const { subjectList, newSubjectList } = useStudentSubjectListProvider();
    const { attendanceInfo } = useAttendanceInfoProvider();
    const { volunteerInfo } = useVolunteerInfoProvider();
    const { certificateListInfo } = useCertificateListInfoProvider();

    const { setForm } = useFormProvider();
    const { setFormStep } = useFormStepProvider();

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
        setFormStep('전형 선택');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
