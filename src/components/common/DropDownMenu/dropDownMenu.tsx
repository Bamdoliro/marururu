import { font } from "@/styles/font";
import { useState } from "react";
import { color } from "@/styles/color";
import styled, { css } from "styled-components";
import ArrowDropDownMenu from "../Icon/ArrowDropDownMenu";

interface DropdownItemType {
  dropdownItemText: string;
}

interface PropsType {
  desc: string;
  dropdownMenuData: DropdownItemType[];
  width?: string;
  placeholder?: string;
}

const DropdownMenu = ({
  desc,
  dropdownMenuData,
  width = "320px",
  placeholder = "옵션을 선택해 주세요",
}: PropsType) => {
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [selectedItemText, setSelectedItemText] = useState(placeholder);

  const clickedMenu = (item: DropdownItemType) => {
    setSelectedItemText(item.dropdownItemText);
    setIsOpenDropdownMenu(false);
  };

  const clickedToggle = () => {
    setIsOpenDropdownMenu((prev) => !prev);
  };
  return (
    <div style={{ width }}>
      <Desc>{desc}</Desc>
      <StyledDropdownMenu onClick={clickedToggle} isOpen={isOpenDropdownMenu}>
        <SelectedItemText>{selectedItemText}</SelectedItemText>
        <ArrowDropDownMenu />
      </StyledDropdownMenu>
      <DropdownMenuListBox isOpen={isOpenDropdownMenu}>
        <DropdownMenuList>
          {dropdownMenuData?.map((item, index) => (
            <DropdownMenuItem
              key={`dropdown ${index}`}
              onClick={() => clickedMenu(item)}
            >
              {item.dropdownItemText}
            </DropdownMenuItem>
          ))}
        </DropdownMenuList>
      </DropdownMenuListBox>
    </div>
  );
};

export default DropdownMenu;

const Desc = styled.p`
  ${font.context}
  color: ${color.gray700};
  margin-bottom: 8px;
`;

const StyledDropdownMenu = styled.div<{ isOpen: boolean }>`
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

const DropdownMenuListBox = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const DropdownMenuList = styled.div`
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

const DropdownMenuItem = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  width: 100%;
  height: 48px;
  cursor: pointer;
  &:hover {
    background-color: ${color.gray200};
  }
`;
