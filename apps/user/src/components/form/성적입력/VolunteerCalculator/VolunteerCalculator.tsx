import { color, font } from '@maru/theme';
import { NumberInput, Row, Td, Th } from '@maru/ui';
import { styled } from 'styled-components';

const VolunteerCalculator = () => {
    return (
        <Table>
            <Row>
                <Th width={162} height={56}>
                    학년
                </Th>
                <Th width={654} height={56}>
                    봉사시간
                </Th>
            </Row>
            <Row>
                <Td width={162} height={56}>
                    1학년
                </Td>
                <Td width={654} height={56}>
                    <NumberInput />
                    <Paragraph>시간</Paragraph>
                </Td>
            </Row>
            <Row>
                <Td width={162} height={56}>
                    1학년
                </Td>
                <Td width={654} height={56}>
                    <NumberInput />
                    <Paragraph>시간</Paragraph>
                </Td>
            </Row>
            <Row>
                <Td width={162} height={56}>
                    1학년
                </Td>
                <Td width={654} height={56}>
                    <NumberInput />
                    <Paragraph>시간</Paragraph>
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

const Paragraph = styled.p`
    ${font.p2}
    color: ${color.gray900};
    margin-left: 8px;
`;

export default VolunteerCalculator;
