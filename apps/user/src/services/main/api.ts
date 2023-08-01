import axios from 'axios';

// 테스트 faq 리스트
export const mainQuestionList = async () => {
    const { data } = await axios.get('/main/question/list');
    return data;
};
