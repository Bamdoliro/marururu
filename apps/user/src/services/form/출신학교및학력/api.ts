import { maru } from '@/apis/instance/instance';

export const schoolList = async (name: string) => {
    const { data } = await maru.get(`/school?q=${name}`);

    return data;
};
