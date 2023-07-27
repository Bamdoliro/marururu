import { School } from '@/types/form';
import { useInput } from '@maru/hooks';
import { Dispatch, SetStateAction, useState } from 'react';

export const useSchoolState = () => {
    const [school, setSchool] = useState<School>({ name: '', location: '', code: '' });

    return { school, setSchool };
};

export const useSchoolSearchWordState = () => {
    const {
        value: schoolSearchWord,
        onChange: handleSchoolSearchWordChange,
        debouncedValue: debouncedSchoolSearchWord,
    } = useInput({ initialValue: '', useDebounce: true });

    return { schoolSearchWord, handleSchoolSearchWordChange, debouncedSchoolSearchWord };
};

export const useCompleteFindSchoolButton = (
    setAppliedSchool: Dispatch<SetStateAction<School>>,
    closeModal: () => void,
) => {
    const { school } = useSchoolState();

    const handleCompleteFindSchoolButtonClick = () => {
        setAppliedSchool(school);
        closeModal();
    };

    return { handleCompleteFindSchoolButtonClick };
};

export const useCTAButton = () => {
    const { setSchool } = useSchoolState();

    const handleSchoolSelectButtonClick = (school: School) => {
        setSchool(school);
    };

    return { handleSchoolSelectButtonClick };
};
