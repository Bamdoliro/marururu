import { noticeList, scheduleList } from "@/api/main";
import { useQuery } from "react-query";

/** 메인 입학 일정 리스트 */
export interface ScheduleListType {
  id: number;
  date: string;
  plan: string;
}

export const scheduleListQuery = () => {
  const { data } = useQuery<ScheduleListType[]>(["scheduleList"], () =>
    scheduleList()
  );
  return { data: data || [] };
};

/** 메인 공지사항 리스트 */

interface NoticeListType {
  id: number;
  title: string;
}

export const noticeListQuery = () => {
  const { data } = useQuery<NoticeListType[]>(["noticeList"], () =>
    noticeList()
  );
  return { data: data || [] };
};
