import { useSaveFormMutation } from '@/services/form/mutations';
import { useSetFormStepStore, useSetFormStore } from '@/store';
import { FormType } from '@/types/form/client';
import { ChangeEventHandler } from 'react';
import { useChoiceFormTypeState, useFormTypeState } from './전형선택.state';

export const useInput = () => {
    const { setFormType } = useFormTypeState();
    const { setChoiceFormType } = useChoiceFormTypeState();

    const handleFormTypeDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;

        setFormType(value as FormType);

        if (name === '입학전형선택') {
            setChoiceFormType((prev) => ({
                ...prev,
                특별전형선택: '',
                기회균등전형선택: '',
                사회다양성전형선택: '',
                [name]: value,
            }));
            return;
        }
        if (name === '특별전형선택') {
            setChoiceFormType((prev) => ({
                ...prev,
                기회균등전형선택: '',
                사회다양성전형선택: '',
                [name]: value,
            }));
            return;
        }
        setChoiceFormType((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return { handleFormTypeDataChange };
};

export const useCTAButton = () => {
    const { formType } = useFormTypeState();
    const setForm = useSetFormStore();
    const setFormStep = useSetFormStepStore();
    const { saveFormMutate } = useSaveFormMutation();

    const handleNextButtonClick = () => {
        setForm((prev) => ({ ...prev, type: formType }));
        setFormStep('성적입력');
        saveFormMutate();
    };

    const handlePreviousButtonClick = () => {
        setFormStep('출신학교및학력');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
