import { postLoginUser, postRequestEmail, postJoinUser } from './api';
import { Storage } from '@/apis/storage/storage';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { axiosErrorTemplate } from '@maru/utils';
import TOKEN from '@/constants/token';
import ROUTES from '@/constants/routes';
import { PostJoinAuthReq, PostLoginAuthReq } from '@/types/auth/remote';

export const useLoginUserMutation = ({ email, password }: PostLoginAuthReq) => {
    const router = useRouter();

    const { mutate: loginUserMutate, ...restMutation } = useMutation({
        mutationFn: () => postLoginUser({ email, password }),
        onSuccess: (res) => {
            const { accessToken, refreshToken } = res.data;
            Storage.setItem(TOKEN.ACCESS, accessToken);
            Storage.setItem(TOKEN.REFRESH, refreshToken);
            router.push(ROUTES.MAIN);
        },
        onError: (err) => {
            axiosErrorTemplate(err);
        },
    });

    return { loginUserMutate, ...restMutation };
};

export const useJoinUserMutation = ({ email, code, password }: PostJoinAuthReq) => {
    const router = useRouter();

    const { mutate: joinUserMutate, ...restMutation } = useMutation({
        mutationFn: () => postJoinUser({ email, code, password }),
        onSuccess: () => {
            alert('회원가입 성공');
            router.push(ROUTES.LOGIN);
        },
        onError: (err) => {
            axiosErrorTemplate(err);
        },
    });

    return { joinUserMutate, ...restMutation };
};

export const useRequestEmailMutation = (email: string) => {
    const { mutate: requestEmailMutate, ...restMutation } = useMutation({
        mutationFn: () => postRequestEmail(email),
        onError: (err) => {
            axiosErrorTemplate(err);
        },
    });

    return { requestEmailMutate, restMutation };
};
