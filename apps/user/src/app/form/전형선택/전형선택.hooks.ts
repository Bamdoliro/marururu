import { useFormStepState } from '@/hooks/state/useFormStepState';
import { ChangeEventHandler } from 'react';
import { useFormState } from '../form.state';
import { useChoiceFormTypeState, useFormTypeState } from './전형선택.state';

const FormType = {
    일반전형: 'REGULAR',
    특별전형: 'SPECIAL',
    마이스터인재전형: 'MEISTER_TALENT',
    특례입학대상자전형: 'SPECIAL_ADMISSION',
    국가기초생활수급권자: 'NATIONAL_BASIC_LIVING',
    차상위계층: 'NEAR_POVERTY',
    국가보훈자녀: 'NATIONAL_VETERANS',
    한부모가정: 'ONE_PARENT',
    북한이탈주민: 'FROM_NORTH_KOREA',
    다문화가정: 'MULTICULTURAL',
    소년소녀가장: 'TEEN_HOUSEHOLDER',
    다자녀가정자녀: 'MULTI_CHILDREN',
    농어촌지역출신자: 'FARMING_AND_FISHING',
    // NONE을 감지하면 alert를 띄웁니다.
    기회균등전형: 'NONE',
    사회다양성전형: 'NONE',
} as const;

export const useInput = () => {
    const { setFormType } = useFormTypeState();
    const { setChoiceFormType } = useChoiceFormTypeState();

    const handleFormTypeDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;

        if (name === '입학전형선택') {
            setChoiceFormType((prev) => ({
                ...prev,
                특별전형선택: '',
                기회균등전형선택: '',
                사회다양성전형선택: '',
                [name]: value,
            }));
        } else if (name === '특별전형선택') {
            setChoiceFormType((prev) => ({
                ...prev,
                기회균등전형선택: '',
                사회다양성전형선택: '',
                [name]: value,
            }));
        } else {
            setChoiceFormType((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

        setFormType(FormType[value as keyof typeof FormType]);
    };

    return { handleFormTypeDataChange };
};

export const useCTAButton = () => {
    const { formType } = useFormTypeState();
    const { setForm } = useFormState();
    const { setFormStep } = useFormStepState();

    const handleNextButtonClick = () => {
        setForm((prev) => ({ ...prev, type: formType }));
        setFormStep('성적입력');
    };

    const handlePreviousButtonClick = () => {
        setFormStep('출신학교및학력');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
