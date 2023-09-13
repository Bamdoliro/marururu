import { Row, Th } from '@maru/ui';
import styled from 'styled-components';

const 검정고시CalculatorHeader = () => {
    return (
        <Styled검정고시CalculatorHeader>
            <Row>
                <Th borderTopLeftRadius={12} width={123} height={64}>
                    과목
                </Th>
                <Th width={613} height={64}>
                    성적
                </Th>
                <Th borderTopRightRadius={12} width={80} height={64}>
                    선택
                </Th>
            </Row>
        </Styled검정고시CalculatorHeader>
    );
};

export default 검정고시CalculatorHeader;

const Styled검정고시CalculatorHeader = styled.div`
    width: 100%;
    height: 64px;
`;
