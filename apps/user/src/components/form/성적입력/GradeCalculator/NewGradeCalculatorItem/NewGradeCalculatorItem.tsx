import { color, font } from '@maru/theme';
import { Button, Td } from '@maru/ui';
import Dropdown from '@maru/ui/components/Dropdown/Dropdown';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    id: number;
    grades: string[];
    handleDeleteNewSubjectButtonClick: (id: number) => void;
}

const NewGradeCalculatorItem = ({ id, grades, handleDeleteNewSubjectButtonClick }: PropsType) => {
    return (
        <StyledNewGradeCalculatorItem>
            <Td width={123} height="100%">
                <NewSubjectInput placeholder="과목명 입력" />
            </Td>
            <Td width={190} height="100%">
                <Dropdown size="SMALL" data={grades} width={80} />
            </Td>
            <Td width={190} height="100%">
                <Dropdown size="SMALL" data={grades} width={80} />
            </Td>
            <Td width={190} height="100%">
                <Dropdown size="SMALL" data={grades} width={80} />
            </Td>
            <Td width={123} height="100%">
                <Button
                    onClick={() => handleDeleteNewSubjectButtonClick(id)}
                    option="DELETE"
                    size="SMALL">
                    삭제
                </Button>
            </Td>
        </StyledNewGradeCalculatorItem>
    );
};

export default NewGradeCalculatorItem;

const StyledNewGradeCalculatorItem = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 64px;
`;

const NewSubjectInput = styled.input`
    ${font.p2}
    color: ${color.gray900};
    background-color: ${color.gray100};
    width: 74px;
    text-align: center;
    &:-webkit-input-placeholder {
        color: ${color.gray500};
    }
`;
