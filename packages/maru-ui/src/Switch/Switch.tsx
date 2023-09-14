import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { Dispatch, SetStateAction } from 'react';
import { css, styled } from 'styled-components';

interface Props {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    items: { name: string; value: string }[];
}

const Switch = ({ items, value, setValue }: Props) => {
    return (
        <StyledSwitch>
            {items.map((item) => (
                <SwitchButton $active={item.value === value} onClick={() => setValue(item.value)}>
                    {item.name}
                </SwitchButton>
            ))}
        </StyledSwitch>
    );
};

export default Switch;

const StyledSwitch = styled.div`
    ${flex({ alignItems: 'center' })};
    gap: 8px;
    padding: 8px;
    height: 54px;
    border-radius: 16px;
    background-color: ${color.gray100};
`;

const SwitchButton = styled.button<{ $active: boolean }>`
    ${font.context}
    padding: 8px 20px;
    height: 100%;
    border-radius: 8px;
    color: ${color.gray600};

    ${(props) =>
        props.$active &&
        css`
            background-color: ${color.maruDefault};
            color: ${color.white};
        `}
`;
