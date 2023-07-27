export type FormStep =
    | '지원자 정보'
    | '보호자 정보'
    | '출신학교 및 학력'
    | '전형 선택'
    | '성적 입력'
    | '자기소개서';

export interface Subject {
    id: number;
    subjectName: string;
    grade2_1: string;
    grade2_2: string;
    grade3_1: string;
}

export interface Address {
    address: string;
}

export interface School {
    name: string;
    location: string;
    code: string;
}
