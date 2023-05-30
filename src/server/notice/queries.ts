import { noticeList } from "@/api/notice";
import * as KEY from "@/constants/key";
import { useQuery } from "react-query";

// 공지사항 리스트
interface NoticeListType {
  id: number;
  title: string;
  date: string;
}

export const useNoticeListQuery = () => {
  const { data } = useQuery<NoticeListType[]>([KEY.NOTICE_LIST], () =>
    noticeList()
  );
  return { data: data || [] };
};
