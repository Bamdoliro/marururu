import useSchoolListQuery from '@/services/form/출신학교및학력/queries';
import { useInput } from '@maru/hooks';
import { color, font } from '@maru/theme';
import { Button, Column, Row, SearchInput } from '@maru/ui';
import Check from '@maru/ui/Icons/Check';
import Close from '@maru/ui/Icons/Close';
import { Dispatch, SetStateAction, useState } from 'react';
import { css, styled } from 'styled-components';

interface SchoolType {
    name: string;
    location: string;
    code: string;
}

interface PropsType {
    closeModal: () => void;
    setAppliedSchool: Dispatch<SetStateAction<SchoolType>>;
}

const FindSchoolModal = ({ closeModal, setAppliedSchool }: PropsType) => {
    const [selectedSchool, setSelectedSchool] = useState<SchoolType>({
        name: '',
        location: '',
        code: '',
    });
    const { value, onChange, debouncedValue } = useInput({
        initialValue: '',
        useDebounce: true,
    });

    const schoolListQuery = useSchoolListQuery(debouncedValue);

    const handleSchoolSelect = (school: SchoolType) => {
        setSelectedSchool(school);
    };

    const handleCompleteFindSchool = () => {
        setAppliedSchool(selectedSchool);
        closeModal();
    };

    const closeSchoolModal = () => {
        setSelectedSchool({
            name: '',
            location: '',
            code: '',
        });
        closeModal();
    };

    return (
        <Background>
            <StyledSchoolSearchModal>
                <Column gap="24px">
                    <Column gap="16px">
                        <Row justifyContent="space-between">
                            <Title>학교 검색</Title>
                            <Close cursor="pointer" onClick={closeSchoolModal} />
                        </Row>
                        <SearchInput
                            value={value}
                            onChange={onChange}
                            placeholder="학교 이름을 입력해주세요."
                        />
                    </Column>
                    <SchoolList>
                        {schoolListQuery.data?.dataList.map(
                            ({ name, location, code }: SchoolType) => (
                                <SchoolItem
                                    key={code}
                                    selected={selectedSchool.code === code}
                                    onClick={() =>
                                        handleSchoolSelect({
                                            name,
                                            location,
                                            code,
                                        })
                                    }>
                                    <SchoolName>
                                        {selectedSchool.code === code && <Check />}
                                        {name}
                                    </SchoolName>
                                    <SchoolRegion>{location}</SchoolRegion>
                                </SchoolItem>
                            ),
                        )}
                    </SchoolList>
                </Column>
                <Row gap="16px" justifyContent="flex-end">
                    <Button option="SECONDARY" size="SMALL" onClick={closeSchoolModal}>
                        취소
                    </Button>
                    <Button size="SMALL" onClick={handleCompleteFindSchool}>
                        완료
                    </Button>
                </Row>
            </StyledSchoolSearchModal>
        </Background>
    );
};

export default FindSchoolModal;

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
