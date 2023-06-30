import { useState } from 'react';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled, { css } from 'styled-components';
import TopArrowIcon from '../../Icons/TopArrow';
import BottomArrowIcon from '../../Icons/BottomArrow';

interface DropdownItemType {
    dropdownItem: string;
}

interface PropsType {
    label: string;
    DropdownData: DropdownItemType[];
    width?: string;
    placeholder?: string;
}

const Dropdown = ({
    label,
    DropdownData,
    width = '320px',
    placeholder = '옵션을 선택해 주세요',
}: PropsType) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(placeholder);

    const clickedMenu = (item: DropdownItemType) => {
        setSelectedItem(item.dropdownItem);
        setIsOpen(false);
    };

    const clickToggle = () => setIsOpen((prev) => !prev);

    return (
        <div style={{ width }}>
            <Label>{label}</Label>
            <StyledDropdown onClick={clickToggle} isOpen={isOpen}>
                <SelectedItemText>{selectedItem}</SelectedItemText>
                {isOpen ? <TopArrowIcon /> : <BottomArrowIcon />}
            </StyledDropdown>
            <DropdownListBox isOpen={isOpen}>
                <DropdownList>
                    {DropdownData?.map((item, index) => (
                        <DropdownItem key={`dropdown ${index}`} onClick={() => clickedMenu(item)}>
                            {item.dropdownItem}
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

const StyledDropdown = styled.div<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 48px;
    width: 100%;
    padding: 10px 16px;

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
