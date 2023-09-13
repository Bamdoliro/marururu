import { useSubjectListValueStore } from '@/store';
import styled from 'styled-components';
import 검정고시CalculatorHeader from './검정고시CalculatorHeader/검정고시CalculatorHeader';
import 검정고시CalculatorItem from './검정고시CalculatorItem/검정고시CalculatorItem';

const 검정고시Calculator = () => {
    const subjectList = useSubjectListValueStore();

    return (
        <Styled검정고시Calculator>
            <검정고시CalculatorHeader />
            {subjectList.map(({ subjectName, score }) => (
                <검정고시CalculatorItem subject={subjectName} score={score} />
            ))}
        </Styled검정고시Calculator>
    );
};

export default 검정고시Calculator;

const Styled검정고시Calculator = styled.div`
    width: 816px;
    height: 100%;
`;
