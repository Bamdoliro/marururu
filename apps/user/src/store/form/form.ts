import { atom } from 'recoil';

export type FormStepType =
    | '지원자 정보'
    | '보호자 정보'
    | '출신학교 및 학력'
    | '전형 선택'
    | '성적 입력'
    | '자기소개서';

export const formStepAtomState = atom<FormStepType>({
    key: 'form-step',
    default: '지원자 정보',
});
