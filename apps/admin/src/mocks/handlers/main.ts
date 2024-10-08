import { rest } from 'msw';
import type { Form } from '@/types/form/client';

const MAIN_FORM_DATA: Form[] = [
  {
    id: 0,
    examinationNumber: 2000,
    name: '김밤돌',
    birthday: '2005-04-15',
    graduationType: 'EXPECTED',
    school: '비전중학교',
    status: 'FINAL_SUBMITTED',
    type: 'REGULAR',
    isChangedToRegular: false,
    totalScore: null,
    hasDocument: false,
    firstRoundPassed: null,
    secondRoundPassed: null,
  },
  {
    id: 1,
    examinationNumber: 2001,
    name: '김밤돌',
    birthday: '2005-04-15',
    graduationType: 'QUALIFICATION_EXAMINATION',
    school: '비전중학교',
    status: 'REJECTED',
    type: 'REGULAR',
    isChangedToRegular: false,
    totalScore: null,
    hasDocument: false,
    firstRoundPassed: null,
    secondRoundPassed: null,
  },
  {
    id: 2,
    examinationNumber: 2002,
    name: '김밤돌',
    birthday: '2005-04-15',
    graduationType: 'EXPECTED',
    school: '비전중학교',
    status: 'FINAL_SUBMITTED',
    type: 'MULTICULTURAL',
    isChangedToRegular: false,
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
