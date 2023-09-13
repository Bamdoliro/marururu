import styled from 'styled-components';
import 검정고시CalculatorHeader from './검정고시CalculatorHeader/검정고시CalculatorHeader';

const 검정고시Calculator = () => {
    return (
        <Styled검정고시Calculator>
            <검정고시CalculatorHeader />
        </Styled검정고시Calculator>
    );
};

export default 검정고시Calculator;

const Styled검정고시Calculator = styled.div`
    width: 816px;
    height: 100%;
`;
