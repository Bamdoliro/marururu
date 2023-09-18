import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface Props {
    label: string;
    data: string | number;
}

const DataBox = ({ label, data }: Props) => {
    return (
        <StyledDataBox>
            <Text fontType="H4" color={color.gray900}>
                {label}
            </Text>
            <DataUnderlineBox>
                <Text fontType="p2" color={color.gray900}>
                    {data}
                </Text>
            </DataUnderlineBox>
        </StyledDataBox>
    );
};

export default DataBox;

const StyledDataBox = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 16px;
    width: 604px;
    height: 122px;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid ${color.gray200};
    background: ${color.white};
`;

const DataUnderlineBox = styled.div`
    ${flex({ alignItems: 'flex-start' })}
    width: 360px;
    height: 30px;
    border-bottom: 1px solid ${color.gray200};
`;
