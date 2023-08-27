import { Form } from '@/types/main/client';
import { rest } from 'msw';

const MAIN_FORM_DATA: Form[] = [
    {
        id: 0,
        name: '김밤돌',
        birthday: '2005-04-15',
        graduationType: 'EXPECTED',
        school: '비전중학교',
        status: '최종 제출됨',
        type: 'REGULAR',
    },
    {
        id: 1,
        name: '김밤돌',
        birthday: '2005-04-15',
        graduationType: 'QUALIFICATION_EXAMINATION',
        school: '비전중학교',
        status: '반려됨',
        type: 'REGULAR',
    },
    {
        id: 2,
        name: '김밤돌',
        birthday: '2005-04-15',
        graduationType: 'EXPECTED',
        school: '비전중학교',
        status: '최종 제출됨',
        type: 'MULTICULTURAL',
    },
];

export const mainHandlers = [
    rest.get('/form/review', (_, res, ctx) => {
        return res(ctx.status(200), ctx.json({ dataList: MAIN_FORM_DATA }));
    }),
];
