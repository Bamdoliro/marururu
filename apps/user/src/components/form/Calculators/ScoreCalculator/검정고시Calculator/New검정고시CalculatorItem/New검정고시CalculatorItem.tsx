import { useNew검정고시SubjectListStore } from '@/store';
import { color, font } from '@maru/theme';
import { Button, NumberInput, Td } from '@maru/ui';
import { flex } from '@maru/utils';
import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface Props {
    id: number;
    score: number | null;
}

const New검정고시CalculatorItem = ({ id, score }: Props) => {
    const [new검정고시SubjectList, setNew검정고시SubjectList] = useNew검정고시SubjectListStore();

    const new검정고시SubjectIndex = new검정고시SubjectList.findIndex((item) => item.id === id);

    const handleDeleteNew검정고시ItemButtonClick = (id: number) => {
        setNew검정고시SubjectList((prev) => prev.filter((item) => item.id !== id));
    };

    const handleNew검정고시ItemDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;

        setNew검정고시SubjectList((prev) => {
            const updatedData = [...prev];
            updatedData[new검정고시SubjectIndex] = {
                ...updatedData[new검정고시SubjectIndex],
                [name]: value,
            };
            return updatedData;
        });
    };

    return (
        <StyledNew검정고시CalculatorItem>
            <Td option="SECONDARY" width={123} height="100%">
                <NewSubjectInput
                    onChange={handleNew검정고시ItemDataChange}
                    name="subjectName"
                    value={new검정고시SubjectList[new검정고시SubjectIndex].subjectName}
                    placeholder="과목명 입력"
                />
            </Td>
            <Td width={570} height="100%">
                <NumberInput
                    value={score ?? 0}
                    name="score"
                    onChange={handleNew검정고시ItemDataChange}
                />
            </Td>
            <Td width={123} height="100%">
                <Button
                    onClick={() => handleDeleteNew검정고시ItemButtonClick(id)}
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
