import { useDebounceInput } from '@maru/hooks';
import { Column, Modal, SearchInput } from '@maru/ui';
import { useState, Dispatch, SetStateAction } from 'react';
import { EducationInfo } from '@/types/form/client';
import SchoolList from './SchoolList/SchoolList';
import useModal from '@/hooks/useModal';

interface PropsType {
    setEducationInfo: Dispatch<SetStateAction<EducationInfo>>;
}

const FindSchoolModal = ({ setEducationInfo }: PropsType) => {
    const { closeModal } = useModal();
    const [selectedSchool, setSelectedSchool] = useState({ name: '', location: '', code: '' });
    const {
        value: schoolSearchQuery,
        onChange: handleSchoolSearchQueryDataChange,
        debouncedValue: debouncedSchoolSearchQuery,
    } = useDebounceInput({ initialValue: '' });

    const handleConfirmModalButtonClick = () => {
        const { name, location, code } = selectedSchool;
        setEducationInfo((prev) => ({
            ...prev,
            schoolName: name,
            schoolLocation: location,
            schoolCode: code,
        }));
        closeModal();
    };

    const handleCloseModalButtonClick = () => {
        setSelectedSchool({ name: '', location: '', code: '' });
        closeModal();
    };

    return (
        <Modal
            style={{ overflow: 'hidden' }}
            width={600}
            height={500}
            title="학교 검색"
            onClose={handleCloseModalButtonClick}
            onConfirm={handleConfirmModalButtonClick}>
            <Column gap={16}>
                <SearchInput
                    value={schoolSearchQuery}
                    onChange={handleSchoolSearchQueryDataChange}
                    placeholder="학교 이름을 입력해주세요."
                />
            </Column>
            <SchoolList
                selectedSchool={selectedSchool}
                setSelectedSchool={setSelectedSchool}
                debouncedSchoolSearchQuery={debouncedSchoolSearchQuery}
            />
        </Modal>
    );
};

export default FindSchoolModal;
