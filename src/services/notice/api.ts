import { MOCK_API_BASE_URL } from "@/mocks/handlers";
import axios from "axios";

// 테스트 공지사항 리스트
export const noticeList = async () => {
  const { data } = await axios.get(`${MOCK_API_BASE_URL}/notice`);
  return data;
};
