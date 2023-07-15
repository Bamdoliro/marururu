import { color, font } from '@maru/theme';
import { Button, Column, Row, SearchInput } from '@maru/ui';
import { styled } from 'styled-components';
import Close from '@maru/ui/Icons/Close';

const SchoolSearchModal = () => {
    return (
        <Background>
            <StyledSchoolSearchModal>
                <Column gap="24px">
                    <Column gap="16px">
                        <Row justifyContent="space-between">
                            <Title>학교 검색</Title>
                            <Close cursor="pointer" />
                        </Row>
                        <SearchInput placeholder="학교 이름을 입력해주세요." />
                    </Column>
                    <SchoolList>
                        <SchoolItem>
                            <SchoolName>부산소프트웨어마이스터고등학교</SchoolName>
                            <SchoolRegion>부산광역시 강서구</SchoolRegion>
                        </SchoolItem>
                        <SchoolItem>
                            <SchoolName>부산소프트웨어마이스터고등학교</SchoolName>
                            <SchoolRegion>부산광역시 강서구</SchoolRegion>
                        </SchoolItem>
                        <SchoolItem>
                            <SchoolName>부산소프트웨어마이스터고등학교</SchoolName>
                            <SchoolRegion>부산광역시 강서구</SchoolRegion>
                        </SchoolItem>
                        <SchoolItem>
                            <SchoolName>부산소프트웨어마이스터고등학교</SchoolName>
                            <SchoolRegion>부산광역시 강서구</SchoolRegion>
                        </SchoolItem>
                    </SchoolList>
                </Column>
                <Row gap="16px" justifyContent="flex-end">
                    <Button option="SECONDARY" size="SMALL">
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

const SchoolItem = styled.div`
    display: flex;
    height: 56px;
    padding: 15px 16px;
    border-radius: 6px;
    background: ${color.gray50};
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
`;

const SchoolName = styled.p`
    ${font.p2}
    color: ${color.gray900};
`;

const SchoolRegion = styled.p`
    ${font.caption}
    color: ${color.gray600};
`;
