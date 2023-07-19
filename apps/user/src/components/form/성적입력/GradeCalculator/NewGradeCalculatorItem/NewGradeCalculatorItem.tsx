import { color, font } from '@maru/theme';
import { Button, Td } from '@maru/ui';
import Dropdown from '@maru/ui/components/Dropdown/Dropdown';
import { flex } from '@maru/utils';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { SubjectDataType } from '../GradeCalculator';
import styled from 'styled-components';

interface PropsType {
    id: number;
    grades: string[];
    subjects: readonly string[];
    newSubjects: SubjectDataType[];
    handleDeleteNewSubjectButtonClick: (id: number) => void;
}

const NewGradeCalculatorItem = ({
    id,
    grades,
    subjects,
    newSubjects,
    handleDeleteNewSubjectButtonClick,
}: PropsType) => {
    const [newSubjectName, setNewSubjectName] = useState('');

    const handleNewSubjectNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setNewSubjectName(value);

        if (value === '') return;

        const isSameNewSubject = newSubjects.some((item) => item.subjectName === value);
        const isSameGeneralSubject = subjects.includes(value);

        if (isSameNewSubject || isSameGeneralSubject) {
            alert('해당 과목이 이미 존재합니다.');
            setNewSubjectName('');
            return;
        }
    };

    return (
        <StyledNewGradeCalculatorItem>
            <Td width={123} height="100%">
                <NewSubjectInput
                    value={newSubjectName}
                    onChange={handleNewSubjectNameChange}
                    placeholder="과목명 입력"
                />
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
