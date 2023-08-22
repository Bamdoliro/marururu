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

export type FormStatus = '최종 제출됨' | '반려됨';

export interface Form {
    id: number;
    name: string;
    birthday: string;
    graduationType: GraduationType;
    school: string;
    status: FormStatus;
    type: FormType;
}
