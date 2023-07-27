import { Td } from '@maru/ui';
import Dropdown from '@maru/ui/components/Dropdown/Dropdown';
import { flex } from '@maru/utils';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Subject } from '@/types/form';

interface PropsType {
    id: number;
    subjectList: Subject[];
    setSubjectList: Dispatch<SetStateAction<Subject[]>>;
    achievementLevels: string[];
}

const GradeCalculatorItem = ({ id, subjectList, setSubjectList, achievementLevels }: PropsType) => {
    const handleCaculatorItemDataChange = (data: string, name: string) => {
        setSubjectList((prev) => {
            const updatedData = [...prev];
            updatedData[id] = {
                ...updatedData[id],
                [name]: data,
            };
            return updatedData;
        });
    };
    return (
        <StyledGradeCalculatorItem>
            <Td width={123} height="100%">
                {subjectList[id].subjectName}
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={subjectList[id].grade2_1}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    onChange={handleCaculatorItemDataChange}
                    name="grade2_1"
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={subjectList[id].grade2_2}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    onChange={handleCaculatorItemDataChange}
                    name="grade2_2"
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={subjectList[id].grade3_1}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    onChange={handleCaculatorItemDataChange}
                    name="grade3_1"
                />
            </Td>
            <Td width={123} height="100%">
                {null}
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
