import { MOCK_API_BASE_URL } from "@/mocks/handlers";
import axios from "axios";

export const noticeList = async () => {
  const { data } = await axios.get(`${MOCK_API_BASE_URL}/notice/list`);
  return data;
};
