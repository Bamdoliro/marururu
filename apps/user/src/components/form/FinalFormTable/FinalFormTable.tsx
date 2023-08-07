import { font, color } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';

const FinalFormTable = () => {
    return (
        <Table>
            <Tr>
                <Th style={{ borderTopLeftRadius: '12px' }} width="120px">
                    안녕
                </Th>
                <Th style={{ borderTopRightRadius: '12px' }} width="696px">
                    안녕
                </Th>
            </Tr>
            <Tr>
                <Td width="120px">공동 제출</Td>
                <Td width="696px">공동 제출</Td>
            </Tr>
            <Tr>
                <Td style={{ borderBottomLeftRadius: '12px' }} width="120px">
                    공동 제출
                </Td>
                <Td style={{ borderBottomRightRadius: '12px' }} width="696px">
                    공동 제출
                </Td>
            </Tr>
        </Table>
    );
};

export default FinalFormTable;

const Table = styled.table`
    width: 816px;
    border-radius: 12px;
`;

const Tr = styled.tr`
    ${flex({ alignItems: 'center' })}
`;

const Th = styled.th<{ width: string }>`
    ${font.context}
    ${flex({ justifyContent: 'center', alignItems: 'center' })}
    width: ${(props) => props.width};
    height: 56px;
    background-color: ${color.gray50};
    border: 1px solid ${color.gray300};
`;

const Td = styled.td<{ width: string }>`
    ${font.p2}
    ${flex({ justifyContent: 'center', alignItems: 'center' })}
    width: ${(props) => props.width};
    height: 200px;
    background-color: ${color.white};
    border: 1px solid ${color.gray300};
`;
