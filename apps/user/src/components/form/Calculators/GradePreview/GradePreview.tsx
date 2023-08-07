import { color, font } from '@maru/theme';
import { Row, Th, Td } from '@maru/ui';
import styled from 'styled-components';

// 모의 성적 계산
const GradePreview = () => {
    return (
        <StyledGradePreview>
            <Title>모의 성적 계산</Title>
            <Table>
                <Row alignItems="center">
                    <Th borderTopLeftRadius={12} width="calc(100% / 6)" height={56}>
                        전형
                    </Th>
                    <Th width="calc(100% / 6)" height={56}>
                        교과성적
                    </Th>
                    <Th width="calc(100% / 6)" height={56}>
                        출결상황
                    </Th>
                    <Th width="calc(100% / 6)" height={56}>
                        봉사활동
                    </Th>
                    <Th width="calc(100% / 6)" height={56}>
                        가산점
                    </Th>
                    <Th borderTopRightRadius={12} width="calc(100% / 6)" height={56}>
                        총점
                    </Th>
                </Row>
                <Row alignItems="center">
                    <Td option="SECONDARY" width="calc(100% / 6)" height={56}>
                        일반전형
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        0
                    </Td>
                </Row>
                <Row alignItems="center">
                    <Td
                        borderBottomLeftRadius={12}
                        option="SECONDARY"
                        width="calc(100% / 6)"
                        height={56}>
                        특별전형
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        0
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        0
                    </Td>
                    <Td borderBottomRightRadius={12} width="calc(100% / 6)" height={56}>
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
`;
