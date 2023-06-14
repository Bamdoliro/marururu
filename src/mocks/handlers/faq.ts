import { rest } from "msw";

const CATEGORY_DATA = [
  {
    id: 0,
    category: "질문 TOP",
  },
  {
    id: 1,
    category: "입학 과정",
  },
  {
    id: 2,
    category: "학교 생활",
  },
  {
    id: 3,
    category: "관련 서류 제출",
  },
];

const FAQ_DATA = [
  {
    id: 0,
    question: "하루 일과가 마치는 시간이 어떻게 되나요?",
    answer: "1교시부터 11교시까지 입니다.",
  },
  {
    id: 1,
    question: "하루 일과가 마치는 시간이 어떻게 되나요?",
    answer: "1교시부터 11교시까지 입니다.",
  },
  {
    id: 2,
    question: "하루 일과가 마치는 시간이 어떻게 되나요?",
    answer: "1교시부터 11교시까지 입니다.",
  },
];

export const faqHandlers = [
  rest.get("/faq/category/list", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CATEGORY_DATA));
  }),
  rest.get("/faq/list", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(FAQ_DATA));
  }),
];
