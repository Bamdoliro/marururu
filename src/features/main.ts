import { scheduleList } from "@/api/main";
import { useQuery } from "react-query";

export interface ScheduleListType {
  id: number;
  date: string;
  plan: string;
}

export const scheduleListQuery = () => {
  const { data } = useQuery<ScheduleListType[]>([], () => scheduleList());
  return { data: data || [] };
};
