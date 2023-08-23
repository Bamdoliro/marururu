import { Notice } from '@/types/notice/client';
import { rest } from 'msw';

const NOTICE_DATA: Notice[] = [
    {
        id: 0,
        title: '테스트입니다',
        createdAt: '2022-05-07T10:35:57',
    },
    {
        id: 1,
        title: '테스트입니다',
        createdAt: '2022-05-07T10:35:57',
    },
    {
        id: 2,
        title: '테스트입니다',
        createdAt: '2022-05-07T10:35:57',
    },
];

export const noticeHandlers = [
    rest.get('/notice', (_, res, ctx) => {
        return res(ctx.status(200), ctx.json({ dataList: NOTICE_DATA }));
    }),
];
