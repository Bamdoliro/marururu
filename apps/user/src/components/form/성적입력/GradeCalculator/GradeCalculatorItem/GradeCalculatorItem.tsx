import { Td } from '@maru/ui';
import Dropdown from '@maru/ui/components/Dropdown/Dropdown';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    subject: string;
}

const GradeCalculatorItem = ({ subject }: PropsType) => {
    return (
        <StyledGradeCalculatorItem>
            <Td width={123} height="100%">
                {subject}
            </Td>
            <Td width={190} height="100%">
                <Dropdown size="SMALL" data={['A']} width={80} />
            </Td>
            <Td width={190} height="100%">
                <Dropdown size="SMALL" data={['A']} width={80} />
            </Td>
            <Td width={190} height="100%">
                <Dropdown size="SMALL" data={['A']} width={80} />
            </Td>
            <Td width={123} height="100%">
                {''}
            </Td>
        </StyledGradeCalculatorItem>
    );
};

export default GradeCalculatorItem;

const StyledGradeCalculatorItem = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 64px;
`;
