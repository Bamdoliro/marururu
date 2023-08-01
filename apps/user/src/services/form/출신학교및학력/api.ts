import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';

export const getSchoolList = async (name: string) => {
    const { data } = await maru.get(`/school?q=${name}`, authorization());

    return data;
};
