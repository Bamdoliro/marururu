import { mainNoticeList, scheduleList } from "@/api/main";
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

interface MainNoticeListType {
  id: number;
  title: string;
}

export const mainNoticeListQuery = () => {
  const { data } = useQuery<MainNoticeListType[]>(["mainNoticeList"], () =>
    mainNoticeList()
  );
  return { data: data || [] };
};
