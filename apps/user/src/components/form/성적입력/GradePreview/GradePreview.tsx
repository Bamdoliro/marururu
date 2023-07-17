import { color, font } from '@maru/theme';
import { Row } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

// 모의 성적 계산
const GradePreview = () => {
    return (
        <StyledGradePreview>
            <Title>모의 성적 계산</Title>
            <Table>
                <Row alignItems="center">
                    <Th width="calc(100% / 6)" height="56px">
                        전형
                    </Th>
                    <Th width="calc(100% / 6)" height="56px">
                        교과성적
                    </Th>
                    <Th width="calc(100% / 6)" height="56px">
                        출결상황
                    </Th>
                    <Th width="calc(100% / 6)" height="56px">
                        봉사활동
                    </Th>
                    <Th width="calc(100% / 6)" height="56px">
                        가산점
                    </Th>
                    <Th width="calc(100% / 6)" height="56px">
                        총점
                    </Th>
                </Row>
                <Row alignItems="center">
                    <Td width="calc(100% / 6)" height="56px">
                        일반전형
                    </Td>
                    <Td width="calc(100% / 6)" height="56px">
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height="56px">
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height="56px">
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height="56px">
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height="56px">
                        0
                    </Td>
                </Row>
                <Row alignItems="center">
                    <Td width="calc(100% / 6)" height="56px">
                        특별전형
                    </Td>
                    <Td width="calc(100% / 6)" height="56px">
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height="56px">
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height="56px">
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height="56px">
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height="56px">
                        0
                    </Td>
                </Row>
            </Table>
        </StyledGradePreview>
    );
};

export default GradePreview;

const StyledGradePreview = styled.div`
    width: 816px;
`;

const Title = styled.p`
    ${font.H4};
    color: ${color.gray900};
    margin-bottom: 12px;
`;

const Table = styled.div`
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
`;

const Th = styled.div<{ width: string; height: string }>`
    ${font.context}
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${color.maruDefault};
    color: ${color.white};
    border-right: 1px solid ${color.white};
    &:last-child {
        border-right: none;
    }
`;

const Td = styled.div<{ width: string; height: string }>`
    ${font.btn2}
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${color.white};
    color: ${color.gray900};
    border: 0.5px solid ${color.gray300};
    &:first-child {
        background-color: ${color.gray50};
    }
`;
