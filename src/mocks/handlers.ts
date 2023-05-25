import { rest } from "msw";
import { MainNoticeItemData, NoticeItemData, MainQuestionItemData } from "./dummy";

export const MOCK_API_BASE_URL = "http://localhost:3000";

export const handlers = [
  rest.get(`${MOCK_API_BASE_URL}/main/notice/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MainNoticeItemData));
  }),

  rest.get(`${MOCK_API_BASE_URL}/notice/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(NoticeItemData));
  }),

  rest.get(`${MOCK_API_BASE_URL}/main/question/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MainQuestionItemData));
  }),
];
