import { useSet검정고시SubjectListStore } from '@/store';
import { NumberInput, Td } from '@maru/ui';
import { flex } from '@maru/utils';
import { ChangeEventHandler } from 'react';
import { styled } from 'styled-components';

interface Props {
    id: number;
    subject: string;
    score: number | null;
}

const 검정고시CalculatorItem = ({ id, subject, score }: Props) => {
    const set검정고시SubjectList = useSet검정고시SubjectListStore();

    const handle검정고시ItemDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        set검정고시SubjectList((prev) => {
            const updatedData = [...prev];
            updatedData[id] = {
                ...updatedData[id],
                [name]: value,
            };
            console.log(updatedData);
            return updatedData;
        });
    };

    return (
        <Styled검정고시CalculatorItem>
            <Td option="SECONDARY" width={123} height={64}>
                {subject}
            </Td>
            <Td width={570} height={64}>
                <NumberInput
                    value={score ?? 0}
                    name="score"
                    onChange={handle검정고시ItemDataChange}
                />
            </Td>
            <Td width={123} height={64}>
                {null}
            </Td>
        </Styled검정고시CalculatorItem>
    );
};

export default 검정고시CalculatorItem;

const Styled검정고시CalculatorItem = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 64px;
`;
