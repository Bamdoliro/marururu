import { rest } from "msw";
import { MAIN_NOTICE_DATA, NOTICE_DATA, MAIN_QUESTION_DATA } from "./dummy";

export const MOCK_API_BASE_URL = "http://localhost:3000";

export const handlers = [
  rest.get(`${MOCK_API_BASE_URL}/main/notice/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MAIN_NOTICE_DATA));
  }),

  rest.get(`${MOCK_API_BASE_URL}/notice/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(NOTICE_DATA));
  }),

  rest.get(`${MOCK_API_BASE_URL}/main/question/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MAIN_QUESTION_DATA));
  }),
];
