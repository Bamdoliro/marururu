import { Dispatch, SetStateAction, useState } from 'react';

interface SchoolPropsType {
    schoolName: string;
    schoolRegion: string;
    schoolPhone: string;
    schoolCode: string;
}

const useSchoolModalHandler = (
    closeModal: () => void,
    setAppliedSchool: Dispatch<SetStateAction<SchoolPropsType>>,
) => {
    const [selectedSchool, setSelectedSchool] = useState({
        schoolName: '',
        schoolRegion: '',
        schoolPhone: '',
        schoolCode: '',
    });

    const handleSchoolSelect = (school: SchoolPropsType) => {
        setSelectedSchool(school);
    };

    const closeSchoolModal = () => {
        setSelectedSchool({ schoolName: '', schoolRegion: '', schoolPhone: '', schoolCode: '' });
        closeModal();
    };

    const onComplete = () => {
        setAppliedSchool(selectedSchool);
        closeModal();
    };

    return { selectedSchool, handleSchoolSelect, closeSchoolModal, onComplete };
};

export default useSchoolModalHandler;
