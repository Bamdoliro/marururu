import { maru } from '@/apis/instance/instance';
import axios from 'axios';

// 테스트 카테고리 리스트
export const faqCategoryList = async () => {
    const { data } = await axios.get('/faq/category/list');
    return data;
};

export const faqList = async (category: string) => {
    const { data } = await maru.get(`/question?category=${category}`);
    return data;
};
