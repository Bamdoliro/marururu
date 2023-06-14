import { useQuery } from "react-query";
import * as KEY from "@/constants/key";
import { faqCategoryList, faqList } from "./api";

// 카테고리 리스트
interface FaqCategoryListType {
  id: number;
  category: string;
}

export const useFaqCategoryListQuery = () => {
  const { data } = useQuery<FaqCategoryListType[]>(
    [KEY.FAQ_CATEGORY_LIST],
    () => faqCategoryList()
  );
  return { data: data || [] };
};

// FAQ 리스트
interface FaqListType {
  id: number;
  question: string;
  answer: string;
}

export const useFaqListQuery = () => {
  const { data } = useQuery<FaqListType[]>([KEY.FAQ_LIST], () => faqList());
  return { data: data || [] };
};
