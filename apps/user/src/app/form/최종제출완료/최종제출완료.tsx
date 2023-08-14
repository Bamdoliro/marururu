import { CompleteAlaram } from '@/components/form';
import { AppLayout } from '@/layouts';

const 최종제출완료 = () => {
    return (
        <AppLayout header>
            <CompleteAlaram isComplete completeText="원서 최종 제출 완료" />
        </AppLayout>
    );
};

export default 최종제출완료;
