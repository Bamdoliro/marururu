import { Dispatch, SetStateAction, useState } from 'react';
import { EducationInfo } from '../출신학교및학력.hooks';

interface School {
    name: string;
    location: string;
    code: string;
}

const useSchoolModalHandler = (
    closeModal: () => void,
    setEducationInfo: Dispatch<SetStateAction<EducationInfo>>,
) => {
    const [selectedSchool, setSelectedSchool] = useState({
        name: '',
        location: '',
        code: '',
    });

    const handleSchoolSelect = (school: School) => {
        setSelectedSchool(school);
    };

    const closeSchoolModal = () => {
        setSelectedSchool({ name: '', location: '', code: '' });
        closeModal();
    };

    const onComplete = () => {
        const { name, location, code } = selectedSchool;

        setEducationInfo((prev) => ({
            ...prev,
            schoolName: name,
            schoolLocation: location,
            schoolCode: code,
        }));
        closeModal();
    };

    return { selectedSchool, handleSchoolSelect, closeSchoolModal, onComplete };
};

export default useSchoolModalHandler;
