import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { GetUserRes } from '@/types/user/remote';

export const getUser = async () => {
    const { data } = await maru.get<GetUserRes>('/user', authorization());
    return data;
};
