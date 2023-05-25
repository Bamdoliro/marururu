import { mainNoticeList, mainQuestionList } from "@/api/main";
import * as KEY from "@/constants/key";
import { useQuery } from "react-query";

/** 메인 공지사항 리스트 */

interface MainNoticeListType {
  id: number;
  title: string;
}

interface MainQuestionListType {
  id: number;
  title: string;
}

export const useMainNoticeListQuery = () => {
  const { data } = useQuery<MainNoticeListType[]>([KEY.MAIN_NOTICE_LIST], () =>
    mainNoticeList()
  );
  return { data: data || [] };
};

export const useMainQuestionListQuery = () => {
  const { data } = useQuery<MainQuestionListType[]>([KEY.MAIN_QUESTION_LIST], () =>
    mainQuestionList()
  );
return { data: data || [] };
};