import { color, font } from '@maru/theme';
import { Button, Column, Row, SearchInput } from '@maru/ui';
import { css, styled } from 'styled-components';
import Close from '@maru/ui/Icons/Close';
import { useInput } from '@maru/hooks';
import { useEffect, useState } from 'react';
import useFormSchoolListQuery from '@/services/form/출신학교및학력/queries';
import Check from '@maru/ui/Icons/Check';
import { useQueryClient } from 'react-query';
import KEY from '@/constants/key';

interface PropsType {
    closeModal: () => any;
}

const SchoolSearchModal = ({ closeModal }: PropsType) => {
    const [selectedSchoolCode, setSelectedSchoolCode] = useState('');

    const { value, onChange, debouncedValue } = useInput({ initialValue: '', useDebounce: true });

    const schoolListQuery = useFormSchoolListQuery(debouncedValue);

    const selectSchool = (schoolCode: string) => {
        setSelectedSchoolCode(schoolCode);
    };

    return (
        <Background>
            <StyledSchoolSearchModal>
                <Column gap="24px">
                    <Column gap="16px">
                        <Row justifyContent="space-between">
                            <Title>학교 검색</Title>
                            <Close cursor="pointer" onClick={closeModal} />
                        </Row>
                        <SearchInput
                            value={value}
                            onChange={onChange}
                            placeholder="학교 이름을 입력해주세요."
                        />
                    </Column>
                    <SchoolList>
                        {schoolListQuery.data?.map(
                            (school: {
                                SCHUL_NM: string;
                                ORG_RDNMA: string;
                                SD_SCHUL_CODE: string;
                            }) => (
                                <SchoolItem
                                    key={school.SD_SCHUL_CODE}
                                    onClick={() => selectSchool(school.SD_SCHUL_CODE)}
                                    selected={selectedSchoolCode === school.SD_SCHUL_CODE}>
                                    <SchoolName>
                                        {selectedSchoolCode === school.SD_SCHUL_CODE && <Check />}
                                        {school.SCHUL_NM}
                                    </SchoolName>
                                    <SchoolRegion>{school.ORG_RDNMA}</SchoolRegion>
                                </SchoolItem>
                            ),
                        )}
                    </SchoolList>
                </Column>
                <Row gap="16px" justifyContent="flex-end">
                    <Button option="SECONDARY" size="SMALL" onClick={closeModal}>
                        취소
                    </Button>
                    <Button size="SMALL">완료</Button>
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
    flex-shrink: 0;
    align-self: stretch;

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
