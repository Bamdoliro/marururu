import styled from 'styled-components';
import GradeCalculatorHeader from './GradeCalculatorHeader/GradeCalculatorHeader';
import GradeCalculatorItem from './GradeCalculatorItem/GradeCalculatorItem';

const GradeCalculator = () => {
    return (
        <StyledGradeCalculator>
            <GradeCalculatorHeader />
            <GradeCalculatorItem />
        </StyledGradeCalculator>
    );
};

export default GradeCalculator;

const StyledGradeCalculator = styled.div`
    width: 816px;
    border-radius: 12px;
    overflow: hidden;
`;
