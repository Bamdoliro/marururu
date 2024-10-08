export const KEY = {
  LOGIN_CHECK: 'useLoginCheck',
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
  ADMISSION_TICKET: 'useAdmissionTicket',
  EXPORT_RECIPT: 'useExportReciptQuery',
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
  PRIVACYCOLLECTION: '/privacy-collection',
  TERMUSE: '/term-use',
  CHANGE_PASSWORD: '/change-password',
  FORM_MANAGEMENT: '/form-management',
} as const;

export const TOKEN = {
  ACCESS: 'access-token',
  REFRESH: 'refresh-token',
} as const;
