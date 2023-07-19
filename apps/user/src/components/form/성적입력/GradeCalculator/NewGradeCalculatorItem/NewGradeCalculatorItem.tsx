import { color, font } from '@maru/theme';
import { Button, Td } from '@maru/ui';
import Dropdown from '@maru/ui/components/Dropdown/Dropdown';
import { flex } from '@maru/utils';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { NewSubjectDataType } from '../GradeCalculator';
import styled from 'styled-components';

interface PropsType {
    id: string;
    grades: string[];
    newSubjectListData: NewSubjectDataType[];
    setNewSubjectListData: Dispatch<SetStateAction<NewSubjectDataType[]>>;
}

const NewGradeCalculatorItem = ({
    id,
    grades,
    newSubjectListData,
    setNewSubjectListData,
}: PropsType) => {
    const newindex = newSubjectListData.findIndex((item) => item.id === id);

    const handleNewCaculatorItemDataChange = (data: string, name: string) => {
        setNewSubjectListData((prev) => {
            const updatedData = [...prev];
            const index = updatedData.findIndex((item) => item.id === id);
            if (index !== -1) {
                updatedData[index] = {
                    ...updatedData[index],
                    [name]: data,
                };
            }
            return updatedData;
        });
    };

    const handleDeleteNewSubjectButtonClick = (id: string) => {
        setNewSubjectListData((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <StyledNewGradeCalculatorItem>
            <Td width={123} height="100%">
                <NewSubjectInput
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleNewCaculatorItemDataChange(e.target.value, 'subjectName')
                    }
                    value={newSubjectListData[newindex].subjectName}
                    placeholder="과목명 입력"
                />
            </Td>
            <Td width={190} height="100%">
                {/* <Dropdown
                    value={newSubjectListData[id].grade2_1}
                    size="SMALL"
                    data={grades}
                    width={80}
                    name="grade2_1"
                    onChange={handleNewCaculatorItemDataChange}
                /> */}
            </Td>
            <Td width={190} height="100%">
                {/* <Dropdown
                    value={newSubjectListData[id].grade2_1}
                    size="SMALL"
                    data={grades}
                    width={80}
                    name="grade2_2"
                    onChange={handleNewCaculatorItemDataChange}
                /> */}
            </Td>
            <Td width={190} height="100%">
                {/* <Dropdown
                    value={newSubjectListData[id].grade2_1}
                    size="SMALL"
                    data={grades}
                    width={80}
                    name="grade3_1"
                    onChange={handleNewCaculatorItemDataChange}
                /> */}
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
