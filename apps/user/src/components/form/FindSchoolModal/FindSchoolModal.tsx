import { useSchoolListQuery } from '@/services/form/출신학교및학력/queries';
import { useDebounceInput } from '@maru/hooks';
import { color, font } from '@maru/theme';
import { Button, Column, Row, SearchInput } from '@maru/ui';
import { useState, Dispatch, SetStateAction } from 'react';
import { EducationInfo } from '@/types/form';
import { IconCheck, IconClose } from '@maru/icon';
import { css, styled } from 'styled-components';
import SchoolList from './SchoolList/SchoolList';

interface PropsType {
    closeModal: () => void;
    setEducationInfo: Dispatch<SetStateAction<EducationInfo>>;
}

const SchoolSearchModal = ({ closeModal, setEducationInfo }: PropsType) => {
    const [selectedSchool, setSelectedSchool] = useState({ name: '', location: '', code: '' });
    const {
        value: schoolSearchQuery,
        onChange: handleSchoolSearchQueryDataChange,
        debouncedValue: debouncedSchoolSearchQuery,
    } = useDebounceInput({ initialValue: '' });

    const { data: schoolListData } = useSchoolListQuery(debouncedSchoolSearchQuery);

    const handleCompleteSchoolSearch = () => {
        const { name, location, code } = selectedSchool;

        setEducationInfo((prev) => ({
            ...prev,
            schoolName: name,
            schoolLocation: location,
            schoolCode: code,
        }));
        closeModal();
    };

    const closeSchoolModal = () => {
        setSelectedSchool({ name: '', location: '', code: '' });
        closeModal();
    };

    if (!schoolListData) return null;

    return (
        <Background>
            <StyledSchoolSearchModal>
                <Column gap={24}>
                    <Column gap={16}>
                        <Row justifyContent="space-between">
                            <Title>학교 검색</Title>
                            <IconClose
                                color={color.gray600}
                                width={24}
                                height={24}
                                cursor="pointer"
                                onClick={closeSchoolModal}
                            />
                        </Row>
                        <SearchInput
                            value={schoolSearchQuery}
                            onChange={handleSchoolSearchQueryDataChange}
                            placeholder="학교 이름을 입력해주세요."
                        />
                    </Column>
                </Column>
                <SchoolList
                    schoolListData={schoolListData}
                    selectedSchool={selectedSchool}
                    setSelectedSchool={setSelectedSchool}
                />
                <Row gap={16} justifyContent="flex-end">
                    <Button option="SECONDARY" size="SMALL" onClick={closeSchoolModal}>
                        취소
                    </Button>
                    <Button size="SMALL" onClick={handleCompleteSchoolSearch}>
                        완료
                    </Button>
                </Row>
            </StyledSchoolSearchModal>
        </Background>
    );
};

export default SchoolSearchModal;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
`;

const StyledSchoolSearchModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 44px;
    width: 600px;
    height: 500px;
    padding: 36px;
    border-radius: 16px;
    background: ${color.white};
    overflow: hidden;
`;

const Title = styled.p`
    ${font.H2}
    color: ${color.gray900};
`;
