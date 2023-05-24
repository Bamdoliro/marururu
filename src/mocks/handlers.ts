import { rest } from "msw";
import { MainNoticeItemData, NoticeItemData, ScheduleItemData } from "./dummy";

const MOCK_API_BASE_URL = "http://localhost:8080/";

export const handlers = [
  rest.get(`${MOCK_API_BASE_URL}/main/notice/list`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: "", body: MainNoticeItemData })
    );
  }),
  rest.get(`${MOCK_API_BASE_URL}/notice/list`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: "", body: NoticeItemData })
    );
  }),
  rest.get(`${MOCK_API_BASE_URL}/schedule/list`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: "", body: ScheduleItemData })
    );
  }),
];
