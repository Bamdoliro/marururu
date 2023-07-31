import useSchoolListQuery from '@/services/form/출신학교및학력/queries';
import { School } from '@/types/form';
import { useDebounceInput } from '@maru/hooks';
import { color, font } from '@maru/theme';
import { Button, Column, Row, SearchInput } from '@maru/ui';
import { useState, Dispatch, SetStateAction } from 'react';
import { EducationInfo } from '../../../app/form/출신학교및학력/출신학교및학력.hooks';
import { IconCheck, IconClose } from '@maru/icon';
import { css, styled } from 'styled-components';

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

    const schoolListQuery = useSchoolListQuery(debouncedSchoolSearchQuery);

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

    return (
        <Background>
            <StyledSchoolSearchModal>
                <Column gap={24}>
                    <Column gap={16}>
                        <Row justifyContent="space-between">
                            <Title>학교 검색</Title>
                            <IconClose cursor="pointer" onClick={closeSchoolModal} />
                        </Row>
                        <SearchInput
                            value={schoolSearchQuery}
                            onChange={handleSchoolSearchQueryDataChange}
                            placeholder="학교 이름을 입력해주세요."
                        />
                    </Column>
                    <SchoolList>
                        {schoolListQuery.data?.dataList.map(({ name, location, code }: School) => (
                            <SchoolItem
                                key={code}
                                selected={selectedSchool.code === code}
                                onClick={() => setSelectedSchool({ name, location, code })}>
                                <SchoolName>
                                    {selectedSchool.code === code && <IconCheck />}
                                    {name}
                                </SchoolName>
                                <SchoolRegion>{location}</SchoolRegion>
                            </SchoolItem>
                        ))}
                    </SchoolList>
                </Column>
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

const SchoolList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 225px;
    overflow: auto;
`;

const SchoolItem = styled.div<{ selected: boolean }>`
    display: flex;
    height: 56px;
    padding: 15px 16px;
    border-radius: 6px;
    background: ${color.gray50};
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    ${({ selected }) =>
        selected &&
        css`
            padding: 15px 15px;
            border: 1px solid ${color.maruDefault};
        `}
`;

const SchoolName = styled.p`
    ${font.p2}
    color: ${color.gray900};
    display: flex;
    align-items: center;
    gap: 4px;
`;

const SchoolRegion = styled.p`
    ${font.caption}
    color: ${color.gray600};
`;
