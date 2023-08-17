import { useDebounceInput } from '@maru/hooks';
import { Column, Modal, SearchInput } from '@maru/ui';
import { useState, Suspense } from 'react';
import SchoolList from './SchoolList/SchoolList';
import { Loader } from '@/components/common';
import { useSetFormStore } from '@/store';

interface PropsType {
    isOpen: boolean;
    onClose: () => void;
}

const FindSchoolModal = ({ isOpen, onClose }: PropsType) => {
    const setForm = useSetFormStore();
    const [selectedSchool, setSelectedSchool] = useState({ name: '', location: '', code: '' });
    const {
        value: schoolSearchQuery,
        onChange: handleSchoolSearchQueryDataChange,
        debouncedValue: debouncedSchoolSearchQuery,
    } = useDebounceInput({ initialValue: '' });

    const handleConfirmModalButtonClick = () => {
        const { name, location, code } = selectedSchool;
        setForm((prev) => ({
            ...prev,
            education: {
                ...prev.education,
                schoolName: name,
                schoolLocation: location,
                schoolCode: code,
            },
        }));
        onClose();
    };

    const handleCloseModalButtonClick = () => {
        setSelectedSchool({ name: '', location: '', code: '' });
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            style={{ position: 'relative', overflow: 'hidden' }}
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
            <Suspense fallback={<Loader />}>
                <SchoolList
                    selectedSchool={selectedSchool}
                    setSelectedSchool={setSelectedSchool}
                    debouncedSchoolSearchQuery={debouncedSchoolSearchQuery}
                />
            </Suspense>
        </Modal>
    );
};

export default FindSchoolModal;
