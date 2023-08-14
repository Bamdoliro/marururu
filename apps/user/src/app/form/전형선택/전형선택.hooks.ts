import { useFormStepState } from '@/hooks/state/useFormStepState';
import { useSaveFormMutation } from '@/services/form/mutations';
import { FormType } from '@/types/form/client';
import { PreviewInput } from '@maru/ui';
import { ChangeEventHandler } from 'react';
import { useFormState } from '../form.state';
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
    const { form, setForm } = useFormState();
    const { saveFormMutate } = useSaveFormMutation();
    const { setFormStep } = useFormStepState();

    const handleNextButtonClick = () => {
        setForm((prev) => ({ ...prev, type: formType }));
        setFormStep('성적입력');
        saveFormMutate({ ...form, type: formType });
    };

    const handlePreviousButtonClick = () => {
        setFormStep('출신학교및학력');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
