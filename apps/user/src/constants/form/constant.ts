import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export const 제출_시작_날짜 = dayjs('2024-07-09T00:00:00+09:00');
export const 제출_마감_날짜 = dayjs('2024-07-09T16:38:00+09:00');
export const 일차_합격_발표 = dayjs('2024-07-09T16:43:00+09:00');
export const 이차_전형_시작 = dayjs('2024-07-09T16:48:30+09:00');
export const 이차_전형_끝 = dayjs('2024-07-09T16:53:00+09:00');
export const 최종_합격_발표 = dayjs('2024-07-09T16:58:00+09:00');
export const 입학_등록_기간 = dayjs('2024-07-10T00:00:00+09:00');
export const 입학_등록_기간_마감 = dayjs('2024-07-10T00:00:00+09:00');

export const REGULAR_TYPE_DEFAULT_SCORE = 80;
export const SPECIAL_TYPE_DEFAULT_SCORE = 48;

export const DEFAULT_ATTENDANCE_SCORE = 14;
export const MAX_ABSENCE_COUNT = 18;
export const MIN_ATTENDANCE_SCORE = 0;
export const MAX_ATTENDANCE_SCORE = 18;

export const DEFAULT_VOLUNTEER_SCORE = 14;

export const MIN_VOLUNTEER_TIME = 15;
export const MIN_VOLUNTEER_SCORE = 0;
export const MAX_VOLUNTEER_TIME = 30;
export const MAX_VOLUNTEER_SCORE = 18;
