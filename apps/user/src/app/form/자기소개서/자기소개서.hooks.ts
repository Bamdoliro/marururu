import { useDebounceInput } from '@maru/hooks';

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
        handleCoverLetterDataChange,
        statementOfPurpose,
        handleStatementOfPurposeDataChange,
    };
};
