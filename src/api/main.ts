import { MOCK_API_BASE_URL } from "@/mocks/handlers";
import axios from "axios";

export const mainScheduleList = async () => {
  const { data } = await axios.get(`${MOCK_API_BASE_URL}/main/schedule/list`);
  return data;
};

export const mainNoticeList = async () => {
  const { data } = await axios.get(`${MOCK_API_BASE_URL}/main/notice/list`);
  return data;
};
