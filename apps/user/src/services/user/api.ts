import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { GetUserInfoRes } from '@/types/user/remote';

export const getUserInfo = async () => {
    const { data } = await maru.get<GetUserInfoRes>('/user', authorization());
    return data;
};
