import { useFormStepState } from '@/hooks/state/useFormStepState';
import { useSaveFormMutation } from '@/services/form/mutations';
import { ChangeEventHandler } from 'react';
import { useFormState } from '../form.state';

export const useFormSubmitAction = () => {
    const { form, setForm } = useFormState();
    const { setFormStep } = useFormStepState();
    const { saveFormMutate } = useSaveFormMutation();

    const handleFormSubmitButtonClick = () => {
        setForm((prev) => ({
            ...prev,
            document: {
                coverLetter: form.document.coverLetter,
                statementOfPurpose: form.document.statementOfPurpose,
            },
        }));
        setFormStep('초안작성완료');
        saveFormMutate({
            ...form,
            document: {
                coverLetter: form.document.coverLetter,
                statementOfPurpose: form.document.statementOfPurpose,
            },
        });
    };

    return { handleFormSubmitButtonClick };
};

export const useCTAButton = () => {
    const { setFormStep } = useFormStepState();

    const handlePreviousButtonClick = () => {
        setFormStep('성적입력');
    };

    return { handlePreviousButtonClick };
};

export const useInput = () => {
    const { setForm } = useFormState();

    const handle자기소개서DataChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, document: { ...prev.document, [name]: value } }));
    };

    return { handle자기소개서DataChange };
};
