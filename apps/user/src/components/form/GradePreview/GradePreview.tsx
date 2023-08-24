import { color, font } from '@maru/theme';
import { Column, Row, Td, Th } from '@maru/ui';
import styled from 'styled-components';

interface Props {
    regularScore: number;
    specialScore: number;
    attendanceScore: number;
    volunteerScore: number;
    certificateScore: number;
}

// 모의 성적 계산
const GradePreview = ({
    regularScore,
    specialScore,
    attendanceScore,
    volunteerScore,
    certificateScore,
}: Props) => {
    return (
        <Column gap={24}>
            <Desc>
                *교과성적이 없는 학기나 학년의 경우 모집요강을 반드시 확인 바랍니다.
                <br />
                *성취수준이 없고 원점수로 되어있는 학기나 학년은 아래표를 참고 바랍니다.
            </Desc>
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
                            {regularScore + attendanceScore + volunteerScore + certificateScore}
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
                            {specialScore + attendanceScore + volunteerScore + certificateScore}
                        </Td>
                    </Row>
                </Table>
            </StyledGradePreview>
        </Column>
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

const Desc = styled.p`
    color: ${color.red};
    ${font.p3}
    margin-bottom: 24px;
`;
