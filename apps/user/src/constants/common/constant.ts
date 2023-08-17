import dayjs from 'dayjs';

// 제출 시작 날짜
export const 제출_시작_날짜 = dayjs('2023-06-25T18:10:20+09:00');
// 제출 마감 날짜
export const 제출_마감_날짜 = dayjs('2023-06-30T17:00:00+09:00');
// 1차 합격 발표
export const 일차_합격_발표 = dayjs('2023-06-18T3:12:00+09:00');
// 최종 합격 발표
export const 최종_합격_발표 = dayjs('2023-11-02T10:00:00+09:00');

export const KEY = {
    NOTICE_LIST: 'useNoticeList',
    NOTICE_DETAIL: 'useNoticeDetail',
    FAQ_CATEGORY_LIST: 'useFaqCategoryListQuery',
    FAQ_LIST: 'useFaqListQuery',
    FORM_SCHOOL_LIST: 'useFormSchoolListQuery',
    EXPORT_FORM: 'useExportForm',
    SAVE_FORM: 'useSaveForm',
    USER: 'useUser',
} as const;

export const ROUTES = {
    MAIN: '/',
    FAQ: '/faq',
    FORM: '/form',
    LOGIN: '/login',
    NOTICE: '/notice',
    SIGNUP: '/signup',
} as const;

export const TOKEN = {
    ACCESS: 'access-token',
    REFRESH: 'refresh-token',
} as const;
