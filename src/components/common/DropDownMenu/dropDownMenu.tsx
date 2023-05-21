import { font } from "@/styles/font";
import { useState } from "react";
import { color } from "@/styles/color";
import styled, { css } from "styled-components";
import ArrowDropDownMenu from "../Icon/ArrowDropDownMenu";
import { DropdownItemType } from "./type";

interface PropsType {
  desc: string;
  dropdownMenuDatas: DropdownItemType[];
  width: string;
}

const DropDownMenu = ({
  desc,
  dropdownMenuDatas,
  width = "320px",
}: PropsType) => {
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [dropdownMenuText, setDropdownMenuText] =
    useState("옵션을 선택해 주세요");

  const clickedMenu = (item: DropdownItemType) => {
    setDropdownMenuText(item.dropdownItemText);
    setIsOpenDropdownMenu(false);
  };

  const clickedToggle = () => {
    setIsOpenDropdownMenu((prev) => !prev);
  };
  return (
    <StryledDropdownMenu style={{ width }}>
      <Desc>{desc}</Desc>
      <DropdownMenuBox onClick={clickedToggle} isOpen={isOpenDropdownMenu}>
        <DropdownMenuText>{dropdownMenuText}</DropdownMenuText>
        <ArrowDropDownMenu />
      </DropdownMenuBox>
      <DropdownMenuListBox isOpen={isOpenDropdownMenu}>
        <DropdownMenuList>
          {dropdownMenuDatas?.map((item, index) => (
            <DropdownMenuItem
              key={`dropdown ${index}`}
              onClick={() => clickedMenu(item)}
            >
              {item.dropdownItemText}
            </DropdownMenuItem>
          ))}
        </DropdownMenuList>
      </DropdownMenuListBox>
    </StryledDropdownMenu>
  );
};

export default DropDownMenu;

const StryledDropdownMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 8px;
`;

const Desc = styled.p`
  ${font.context}
  color: ${color.gray700};
`;

const DropdownMenuBox = styled.div<{ isOpen: boolean }>`
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

const DropdownMenuText = styled.p`
  ${font.p2}
  color: ${color.gray500};
`;

const DropdownMenuListBox = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const DropdownMenuList = styled.div`
  z-index: 1;
  position: absolute;
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
