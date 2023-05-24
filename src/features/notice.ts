import { noticeList } from "@/api/notice";
import { useQuery } from "react-query";

interface NoticeListType {
  id: number;
  title: string;
  date: string;
}

export const noticeListQuery = () => {
  const { data } = useQuery<NoticeListType[]>(["noticeList"], () =>
    noticeList()
  );
  return { data: data || [] };
};
