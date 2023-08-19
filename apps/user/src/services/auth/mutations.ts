import { Storage } from '@/apis/storage/storage';
import { useMutation } from '@tanstack/react-query';
import { TOKEN, ROUTES } from '@/constants/common/constant';
import { PostJoinAuthReq, PostLoginAuthReq } from '@/types/auth/remote';
import { useRouter } from 'next/navigation';
import { deleteLogoutUser, postJoinUser, postLoginUser, postRequestEmail } from './api';
import { AxiosError, AxiosResponse } from 'axios';

export const useLoginUserMutation = ({ email, password }: PostLoginAuthReq) => {
    const router = useRouter();

    const { mutate: loginUserMutate, ...restMutation } = useMutation({
        mutationFn: () => postLoginUser({ email, password }),
        onSuccess: (res: AxiosResponse) => {
            const { accessToken, refreshToken } = res.data;
            Storage.setItem(TOKEN.ACCESS, accessToken);
            Storage.setItem(TOKEN.REFRESH, refreshToken);
            router.push(ROUTES.MAIN);
        },
        onError: (err: AxiosError) => {
            if (err.code === 'BAD_REQUEST') {
                alert('아이디와 패스워드를 다 입력해주세요.');
                return;
            }
            alert(err.message);
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
        onError: (err: AxiosError) => {
            if (err.code === 'BAD_REQUEST') {
                alert('다시 한번 확인해주세요.');
                return;
            }
            alert(err.message);
        },
    });

    return { joinUserMutate, ...restMutation };
};

export const useRequestEmailMutation = (email: string) => {
    const { mutate: requestEmailMutate, ...restMutation } = useMutation({
        mutationFn: () => postRequestEmail(email),
        onError: (err: AxiosError) => {
            if (err.code === 'BAD_REQUEST') {
                alert('올바른 형식의 이메일이어야 합니다.');
                return;
            }
            alert('메일 전송에 실패했습니다.');
        },
    });

    return { requestEmailMutate, ...restMutation };
};

export const useLogoutUserMutation = () => {
    const { mutate: logoutUserMutate, ...restMutation } = useMutation({
        mutationFn: () => deleteLogoutUser(),
        onSuccess: () => {
            localStorage.clear();
            window.location.href = ROUTES.MAIN;
        },
    });

    return { logoutUserMutate, ...restMutation };
};
