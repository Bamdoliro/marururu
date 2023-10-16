import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

type LengthType = 'SHORT' | 'LONG';

interface Props {
    label: string;
    data: string | number;
    lengthType?: LengthType;
}

const DataBox = ({ label, data, lengthType = 'SHORT' }: Props) => {
    return (
        <StyledDataBox lengthType={lengthType}>
            <Text fontType="H4" color={color.gray900}>
                {label}
            </Text>
            <DataUnderlineBox lengthType={lengthType}>
                <Text fontType="p2" color={color.gray900} whiteSpace="normal">
                    {data}
                </Text>
            </DataUnderlineBox>
        </StyledDataBox>
    );
};

export default DataBox;

const StyledDataBox = styled.div<{ lengthType: LengthType }>`
    ${flex({ flexDirection: 'column' })}
    gap: 16px;
    min-width: 604px;
    max-width: 1232px;
    width: ${(props) => (props.lengthType === 'SHORT' ? '604px' : 'fit-content')};
    min-height: 122px;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid ${color.gray200};
    background: ${color.white};
`;

const DataUnderlineBox = styled.div<{ lengthType: LengthType }>`
    ${flex({ alignItems: 'flex-start' })}
    width: ${(props) => (props.lengthType === 'SHORT' ? '360px' : '100%')};
    padding-bottom: 4px;
    border-bottom: 1px solid ${color.gray200};
`;
