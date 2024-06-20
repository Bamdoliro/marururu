import { useSetFormStore } from '@/store';
import type { School } from '@/types/form/client';
import { useDebounceInput } from '@maru/hooks';
import { Column, Modal, SearchInput } from '@maru/ui';
import { useState } from 'react';
import { Suspense } from '@suspensive/react';
import SchoolList from './SchoolList/SchoolList';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FindSchoolModal = ({ isOpen, onClose }: Props) => {
  const setForm = useSetFormStore();
  const [school, setSchool] = useState<School>({
    name: '',
    location: '',
    address: '',
    code: '',
  });
  const {
    value: schoolName,
    onChange: handleSchoolNameDataChange,
    debouncedValue: debouncedSchoolName,
  } = useDebounceInput({ initialValue: '' });

  const handleConfirmModal = () => {
    const { name, location, code, address } = school;
    setForm((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        schoolName: name,
        schoolLocation: location,
        schoolCode: code,
        schoolAddress: address,
      },
    }));
    onClose();
  };

  const handleCloseModal = () => {
    setSchool({ name: '', location: '', code: '', address: '' });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      style={{ position: 'relative', overflow: 'hidden' }}
      width={600}
      height={500}
      title="학교 검색"
      onClose={handleCloseModal}
      onConfirm={handleConfirmModal}
      mode="complete"
    >
      <Column gap={16}>
        <SearchInput
          value={schoolName}
          onChange={handleSchoolNameDataChange}
          placeholder="학교 이름을 입력해주세요."
        />
      </Column>
      <Suspense.CSROnly>
        <SchoolList
          school={school}
          setSchool={setSchool}
          debouncedSchoolSearchQuery={debouncedSchoolName}
        />
      </Suspense.CSROnly>
    </Modal>
  );
};

export default FindSchoolModal;
