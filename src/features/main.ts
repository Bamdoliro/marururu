import { mainNoticeList, mainScheduleList } from "@/api/main";
import { useQuery } from "react-query";

/** 메인 입학 일정 리스트 */
export interface MainScheduleListType {
  id: number;
  date: string;
  plan: string;
}

export const useMainScheduleListQuery = () => {
  const { data } = useQuery<MainScheduleListType[]>(["scheduleList"], () =>
    mainScheduleList()
  );
  return { data: data || [] };
};

/** 메인 공지사항 리스트 */

interface MainNoticeListType {
  id: number;
  title: string;
}

export const useMainNoticeListQuery = () => {
  const { data } = useQuery<MainNoticeListType[]>(["mainNoticeList"], () =>
    mainNoticeList()
  );
  return { data: data || [] };
};
