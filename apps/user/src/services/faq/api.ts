import { maru } from '@/apis/instance/instance';
import { GetFaqListRes } from '@/types/faq/remote';
import axios from 'axios';

export const faqCategoryList = async () => {
    const { data } = await axios.get('/faq/category/list');
    return data;
};

export const getFaqList = async (category: string) => {
    const { data } = await maru.get<GetFaqListRes>(`/question?category=${category}`);
    return data;
};
