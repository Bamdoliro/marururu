import { rest } from "msw";
import { MOCK_API_BASE_URL } from "./index";

const MAIN_NOTICE_DATA = [
  {
    id: 0,
    title: "테스트입니다",
  },
  {
    id: 1,
    title: "테스트입니다",
  },
  {
    id: 2,
    title: "테스트입니다",
  },
];

const MAIN_QUESTION_DATA = [
  {
    id: 0,
    question: "하루 일과가 마치는 시간이 어떻게 되나요?",
  },
  {
    id: 1,
    question: "하루 일과가 마치는 시간이 어떻게 되나요?",
  },
  {
    id: 2,
    question: "하루 일과가 마치는 시간이 어떻게 되나요?",
  },
];

export const mainHandlers = [
  rest.get(`${MOCK_API_BASE_URL}/main/notice`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MAIN_NOTICE_DATA));
  }),

  rest.get(`${MOCK_API_BASE_URL}/main/question`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MAIN_QUESTION_DATA));
  }),
];
