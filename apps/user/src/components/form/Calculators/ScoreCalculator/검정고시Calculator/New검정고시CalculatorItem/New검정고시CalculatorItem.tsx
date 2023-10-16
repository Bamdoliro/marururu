import { useNew검정고시SubjectListStore } from '@/store';
import { color, font } from '@maru/theme';
import { Button, CellInput, Td } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useDeleteNew검정고시Subject, useInput } from './New검정고시CalculatorItem.hooks';

interface Props {
    id: number;
    score: number | null;
}

const New검정고시CalculatorItem = ({ id, score }: Props) => {
    const [new검정고시SubjectList, setNew검정고시SubjectList] = useNew검정고시SubjectListStore();

    const new검정고시SubjectIndex = new검정고시SubjectList.findIndex((item) => item.id === id);
    const { handleNew검정고시SubjectDataChange } = useInput(new검정고시SubjectIndex);
    const { handleDeleteNew검정고시SubjectButtonClick } = useDeleteNew검정고시Subject();

    return (
        <StyledNew검정고시CalculatorItem>
            <Td option="SECONDARY" width={123} height="100%">
                <NewSubjectInput
                    onChange={handleNew검정고시SubjectDataChange}
                    name="subjectName"
                    value={new검정고시SubjectList[new검정고시SubjectIndex].subjectName}
                    placeholder="과목명 입력"
                />
            </Td>
            <Td width={570} height="100%">
                <CellInput
                    value={score ?? 0}
                    name="score"
                    onChange={handleNew검정고시SubjectDataChange}
                />
            </Td>
            <Td width={123} height="100%">
                <Button
                    onClick={() => handleDeleteNew검정고시SubjectButtonClick(id)}
                    option="DELETE"
                    size="SMALL">
                    삭제
                </Button>
            </Td>
        </StyledNew검정고시CalculatorItem>
    );
};

export default New검정고시CalculatorItem;

const StyledNew검정고시CalculatorItem = styled.div`
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
