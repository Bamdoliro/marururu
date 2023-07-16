import axios from 'axios';

export const schoolList = async (name: string) => {
    const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SCHOOL_LIST_API!}&SCHUL_NM=${name}`,
    );

    return data?.schoolInfo?.[1].row;
};
