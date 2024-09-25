import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export const 제출_시작_날짜 = dayjs(process.env.NEXT_PUBLIC_SUBMIT_START_DAY);
export const 제출_마감_날짜 = dayjs(process.env.NEXT_PUBLIC_SUBMIT_END_DAY);
export const 일차_합격_발표 = dayjs(process.env.NEXT_PUBLIC_FIRST_RESULT_DAY);
export const 이차_전형_시작 = dayjs(process.env.NEXT_PUBLIC_SECOND_EXAM_START_DAY);
export const 이차_전형_끝 = dayjs(process.env.NEXT_PUBLIC_SECOND_EXAM_END_DAY);
export const 최종_합격_발표 = dayjs(process.env.NEXT_PUBLIC_FINAL_RESULT_DAY);
export const 입학_등록_기간 = dayjs(
  process.env.NEXT_PUBLIC_ADMISSION_REGISTRATION_START_DAY
);
export const 입학_등록_기간_마감 = dayjs(
  process.env.NEXT_PUBLIC_ADMISSION_REGISTRATION_END_DAY
);

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

export const MAX_VOLUNTEER_TIME_GRADE_1_2 = 5;
export const MAX_VOLUNTEER_TIME_GRADE_3 = 20;
