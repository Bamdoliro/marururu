import axios from "axios";

// 테스트 공지사항 리스트
export const noticeList = async () => {
  const { data } = await axios.get("/notice/list");
  return data;
};
