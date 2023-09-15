import { useGradeCalculation } from '@/hooks';
import { Row, Td, Th } from '@maru/ui';
import styled from 'styled-components';

const GradePreview = () => {
    const {
        regularScore,
        specialScore,
        attendanceScore,
        volunteerScore,
        certificateScore,
        regularTotalScore,
        specialTotalScore,
    } = useGradeCalculation();

    return (
        <StyledGradePreview>
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
                        {regularScore}
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        {attendanceScore}
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        {volunteerScore}
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        {certificateScore}
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        {regularTotalScore}
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
                        {specialScore}
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        {attendanceScore}
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        {volunteerScore}
                    </Td>
                    <Td width="calc(100% / 6)" height={56}>
                        {certificateScore}
                    </Td>
                    <Td borderBottomRightRadius={12} width="calc(100% / 6)" height={56}>
                        {specialTotalScore}
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

const Table = styled.div`
    width: 100%;
`;
