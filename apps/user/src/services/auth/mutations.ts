import { Storage } from '@/apis/storage/storage';
import { ROUTES, TOKEN } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import { PostJoinAuthReq, PostLoginAuthReq } from '@/types/auth/remote';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { deleteLogoutUser, postJoinUser, postLoginUser, postVerification } from './api';

export const useLoginUserMutation = ({ phoneNumber, password }: PostLoginAuthReq) => {
    const router = useRouter();
    const { handleError } = useApiError();

    const { mutate: loginUserMutate, ...restMutation } = useMutation({
        mutationFn: () => postLoginUser({ phoneNumber, password }),
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

export const useJoinUserMutation = ({ phoneNumber, name, code, password }: PostJoinAuthReq) => {
    const router = useRouter();
    const { handleError } = useApiError();

    const { mutate: joinUserMutate, ...restMutation } = useMutation({
        mutationFn: () => postJoinUser({ phoneNumber, name, code, password }),
        onSuccess: () => {
            alert('회원가입 성공');
            router.push(ROUTES.LOGIN);
        },
        onError: handleError,
    });

    return { joinUserMutate, ...restMutation };
};

export const useVerificationMutation = (phoneNumber: string) => {
    const { handleError } = useApiError();

    const { mutate: requestVerificationMutate, ...restMutation } = useMutation({
        mutationFn: () => postVerification(phoneNumber),
        onError: handleError,
    });

    return { requestVerificationMutate, ...restMutation };
};

export const useLogoutUserMutation = () => {
    const { mutate: logoutUserMutate, ...restMutation } = useMutation({
        mutationFn: deleteLogoutUser,
        onSuccess: () => {
            localStorage.clear();
            window.location.href = ROUTES.MAIN;
        },
        onError: localStorage.clear,
    });

    return { logoutUserMutate, ...restMutation };
};
