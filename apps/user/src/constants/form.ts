import { Subject } from '@/types/form/client';

// 수정된 코드
export const subjectListInitialData: Subject[] = [
    '국어',
    '사회',
    '역사',
    '도덕',
    '수학',
    '과학',
    '기술가정',
    '영어',
    '체육',
    '음악',
    '미술',
    '정보',
].map((currentSubjectName, index) => ({
    id: index,
    subjectName: currentSubjectName,
    achievementLevel21: 'A',
    achievementLevel22: 'A',
    achievementLevel31: 'A',
}));

export const REGULAR_TYPE_DEFAULT_SCORE = 80;
export const SPECIAL_TYPE_DEFAULT_SCORE = 48;

export const DEFAULT_ATTENDANCE_SCORE = 14;
export const MAX_ABSENCE_COUNT = 18;
export const MIN_ATTENDANCE_SCORE = 0;
export const MAX_ATTENDANCE_SCORE = 18;

export const DEFAULT_VOLUNTEER_SCORE = 14;

export const MIN_VOLUNTEER_TIME = 7;
export const MIN_VOLUNTEER_SCORE = 0;
export const MAX_VOLUNTEER_TIME = 15;
export const MAX_VOLUNTEER_SCORE = 18;
