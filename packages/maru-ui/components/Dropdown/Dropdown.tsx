import { CSSProperties, useState } from 'react';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled, { css } from 'styled-components';
import TopArrowIcon from '../../Icons/TopArrow';
import BottomArrowIcon from '../../Icons/BottomArrow';

type DropdownSizeOption = 'MEDIUM' | 'SMALL';

interface PropsType {
    label?: string;
    data: string[];
    width?: CSSProperties['width'];
    size?: DropdownSizeOption;
    placeholder?: string;
}

const Dropdown = ({ label, data, width = '320px', placeholder, size = 'MEDIUM' }: PropsType) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(placeholder);

    const clickedMenu = (item: string) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    const clickToggle = () => setIsOpen((prev) => !prev);

    return (
        <div style={{ width }}>
            {label && <Label>{label}</Label>}
            <StyledDropdown size={size} onClick={clickToggle} isOpen={isOpen}>
                <SelectedItemText>{selectedItem}</SelectedItemText>
                {isOpen ? <TopArrowIcon /> : <BottomArrowIcon />}
            </StyledDropdown>
            <DropdownListBox isOpen={isOpen}>
                <DropdownList>
                    {data?.map((item, index) => (
                        <DropdownItem key={`dropdown ${index}`} onClick={() => clickedMenu(item)}>
                            {item}
                        </DropdownItem>
                    ))}
                </DropdownList>
            </DropdownListBox>
        </div>
    );
};

export default Dropdown;

const Label = styled.p`
    ${font.context}
    color: ${color.gray700};
    padding-bottom: 8px;
`;

const StyledDropdown = styled.div<{ isOpen: boolean; size: DropdownSizeOption }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${color.white};
    border-radius: 6px;
    cursor: pointer;

    ${({ isOpen }) =>
        isOpen
            ? css`
                  border: 1px solid ${color.maruDefault};
                  outline: 2px solid rgba(20, 112, 255, 0.25);
              `
            : css`
                  border: 1px solid ${color.gray400};
              `};

    ${(props) =>
        props.size === 'MEDIUM'
            ? css`
                  height: 48px;
                  padding: 10px 16px;
              `
            : css`
                  height: 40px;
                  padding: 10px 10px 10px 16px;
              `}
`;

const SelectedItemText = styled.p`
    ${font.p2}
    color: ${color.gray500};
`;

const DropdownListBox = styled.div<{ isOpen: boolean }>`
    position: relative;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const DropdownList = styled.div`
    z-index: 1;
    position: absolute;
    margin-top: 8px;
    padding: 8px 0px;
    width: 100%;
    background-color: ${color.white};
    border: 1px solid ${color.gray200};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
`;

const DropdownItem = styled.button`
    ${flex({ alignItems: 'center' })}
    padding: 10px 16px;
    width: 100%;
    height: 48px;
    cursor: pointer;
    &:hover {
        background-color: ${color.gray200};
    }
`;
