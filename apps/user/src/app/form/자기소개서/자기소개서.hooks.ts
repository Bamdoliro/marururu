import { useFormProvider } from '../form.provider';
import { useFormStepProvider } from '@/provider/useFormStepProvider';
import { useDebounceInput } from '@maru/hooks';
import { useSubmitDraftFormMutation } from '@/services/form/mutations';

export const useFormSubmitAction = (
    debouncedCoverLetter: string,
    debouncedStatementOfPurpose: string,
) => {
    const { form, setForm } = useFormProvider();
    const submitDraftFormMutation = useSubmitDraftFormMutation(form);

    const handleFormSubmitButtonClick = () => {
        setForm((prev) => ({
            ...prev,
            document: {
                coverLetter: debouncedCoverLetter,
                statementOfPurpose: debouncedStatementOfPurpose,
            },
        }));
        submitDraftFormMutation.mutate();
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
    const { setFormStep } = useFormStepProvider();

    const handlePreviousButtonClick = () => {
        setFormStep('성적 입력');
    };

    return { handlePreviousButtonClick };
};
