import { loginUser, Login, requestEmail, Join, joinUser } from './api';
import { Storage } from '@/apis/storage/storage';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { axiosErrorTemplate } from '@maru/utils';
import TOKEN from '@/constants/token';
import ROUTES from '@/constants/routes';

/** 로그인 */
export const useLoginUserMutation = ({ email, password }: Login) => {
    const router = useRouter();

    return useMutation(() => loginUser({ email, password }), {
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
};

/** 회원가입 */
export const useJoinUserMutation = ({ email, code, password }: Join) => {
    const router = useRouter();

    return useMutation(() => joinUser({ email, code, password }), {
        onSuccess: () => {
            alert('회원가입 성공');
            router.push(ROUTES.LOGIN);
        },
        onError: (err) => {
            axiosErrorTemplate(err);
        },
    });
};

/** 이메일 인증번호 요청 */
export const useRequestEmailMutation = (email: string) => {
    return useMutation(() => requestEmail(email), {
        onError: (err) => {
            axiosErrorTemplate(err);
        },
    });
};
