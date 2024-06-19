export const KEY = {
  NOTICE_LIST: 'useNoticeList',
  FORM_LIST: 'useFormList',
  SECOND_SCORE_FORMAT: 'useSecondScoreFormat',
  ADMIN: 'useAdmin',
  FAQ_LIST: 'useFaqList',
  ANALYSIS_LIST: 'useAnalysisList',
  FAQ_DETAIL: 'useFaqDetail',
  NOTICE_DETAIL: 'useNoticeDetail',
  EXPORT_EXCEL: 'useExportExcel',
  FORM_DETAIL: 'useFormDetail',
  FORM_URL: 'useFormURL',
  MESSAGE_LIST: 'useMessageList',
  MESSAGE_DETAIL: 'userMessageDetail',
  FAIR_LIST: 'useFairQuery',
};

export const ROUTES = {
  MAIN: '/',
  NOTICE: '/notice',
  NOTICE_POST: '/notice/post',
  NOTICE_EDIT: '/notice/edit',
  FAQ: '/faq',
  FAQ_EDIT: '/faq/edit',
  FAQ_POST: '/faq/post',
  MESSAGE: '/message',
  ANALYSIS: '/analysis',
  LOGIN: '/login',
  FORM: '/form',
  FAIR: '/fair',
  FAIR_POST: '/fair/post',
} as const;

export const TOKEN = {
  ACCESS: 'access-token',
  REFRESH: 'refresh-token',
} as const;
