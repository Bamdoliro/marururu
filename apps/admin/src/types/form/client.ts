export type FormType =
    | 'REGULAR'
    | 'MEISTER_TALENT'
    | 'NATIONAL_BASIC_LIVING'
    | 'NEAR_POVERTY'
    | 'NATIONAL_VETERANS'
    | 'ONE_PARENT'
    | 'FROM_NORTH_KOREA'
    | 'MULTICULTURAL'
    | 'TEEN_HOUSEHOLDER'
    | 'MULTI_CHILDREN'
    | 'FARMING_AND_FISHING'
    | 'SPECIAL_ADMISSION';

export type GraduationType = 'EXPECTED' | 'GRADUATED' | 'QUALIFICATION_EXAMINATION';

export type FormStatus =
    | '접수됨'
    | '1차 불합격'
    | '불합격'
    | '최종 제출됨'
    | '제출됨'
    | '승인됨'
    | '불참'
    | '1차 합격'
    | '최종 합격'
    | '반려됨';

export interface Form {
    id: number;
    name: string;
    birthday: string;
    graduationType: GraduationType;
    school: string;
    status: FormStatus;
    type: FormType;
    totalScore: number | null;
    hasDocument: boolean;
    firstRoundPassed: boolean | null;
    secondRoundPassed: boolean | null;
}

export type FormListType = '모두 보기' | '검토해야 하는 원서 모아보기';
