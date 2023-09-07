'use client';

import { color } from '@maru/theme';
import { Column, Row, Text } from '@maru/ui';
import { flex, formatCreatedAt } from '@maru/utils';
import { styled } from 'styled-components';
import Status from '../Status/Status';

interface Props {
    start: string;
    place: string;
    applicationStartDate: string;
    applicationEndDate: string;
    status: string;
}

const ApplicationItem = ({
    start,
    place,
    applicationStartDate,
    applicationEndDate,
    status,
}: Props) => {
    return (
        <StyledApplicationItem>
            <Row gap={32} alignItems="center" justifyContent="space-between" width="100%">
                <Text fontType="H3" color={color.gray900}>
                    {formatCreatedAt(start)}
                </Text>
                <Status status={status} />
            </Row>
            <Column alignItems="flex-start">
                <Text fontType="p2" color={color.gray500}>
                    장소: {place}
                </Text>
                <Text fontType="p2" color={color.gray500}>
                    신청 기한: {applicationStartDate} ~ {applicationEndDate}
                </Text>
            </Column>
        </StyledApplicationItem>
    );
};

export default ApplicationItem;

const StyledApplicationItem = styled.div`
    width: calc(50% - 8px);
    height: 160px;
    padding: 24px 32px;
    ${flex({ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' })}
    border-radius: 12px;
    border: 1px solid ${color.gray200};
    cursor: pointer;
`;
