import { useNewSubjectListStore } from '@/store';
import { color, font } from '@maru/theme';
import { Button, Dropdown, Td } from '@maru/ui';
import { flex } from '@maru/utils';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface Props {
    id: number;
    achievementLevels: string[];
}

const NewGradeCalculatorItem = ({ id, achievementLevels }: Props) => {
    const [newSubjectList, setNewSubjectList] = useNewSubjectListStore();

    const newSubjectIndex = newSubjectList.findIndex((item) => item.id === id);

    const handleDeleteNewGradeItemButtonClick = (id: number) => {
        setNewSubjectList((prev) => prev.filter((item) => item.id !== id));
    };

    const handleNewGradeItemDataChange = (data: string, name: string) => {
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
                        handleNewGradeItemDataChange(e.target.value, 'subjectName')
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
                    onChange={handleNewGradeItemDataChange}
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={newSubjectList[newSubjectIndex].achievementLevel22 ?? '없음'}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    name="achievementLevel22"
                    onChange={handleNewGradeItemDataChange}
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={newSubjectList[newSubjectIndex].achievementLevel31 ?? '없음'}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    name="achievementLevel31"
                    onChange={handleNewGradeItemDataChange}
                />
            </Td>
            <Td width={123} height="100%">
                <Button
                    onClick={() => handleDeleteNewGradeItemButtonClick(id)}
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