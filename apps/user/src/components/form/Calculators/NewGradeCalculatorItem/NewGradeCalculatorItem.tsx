import { color, font } from '@maru/theme';
import { Button, Td, Dropdown } from '@maru/ui';
import { flex } from '@maru/utils';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Subject } from '@/types/form';
import styled from 'styled-components';

interface PropsType {
    id: number;
    achievementLevels: string[];
    newSubjectList: Subject[];
    setNewSubjectList: Dispatch<SetStateAction<Subject[]>>;
}

const NewGradeCalculatorItem = ({
    id,
    achievementLevels,
    newSubjectList,
    setNewSubjectList,
}: PropsType) => {
    const newSubjectIndex = newSubjectList.findIndex((item) => item.id === id);

    const handleDeleteNewSubjectItemButtonClick = (id: number) => {
        setNewSubjectList((prev) => prev.filter((item) => item.id !== id));
    };

    const handleNewCaculatorItemDataChange = (data: string, name: string) => {
        setNewSubjectList((prev) => {
            const updatedData = [...prev];
            updatedData[newSubjectIndex] = {
                ...updatedData[newSubjectIndex],
                [name]: data === '없음' ? null : data,
            };
            return updatedData;
        });
    };

    return (
        <StyledNewGradeCalculatorItem>
            <Td option="SECONDARY" width={123} height="100%">
                <NewSubjectInput
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleNewCaculatorItemDataChange(e.target.value, 'subjectName')
                    }
                    value={newSubjectList[newSubjectIndex].subjectName}
                    placeholder="과목명 입력"
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={newSubjectList[newSubjectIndex].achievementLevel21 ?? '없음'}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    name="achievementLevel21"
                    onChange={handleNewCaculatorItemDataChange}
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={newSubjectList[newSubjectIndex].achievementLevel22 ?? '없음'}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    name="achievementLevel22"
                    onChange={handleNewCaculatorItemDataChange}
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={newSubjectList[newSubjectIndex].achievementLevel31 ?? '없음'}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    name="achievementLevel31"
                    onChange={handleNewCaculatorItemDataChange}
                />
            </Td>
            <Td width={123} height="100%">
                <Button
                    onClick={() => handleDeleteNewSubjectItemButtonClick(id)}
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
    background-color: ${color.gray50};
    width: 74px;
    text-align: center;
    &:-webkit-input-placeholder {
        color: ${color.gray500};
    }
`;
