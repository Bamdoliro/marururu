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

    const selectSchool = (school: SchoolPropsType) => {
        setSelectedSchool(school);
    };

    const resetSelectedSchool = () => {
        setSelectedSchool({ schoolName: '', schoolRegion: '', schoolPhone: '', schoolCode: '' });
    };

    const closeSchoolModal = () => {
        resetSelectedSchool();
        closeModal();
    };

    const applySchool = () => {
        setAppliedSchool(selectedSchool);
        closeModal();
    };

    return { selectedSchool, selectSchool, closeSchoolModal, applySchool };
};

export default useSchoolModalHandler;
