import { Th } from '@maru/ui';
import { Column, Row } from '@maru/ui';
import styled from 'styled-components';

const GradeCalculatorHeader = () => {
    return (
        <StyledGradeCalculatorHeader>
            <Row alignItems="center">
                <Th width={123} height={100}>
                    과목
                </Th>
                <Column width={379}>
                    <Th width="100%" height={50}>
                        2학년
                    </Th>
                    <Row>
                        <Th option="SECONDARY" width="100%" height={50}>
                            1학기
                        </Th>
                        <Th option="SECONDARY" width="100%" height={50}>
                            2학기
                        </Th>
                    </Row>
                </Column>
                <Column width={190.5}>
                    <Th width="100%" height={50}>
                        3학년
                    </Th>
                    <Th option="SECONDARY" width="100%" height={50}>
                        1학기
                    </Th>
                </Column>
                <Th width={123} height={100}>
                    삭제
                </Th>
            </Row>
        </StyledGradeCalculatorHeader>
    );
};

export default GradeCalculatorHeader;

const StyledGradeCalculatorHeader = styled.div`
    width: 100%;
    height: 100px;
`;
