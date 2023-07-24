import { color, font } from '@maru/theme';
import { Button, Td } from '@maru/ui';
import Dropdown from '@maru/ui/components/Dropdown/Dropdown';
import { flex } from '@maru/utils';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { SubjectType } from '@/types/form';
import styled from 'styled-components';

interface PropsType {
    id: number;
    achievementLevels: string[];
    newSubjectListData: SubjectType[];
    setNewSubjectListData: Dispatch<SetStateAction<SubjectType[]>>;
}

const NewGradeCalculatorItem = ({
    id,
    achievementLevels,
    newSubjectListData,
    setNewSubjectListData,
}: PropsType) => {
    const newSubjectIndex = newSubjectListData.findIndex((item) => item.id === id);

    const handleDeleteNewSubjectItemButtonClick = (id: number) => {
        setNewSubjectListData((prev) => prev.filter((item) => item.id !== id));
    };

    const handleNewCaculatorItemDataChange = (data: string, name: string) => {
        setNewSubjectListData((prev) => {
            const updatedData = [...prev];
            updatedData[newSubjectIndex] = {
                ...updatedData[newSubjectIndex],
                [name]: data,
            };
            return updatedData;
        });
    };

    return (
        <StyledNewGradeCalculatorItem>
            <Td width={123} height="100%">
                <NewSubjectInput
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleNewCaculatorItemDataChange(e.target.value, 'subjectName')
                    }
                    value={newSubjectListData[newSubjectIndex].subjectName}
                    placeholder="과목명 입력"
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={newSubjectListData[newSubjectIndex].grade2_1}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    name="grade2_1"
                    onChange={handleNewCaculatorItemDataChange}
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={newSubjectListData[newSubjectIndex].grade2_2}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    name="grade2_2"
                    onChange={handleNewCaculatorItemDataChange}
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={newSubjectListData[newSubjectIndex].grade3_1}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    name="grade3_1"
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
    background-color: ${color.gray100};
    width: 74px;
    text-align: center;
    &:-webkit-input-placeholder {
        color: ${color.gray500};
    }
`;
