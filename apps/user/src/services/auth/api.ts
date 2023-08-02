import { maru } from '@/apis/instance/instance';
import { PostLoginAuthReq, PostJoinAuthReq } from '@/types/auth/remote';

export const postLoginUser = async ({ email, password }: PostLoginAuthReq) => {
    const { data } = await maru.post('/auth', { email, password });
    return data;
};

export const postJoinUser = async ({ email, code, password }: PostJoinAuthReq) => {
    const { data } = await maru.post('/user', { email, code, password });
    return data;
};

export const postRequestEmail = async (email: string) => {
    const { data } = await maru.post(`/user/verification?email=${email}`);
    return data;
};
