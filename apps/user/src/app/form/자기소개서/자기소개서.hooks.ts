import { useFormState } from '../form.state';
import { useFormStepState } from '@/hooks/state/useFormStepState';
import { useDebounceInput } from '@maru/hooks';
import { useSubmitDraftFormMutation } from '@/services/form/mutations';

export const useFormSubmitAction = (
    debouncedCoverLetter: string,
    debouncedStatementOfPurpose: string,
) => {
    const { form, setForm } = useFormState();
    const { submitDraftFormMutate } = useSubmitDraftFormMutation(form);

    const handleFormSubmitButtonClick = () => {
        setForm((prev) => ({
            ...prev,
            document: {
                coverLetter: debouncedCoverLetter,
                statementOfPurpose: debouncedStatementOfPurpose,
            },
        }));

        submitDraftFormMutate();
    };

    return { handleFormSubmitButtonClick };
};

export const useInput = () => {
    const {
        value: coverLetter,
        onChange: handleCoverLetterDataChange,
        debouncedValue: debouncedCoverLetter,
    } = useDebounceInput({ initialValue: '' });
    const {
        value: statementOfPurpose,
        onChange: handleStatementOfPurposeDataChange,
        debouncedValue: debouncedStatementOfPurpose,
    } = useDebounceInput({ initialValue: '' });

    return {
        coverLetter,
        debouncedCoverLetter,
        handleCoverLetterDataChange,
        statementOfPurpose,
        debouncedStatementOfPurpose,
        handleStatementOfPurposeDataChange,
    };
};

export const useCTAButton = () => {
    const { setFormStep } = useFormStepState();

    const handlePreviousButtonClick = () => {
        setFormStep('성적입력');
    };

    return { handlePreviousButtonClick };
};
