import { ROUTES } from '@/constants/common/constant';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { deleteFaq } from './api';

export const useFaqDeleteMutation = (id: number) => {
    const router = useRouter();
    const { mutate: deleteFaqMutate, ...restMutation } = useMutation({
        mutationFn: () => deleteFaq(id),
        onSuccess: () => {
            toast('게시물이 삭제되었습니다.', {
                type: 'success',
            });
            router.push(ROUTES.FAQ);
        },
    });

    return { deleteFaqMutate, ...restMutation };
};
