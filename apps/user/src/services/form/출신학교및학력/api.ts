import { maru } from '@/apis/instance/instance';

export const getSchoolList = async (school: string) => {
    const { data } = await maru.get(`/school?q=${school}`);

    return data.dataList;
};
