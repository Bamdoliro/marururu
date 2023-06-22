import axios from "axios";

// 테스트 카테고리 리스트
export const faqCategoryList = async () => {
  const { data } = await axios.get("/faq/category/list");
  return data;
};

// 테스트 faq 리스트
export const faqList = async () => {
  const { data } = await axios.get("/faq/list");
  return data;
};
