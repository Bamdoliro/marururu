import { FormStep } from '@/types/form';
import { atom } from 'recoil';

export const formStepAtomState = atom<FormStep>({
    key: 'form-step',
    default: '지원자 정보',
});

export const formDataAtomState = atom({
    key: 'form-data',
    default: {
        application: {},
        parent: {},
        education: {},
        grade: {},
        document: {},
        type: 'REGULAR',
    },
});
