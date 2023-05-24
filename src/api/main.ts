import { MOCK_API_BASE_URL } from "@/mocks/handlers";
import axios from "axios";

export const scheduleList = async () => {
  const { data } = await axios.get(`${MOCK_API_BASE_URL}/main/schedule/list`);
  return data;
};

export const noticeList = async () => {
  const { data } = await axios.get(`${MOCK_API_BASE_URL}/main/notice/list`);
  console.log(data);
  return data;
};
