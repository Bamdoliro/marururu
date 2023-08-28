'use client';

import { color } from '@maru/theme';
import { Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';
import Status from '../status/Status';

interface Props {
    date: string,
    place: string,
    deadline: string,
    applicable: boolean,
    statusText: string
}

const ApplicationInfo = ({ date, place, deadline, applicable, statusText }: Props) => {
    return (
        <StyledApplicationInfo>
                <Row gap="32px" alignItems="center">
                    <Text fontType="H3" color={color.gray900}>
                        {date}
                    </Text>
                    <Status applicable={applicable} statusText={statusText} />
                </Row>
                <SpacetimeTextArea>
                    <Text fontType="p2" color={color.gray500}>
                        장소: {place}
                    </Text>
                    <Text fontType="p2" color={color.gray500}>
                        신청 기한: {deadline}
                    </Text>
                </SpacetimeTextArea>
        </StyledApplicationInfo>
    )
}

export default ApplicationInfo;

const StyledApplicationInfo = styled.div`
    width: 400px;
    height: 160px;
    padding: 24px 32px;
    ${flex({ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' })}
    border-radius: 12px;
    border: 1px solid ${color.gray200};
`;

const SpacetimeTextArea = styled.div`
    padding: 0px auto;
    ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
`;