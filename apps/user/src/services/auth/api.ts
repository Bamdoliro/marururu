import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { PostJoinAuthReq, PostLoginAuthReq } from '@/types/auth/remote';

export const postLoginUser = async ({ phoneNumber, password }: PostLoginAuthReq) => {
    const { data } = await maru.post('/auth', { phoneNumber, password });
    return data;
};

export const postJoinUser = async ({ phoneNumber, name, code, password }: PostJoinAuthReq) => {
    const { data } = await maru.post('/user', { phoneNumber, name, code, password });
    return data;
};

export const postVerification = async (phoneNumber: string) => {
    const { data } = await maru.post('/user/verification', { phoneNumber });
    return data;
};

export const deleteLogoutUser = async () => {
    await maru.delete('/auth', authorization());
};
