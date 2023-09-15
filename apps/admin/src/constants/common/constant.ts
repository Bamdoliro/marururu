export const KEY = {
    NOTICE_LIST: 'useNoticeList',
    FORM_LIST: 'useFormList',
    ADMIN: 'useAdmin',
    FAQ_LIST: 'useFaqList',
    FAQ_DETAIL: 'useFaqDetail',
    NOTICE_DETAIL: 'useNoticeDetail',
};

export const ROUTES = {
    MAIN: '/',
    REVIEW: '/review',
    NOTICE: '/notice',
    NOTICE_POST: '/notice/post',
    FAQ: '/faq',
    ANALYSIS: '/analysis',
    LOGIN: '/login',
} as const;

export const TOKEN = {
    ACCESS: 'access-token',
    REFRESH: 'refresh-token',
} as const;
