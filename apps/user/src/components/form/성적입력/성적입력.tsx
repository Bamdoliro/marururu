import { FormLayout } from '@/layouts';

interface PropsType {
    onPrevious: () => void;
    onNext: () => void;
}

const 성적입력 = ({ onPrevious, onNext }: PropsType) => {
    return <FormLayout title="성적 입력">세팅</FormLayout>;
};

export default 성적입력;
