import { maru } from '@/apis/instance/instance';

export const getSchoolList = async (name: string) => {
    const { data } = await maru.get(`/school?q=${name}`);

    return data;
};
