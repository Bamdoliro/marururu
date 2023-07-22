import { NumberInput, Row, Td, Th } from '@maru/ui';
import { styled } from 'styled-components';

const AttendanceCalculator = () => {
    return (
        <Table>
            <Row>
                <Th width="100%" height={56}>
                    학년
                </Th>
                <Th width="100%" height={56}>
                    미인정 결석
                </Th>
                <Th width="100%" height={56}>
                    미인정 지각
                </Th>
                <Th width="100%" height={56}>
                    미인정 조퇴
                </Th>
                <Th width="100%" height={56}>
                    미인정 결과
                </Th>
            </Row>
            <Row>
                <Td width="100%" height={56} option="SECONDARY">
                    1학년
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput />
                </Td>
            </Row>
            <Row>
                <Td width="100%" height={56} option="SECONDARY">
                    2학년
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput />
                </Td>
            </Row>
            <Row>
                <Td width="100%" height={56} option="SECONDARY">
                    3학년
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput />
                </Td>
                <Td width="100%" height={56}>
                    <NumberInput />
                </Td>
            </Row>
        </Table>
    );
};

const Table = styled.div`
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
`;

export default AttendanceCalculator;
