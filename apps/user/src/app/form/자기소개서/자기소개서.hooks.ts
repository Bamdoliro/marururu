import { useFormStepState } from '@/hooks/state/useFormStepState';
import { useSubmitDraftFormMutation } from '@/services/form/mutations';
import { ChangeEventHandler } from 'react';
import { useFormState } from '../form.state';
import useDocumentInfoState from './자기소개서.state';

export const useFormSubmitAction = (coverLetter: string, statementOfPurpose: string) => {
    const { form, setForm } = useFormState();
    const submitDraftFormMutation = useSubmitDraftFormMutation(form);

    const handleFormSubmitButtonClick = () => {
        setForm((prev) => ({
            ...prev,
            document: {
                coverLetter,
                statementOfPurpose,
            },
        }));

        console.log(form);
        submitDraftFormMutation.mutate();
    };

    return { handleFormSubmitButtonClick };
};

export const useInput = () => {
    const { setDocumentInfo } = useDocumentInfoState();

    const handleDocumentInfoDataChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        const { name, value } = e.target;
        setDocumentInfo((prev) => ({ ...prev, [name]: value }));
    };

    return {
        handleDocumentInfoDataChange,
    };
};

export const useCTAButton = () => {
    const { setFormStep } = useFormStepState();

    const handlePreviousButtonClick = () => {
        setFormStep('성적입력');
    };

    return { handlePreviousButtonClick };
};
