import { rest } from 'msw';

const NOTICE_DATA = [
  {
    id: 0,
    title: '테스트입니다',
    date: '2022-05-07T10:35:57',
  },
  {
    id: 1,
    title: '테스트입니다',
    date: '2022-05-07T10:35:57',
  },
  {
    id: 2,
    title: '테스트입니다',
    date: '2022-05-07T10:35:57',
  },
];

export const noticeHandlers = [
  rest.get('/notice/list', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(NOTICE_DATA));
  }),
];
