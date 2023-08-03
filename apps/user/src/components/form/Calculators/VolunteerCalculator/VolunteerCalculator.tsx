import { VolunteerInfo } from '@/types/form/client';
import { color, font } from '@maru/theme';
import { NumberInput, Row, Td, Th } from '@maru/ui';
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';
import { styled } from 'styled-components';

interface PropsType {
    volunteerInfo: VolunteerInfo;
    setVolunteerInfo: Dispatch<SetStateAction<VolunteerInfo>>;
}

const VolunteerCalculator = ({ volunteerInfo, setVolunteerInfo }: PropsType) => {
    const handleVolunteerInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setVolunteerInfo({ ...volunteerInfo, [name]: +value });
    };

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
                <Td width={162} height={56} option="SECONDARY">
                    1학년
                </Td>
                <Td width={654} height={56}>
                    <NumberInput name="volunteerTime1" onChange={handleVolunteerInfoDataChange} />
                    <Hour>시간</Hour>
                </Td>
            </Row>
            <Row>
                <Td width={162} height={56} option="SECONDARY">
                    1학년
                </Td>
                <Td width={654} height={56}>
                    <NumberInput name="volunteerTime2" onChange={handleVolunteerInfoDataChange} />
                    <Hour>시간</Hour>
                </Td>
            </Row>
            <Row>
                <Td width={162} height={56} option="SECONDARY">
                    1학년
                </Td>
                <Td width={654} height={56}>
                    <NumberInput name="volunteerTime3" onChange={handleVolunteerInfoDataChange} />
                    <Hour>시간</Hour>
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

const Hour = styled.p`
    ${font.p2}
    color: ${color.gray900};
    margin-left: 8px;
`;

export default VolunteerCalculator;
