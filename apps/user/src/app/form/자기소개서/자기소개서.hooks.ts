import { useFormState } from '../form.state';
import { useFormStepState } from '@/hooks/state/useFormStepState';
import { useDebounceInput } from '@maru/hooks';
import { useSubmitDraftFormMutation } from '@/services/form/mutations';
import { useRouter } from 'next/router';

export const useFormSubmitAction = (
    debouncedCoverLetter: string,
    debouncedStatementOfPurpose: string,
) => {
    const { setForm } = useFormState();
    const { setFormStep } = useFormStepState();

    const handleFormSubmitButtonClick = () => {
        setForm((prev) => ({
            ...prev,
            document: {
                coverLetter: debouncedCoverLetter,
                statementOfPurpose: debouncedStatementOfPurpose,
            },
        }));
        setFormStep('초안작성완료');
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
