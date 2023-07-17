import { color, font } from '@maru/theme';
import { Row } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

// 모의 성적 계산
const GradeCalculator = () => {
    return (
        <StyledGradeCalculator>
            <Title>모의 성적 계산</Title>
            <Table>
                <Row alignItems="center">
                    <Th>전형</Th>
                    <Th>교과성적</Th>
                    <Th>출결상황</Th>
                    <Th>봉사활동</Th>
                    <Th>가산점</Th>
                    <Th>총점</Th>
                </Row>
                <Row alignItems="center">
                    <Td>일반전형</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                </Row>
                <Row alignItems="center">
                    <Td>특별전형</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                </Row>
            </Table>
        </StyledGradeCalculator>
    );
};

export default GradeCalculator;

const StyledGradeCalculator = styled.div`
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

const Th = styled.div`
    ${font.context}
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    width: calc(100% / 6);
    height: 56px;
    background-color: ${color.maruDefault};
    color: ${color.white};
    border-right: 1px solid ${color.white};
    &:last-child {
        border-right: none;
    }
`;

const Td = styled.div`
    ${font.btn2}
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    width: calc(100% / 6);
    height: 56px;
    background-color: ${color.white};
    color: ${color.gray900};
    border: 0.5px solid ${color.gray300};
    &:first-child {
        background-color: ${color.gray50};
    }
`;
