import { useSubjectListStore } from '@/store';
import { Dropdown, Td } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface Props {
    id: number;
    achievementLevels: string[];
}

const GradeCalculatorItem = ({ id, achievementLevels }: Props) => {
    const [subjectList, setSubjectList] = useSubjectListStore();

    const handleGradeItemDataChange = (data: string, name: string) => {
        setSubjectList((prev) => {
            const updatedData = [...prev];
            updatedData[id] = {
                ...updatedData[id],
                [name]: data === '-' ? null : data,
            };
            return updatedData;
        });
    };

    console.log(subjectList);

    return (
        <StyledGradeCalculatorItem>
            <Td option="SECONDARY" width={123} height="100%">
                {subjectList[id].subjectName}
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={subjectList[id].achievementLevel21 ?? '-'}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    onChange={handleGradeItemDataChange}
                    name="achievementLevel21"
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={subjectList[id].achievementLevel22 ?? '-'}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    onChange={handleGradeItemDataChange}
                    name="achievementLevel22"
                />
            </Td>
            <Td width={190} height="100%">
                <Dropdown
                    value={subjectList[id].achievementLevel31 ?? '-'}
                    size="SMALL"
                    data={achievementLevels}
                    width={80}
                    onChange={handleGradeItemDataChange}
                    name="achievementLevel31"
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