import { VolunteerInfo } from '@/types/form/client';
import { color, font } from '@maru/theme';
import { Column, NumberInput, Row, Td, Th } from '@maru/ui';
import { flex } from '@maru/utils';
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
        <StyledVolunteerCalculator>
            <Desc>
                *2023.09.30까지의 봉사시간을 기재해주세요. 졸업생은 졸업일 기준으로 기재해주세요.
            </Desc>
            <Column>
                <Row>
                    <Th borderTopLeftRadius={12} width={162} height={56}>
                        학년
                    </Th>
                    <Th borderTopRightRadius={12} width={654} height={56}>
                        봉사시간
                    </Th>
                </Row>
                <Row>
                    <Td width={162} height={56} option="SECONDARY">
                        1학년
                    </Td>
                    <Td width={654} height={56}>
                        <NumberInput
                            name="volunteerTime1"
                            onChange={handleVolunteerInfoDataChange}
                        />
                        <Hour>시간</Hour>
                    </Td>
                </Row>
                <Row>
                    <Td width={162} height={56} option="SECONDARY">
                        1학년
                    </Td>
                    <Td width={654} height={56}>
                        <NumberInput
                            name="volunteerTime2"
                            onChange={handleVolunteerInfoDataChange}
                        />
                        <Hour>시간</Hour>
                    </Td>
                </Row>
                <Row>
                    <Td borderBottomLeftRadius={12} width={162} height={56} option="SECONDARY">
                        1학년
                    </Td>
                    <Td borderBottomRightRadius={12} width={654} height={56}>
                        <NumberInput
                            name="volunteerTime3"
                            onChange={handleVolunteerInfoDataChange}
                        />
                        <Hour>시간</Hour>
                    </Td>
                </Row>
            </Column>
        </StyledVolunteerCalculator>
    );
};

export default VolunteerCalculator;

const StyledVolunteerCalculator = styled.div`
    ${flex({ flexDirection: 'column' })};
    gap: 16px;
    width: 100%;
`;

const Hour = styled.p`
    ${font.p2}
    color: ${color.gray900};
    margin-left: 8px;
`;

const Desc = styled.p`
    color: ${color.red};
    ${font.p3}
`;
