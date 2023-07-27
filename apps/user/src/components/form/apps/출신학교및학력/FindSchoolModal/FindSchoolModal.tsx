import useSchoolListQuery from '@/services/form/출신학교및학력/queries';
import { School } from '@/types/form';
import { color, font } from '@maru/theme';
import { Button, Column, Row, SearchInput } from '@maru/ui';
import Check from '@maru/ui/Icons/Check';
import Close from '@maru/ui/Icons/Close';
import { Dispatch, SetStateAction } from 'react';
import { css, styled } from 'styled-components';
import {
    useSchoolState,
    useCTAButton,
    useSchoolSearchWordState,
    useCompleteFindSchoolButton,
} from './FindSchoolModal.hooks';

interface PropsType {
    closeModal: () => void;
    setAppliedSchool: Dispatch<SetStateAction<School>>;
}

const FindSchoolModal = ({ closeModal, setAppliedSchool }: PropsType) => {
    const { school, setSchool } = useSchoolState();
    const { schoolSearchWord, handleSchoolSearchWordChange, debouncedSchoolSearchWord } =
        useSchoolSearchWordState();

    const { handleSchoolSelectButtonClick } = useCTAButton();
    const { handleCompleteFindSchoolButtonClick } = useCompleteFindSchoolButton(
        setAppliedSchool,
        closeModal,
    );

    const closeSchoolModal = () => {
        setSchool({ name: '', location: '', code: '' });
        closeModal();
    };

    const schoolListQuery = useSchoolListQuery(debouncedSchoolSearchWord);

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
                            value={schoolSearchWord}
                            onChange={handleSchoolSearchWordChange}
                            placeholder="학교 이름을 입력해주세요."
                        />
                    </Column>
                    <SchoolList>
                        {schoolListQuery.data?.dataList.map((item: School) => (
                            <SchoolItem
                                key={item.code}
                                selected={school.code === item.code}
                                onClick={() => handleSchoolSelectButtonClick(item)}>
                                <SchoolName>
                                    {school.code === item.code && <Check />}
                                    {item.name}
                                </SchoolName>
                                <SchoolRegion>{item.location}</SchoolRegion>
                            </SchoolItem>
                        ))}
                    </SchoolList>
                </Column>
                <Row gap="16px" justifyContent="flex-end">
                    <Button option="SECONDARY" size="SMALL" onClick={closeSchoolModal}>
                        취소
                    </Button>
                    <Button size="SMALL" onClick={handleCompleteFindSchoolButtonClick}>
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
