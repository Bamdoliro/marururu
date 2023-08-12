import { Storage } from '@/apis/storage/storage';
import { useMutation } from '@tanstack/react-query';
import TOKEN from '@/constants/token';
import ROUTES from '@/constants/routes';
import { PostJoinAuthReq, PostLoginAuthReq } from '@/types/auth/remote';
import { axiosErrorTemplate } from '@maru/utils';
import { useRouter } from 'next/navigation';
import { deleteLogoutUser, postJoinUser, postLoginUser, postRequestEmail } from './api';

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

export const useJoinUserMutation = ({ email, name, code, password }: PostJoinAuthReq) => {
    const router = useRouter();

    const { mutate: joinUserMutate, ...restMutation } = useMutation({
        mutationFn: () => postJoinUser({ email, name, code, password }),
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

    return { requestEmailMutate, ...restMutation };
};

export const useLogoutUserMutation = () => {
    const { mutate: logoutUserMutate, ...restMutation } = useMutation({
        mutationFn: deleteLogoutUser,
        onSuccess: () => {
            localStorage.clear();
            window.location.href = ROUTES.MAIN;
        },
        onError: (err) => {
            axiosErrorTemplate(err);
        },
    });

    return { logoutUserMutate, ...restMutation };
};
