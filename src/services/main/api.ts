import { MOCK_API_BASE_URL } from "@/mocks/handlers";
import axios from "axios";

// 테스트 공지사항 리스트
export const mainNoticeList = async () => {
  const { data } = await axios.get(`${MOCK_API_BASE_URL}/main/notice`);
  return data;
};

// 테스트 Qna 리스트
export const mainQuestionList = async () => {
  const { data } = await axios.get(`${MOCK_API_BASE_URL}/main/question`);
  return data;
};
