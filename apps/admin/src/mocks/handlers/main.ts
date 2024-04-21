import type { Form } from '@/types/form/client';
import { rest } from 'msw';

const MAIN_FORM_DATA: Form[] = [
  {
    id: 0,
    name: '김밤돌',
    birthday: '2005-04-15',
    graduationType: 'EXPECTED',
    school: '비전중학교',
    status: 'FINAL_SUBMITTED',
    type: 'REGULAR',
    totalScore: null,
    hasDocument: false,
    firstRoundPassed: null,
    secondRoundPassed: null,
  },
  {
    id: 1,
    name: '김밤돌',
    birthday: '2005-04-15',
    graduationType: 'QUALIFICATION_EXAMINATION',
    school: '비전중학교',
    status: 'REJECTED',
    type: 'REGULAR',
    totalScore: null,
    hasDocument: false,
    firstRoundPassed: null,
    secondRoundPassed: null,
  },
  {
    id: 2,
    name: '김밤돌',
    birthday: '2005-04-15',
    graduationType: 'EXPECTED',
    school: '비전중학교',
    status: 'FINAL_SUBMITTED',
    type: 'MULTICULTURAL',
    totalScore: null,
    hasDocument: false,
    firstRoundPassed: null,
    secondRoundPassed: null,
  },
];

export const mainHandlers = [
  rest.get('/form/review', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ dataList: MAIN_FORM_DATA }));
  }),
];
