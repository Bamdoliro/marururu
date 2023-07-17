import { FormLayout } from '@/layouts';
import GradeCalculator from './GradeCalculator/GradeCalculator';

interface PropsType {
    onPrevious: () => void;
    onNext: () => void;
}

const 성적입력 = ({ onPrevious, onNext }: PropsType) => {
    return (
        <FormLayout title="성적 입력">
            <GradeCalculator />
        </FormLayout>
    );
};

export default 성적입력;
