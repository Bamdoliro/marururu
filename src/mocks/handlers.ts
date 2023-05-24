import { rest } from "msw";
import { MainNoticeItemData, NoticeItemData, ScheduleItemData } from "./dummy";

export const MOCK_API_BASE_URL = "http://localhost:3000";

export const handlers = [
  rest.get(`${MOCK_API_BASE_URL}/main/notice/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MainNoticeItemData));
  }),
  rest.get(`${MOCK_API_BASE_URL}/main/schedule/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ScheduleItemData));
  }),
  rest.get(`${MOCK_API_BASE_URL}/notice/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(NoticeItemData));
  }),
];
