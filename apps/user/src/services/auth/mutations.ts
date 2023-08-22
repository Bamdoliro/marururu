import { Storage } from '@/apis/storage/storage';
import { ROUTES, TOKEN } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import { PostJoinAuthReq, PostLoginAuthReq } from '@/types/auth/remote';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { deleteLogoutUser, postJoinUser, postLoginUser, postRequestEmail } from './api';

export const useLoginUserMutation = ({ email, password }: PostLoginAuthReq) => {
    const router = useRouter();
    const { handleError } = useApiError();

    const { mutate: loginUserMutate, ...restMutation } = useMutation({
        mutationFn: () => postLoginUser({ email, password }),
        onSuccess: (res: AxiosResponse) => {
            const { accessToken, refreshToken } = res.data;
            Storage.setItem(TOKEN.ACCESS, accessToken);
            Storage.setItem(TOKEN.REFRESH, refreshToken);
            router.push(ROUTES.MAIN);
        },
        onError: handleError,
    });

    return { loginUserMutate, ...restMutation };
};

export const useJoinUserMutation = ({ email, name, code, password }: PostJoinAuthReq) => {
    const router = useRouter();
    const { handleError } = useApiError();

    const { mutate: joinUserMutate, ...restMutation } = useMutation({
        mutationFn: () => postJoinUser({ email, name, code, password }),
        onSuccess: () => {
            alert('회원가입 성공');
            router.push(ROUTES.LOGIN);
        },
        onError: handleError,
    });

    return { joinUserMutate, ...restMutation };
};

export const useRequestEmailMutation = (email: string) => {
    const { handleError } = useApiError();

    const { mutate: requestEmailMutate, ...restMutation } = useMutation({
        mutationFn: () => postRequestEmail(email),
        onError: handleError,
    });

    return { requestEmailMutate, ...restMutation };
};

export const useLogoutUserMutation = () => {
    const { handleError } = useApiError();

    const { mutate: logoutUserMutate, ...restMutation } = useMutation({
        mutationFn: deleteLogoutUser,
        onSuccess: () => {
            localStorage.clear();
            window.location.href = ROUTES.MAIN;
        },
        onError: handleError,
    });

    return { logoutUserMutate, ...restMutation };
};
