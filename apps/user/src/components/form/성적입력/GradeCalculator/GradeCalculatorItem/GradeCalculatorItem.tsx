import { color, font } from '@maru/theme';
import { Button, Td } from '@maru/ui';
import Dropdown from '@maru/ui/components/Dropdown/Dropdown';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    subject?: string;
    option: 'DEFAULT' | 'ADD';
}

const GradeCalculatorItem = ({ subject, option }: PropsType) => {
    return (
        <StyledGradeCalculatorItem>
            <Td width={123} height="100%">
                {option === 'DEFAULT' ? subject : <AddSubjectInput placeholder="과목명 입력" />}
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
                {option === 'DEFAULT' ? null : (
                    <Button option="DELETE" size="SMALL">
                        삭제
                    </Button>
                )}
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

const AddSubjectInput = styled.input`
    ${font.p2}
    color: ${color.gray900};
    background-color: ${color.gray100};
    width: 74px;
    text-align: center;
    &:-webkit-input-placeholder {
        color: ${color.gray500};
    }
`;
