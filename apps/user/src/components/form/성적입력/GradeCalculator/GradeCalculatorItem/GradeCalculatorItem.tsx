import { color, font } from '@maru/theme';
import { Button, Td } from '@maru/ui';
import Dropdown from '@maru/ui/components/Dropdown/Dropdown';
import { flex } from '@maru/utils';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { SubjectDataType } from '../GradeCalculator';
import { useCaculatorItemHandler } from './GradeCalculatorItem.hooks';

interface PropsType {
    id: number;
    subjectListData: SubjectDataType[];
    achievementLevels: string[];
    setSubjectListData: Dispatch<SetStateAction<SubjectDataType[]>>;
}

const GradeCalculatorItem = ({
    id,
    subjectListData,
    achievementLevels,
    setSubjectListData,
}: PropsType) => {
    const { handleCaculatorItemDataChange } = useCaculatorItemHandler(id, setSubjectListData);

    return (
        <StyledGradeCalculatorItem>
            <Td width={123} height="100%">
                {subjectListData[id].subjectName}
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={subjectListData[id].grade2_1}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    onChange={handleCaculatorItemDataChange}
                    name="grade2_1"
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={subjectListData[id].grade2_2}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    onChange={handleCaculatorItemDataChange}
                    name="grade2_2"
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={subjectListData[id].grade3_1}
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
