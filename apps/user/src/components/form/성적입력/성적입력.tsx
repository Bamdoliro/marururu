import { FormLayout } from '@/layouts';
import GradeCalculator from './GradeCalculator/GradeCalculator';
import GradePreview from './GradePreview/GradePreview';
import AttendanceCalculator from './AttendanceCalculator/AttendanceCalculator';
import VolunteerCalculator from './VolunteerCalculator/VolunteerCalculator';
import CertificateCalculator from './CertificateCalculator/CertificateCalculator';

interface PropsType {
    onPrevious: () => void;
    onNext: () => void;
}

const 성적입력 = ({ onPrevious, onNext }: PropsType) => {
    return (
        <FormLayout title="성적 입력">
            <GradePreview />
            {/* <GradeCalculator /> */}
            {/* <AttendanceCalculator /> */}
            {/* <VolunteerCalculator /> */}
            <CertificateCalculator />
        </FormLayout>
    );
};

export default 성적입력;
