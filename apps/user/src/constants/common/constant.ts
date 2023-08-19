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