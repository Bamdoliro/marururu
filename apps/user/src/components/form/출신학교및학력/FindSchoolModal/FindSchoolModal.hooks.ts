import { Dispatch, SetStateAction, useState } from 'react';

export interface SchoolPropsType {
    name: string;
    location: string;
    code: string;
}

const useSchoolModalHandler = (
    closeModal: () => void,
    setAppliedSchool: Dispatch<SetStateAction<SchoolPropsType>>,
) => {
    const [selectedSchool, setSelectedSchool] = useState({
        name: '',
        location: '',
        code: '',
    });

    const handleSchoolSelect = (school: SchoolPropsType) => {
        setSelectedSchool(school);
    };

    const closeSchoolModal = () => {
        setSelectedSchool({ name: '', location: '', code: '' });
        closeModal();
    };

    const onComplete = () => {
        setAppliedSchool(selectedSchool);
        closeModal();
    };

    return { selectedSchool, handleSchoolSelect, closeSchoolModal, onComplete };
};

export default useSchoolModalHandler;
