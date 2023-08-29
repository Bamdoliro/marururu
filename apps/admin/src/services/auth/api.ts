import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { PostLoginAuthReq } from '@/types/auth/remote';

export const postLoginUser = async ({ phoneNumber, password }: PostLoginAuthReq) => {
    console.log(phoneNumber);
    const { data } = await maru.post('/auth', { phoneNumber, password });
    return data;
};

export const deleteLogoutUser = async () => {
    await maru.delete('/auth', authorization());
};
