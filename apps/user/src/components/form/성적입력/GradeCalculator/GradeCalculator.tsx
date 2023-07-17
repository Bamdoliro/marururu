import styled from 'styled-components';
import GradeCalculatorHeader from './GradeCalculatorHeader/GradeCalculatorHeader';

const GradeCalculator = () => {
    return (
        <StyledGradeCalculator>
            <GradeCalculatorHeader />
        </StyledGradeCalculator>
    );
};

export default GradeCalculator;

const StyledGradeCalculator = styled.div`
    width: 816px;
    border-radius: 12px;
    border: 1px solid black;
    overflow: hidden;
`;
