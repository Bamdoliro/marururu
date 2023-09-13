import { NumberInput, Td } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface Props {
    subject: string;
    score: number;
}

const 검정고시CaculatorItem = ({ subject, score }: Props) => {
    return (
        <Styled검정고시CaculatorItem>
            <Td width={123} height={64}>
                {subject}
            </Td>
            <Td width={613} height={64}>
                <NumberInput value={score} />
            </Td>
            <Td width={80} height={64}>
                {null}
            </Td>
        </Styled검정고시CaculatorItem>
    );
};

export default 검정고시CaculatorItem;

const Styled검정고시CaculatorItem = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 64px;
`;
