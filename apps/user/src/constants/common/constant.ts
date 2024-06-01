export const KEY = {
  NOTICE_LIST: 'useNoticeList',
  NOTICE_DETAIL: 'useNoticeDetail',
  FAQ_CATEGORY_LIST: 'useFaqCategoryListQuery',
  FAQ_LIST: 'useFaqListQuery',
  FORM_SCHOOL_LIST: 'useFormSchoolListQuery',
  EXPORT_FORM: 'useExportForm',
  SAVE_FORM: 'useSaveForm',
  USER: 'useUser',
  FORM_STATUS: 'useFormStatus',
  FIRST_RESULT: 'useFirstResult',
  FINAL_RESULT: 'useFinalResult',
  FAIR_LIST: 'useFairQuery',
} as const;

export const ROUTES = {
  MAIN: '/',
  FAQ: '/faq',
  FORM: '/form',
  LOGIN: '/login',
  NOTICE: '/notice',
  SIGNUP: '/signup',
  FIRST_RESULT: '/result/first',
  FINAL_RESULT: '/result/final',
  SCORE_SIMULATION: '/score-simulation',
  PRIVACY: '/privacy',
  FAIR: '/fair',
} as const;

export const TOKEN = {
  ACCESS: 'access-token',
  REFRESH: 'refresh-token',
} as const;
