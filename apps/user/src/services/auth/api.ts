import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { PostJoinAuthReq, PostLoginAuthReq } from '@/types/auth/remote';

export const postLoginUser = async ({ email, password }: PostLoginAuthReq) => {
    const { data } = await maru.post('/auth', { email, password });
    return data;
};

export const postJoinUser = async ({ email, name, code, password }: PostJoinAuthReq) => {
    const { data } = await maru.post('/user', { email, name, code, password });
    return data;
};

export const postRequestEmail = async (email: string) => {
    const { data } = await maru.post(`/user/verification?email=${email}`);
    return data;
};

export const deleteLogoutUser = async () => {
    await maru.delete('/auth', authorization());
};
