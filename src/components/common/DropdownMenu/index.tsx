import * as S from "./style";
import ArrowUnderIcon from "assets/arrow_under.svg";
import ArrowTopIcon from "assets/arrow_top.svg";
import { useState } from "react";

interface PropsType {
  dropdownMenuDatas: string[];
  width?: string;
}

const DropdownMenu = ({ dropdownMenuDatas, width = "320px" }: PropsType) => {
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const [dropdownMenuText, setDropdownMenuText] =
    useState("옵션을 선택해 주세요");

  const clickedToggle = () => {
    setIsOpenDropdownMenu((prev) => !prev);
  };

  return (
    <S.DropdownMenu style={{ width }}>
      <S.DropdownMenuBox onClick={clickedToggle} isOpen={isOpenDropdownMenu}>
        {dropdownMenuText}
        <S.Img src={isOpenDropdownMenu ? ArrowUnderIcon : ArrowTopIcon} />
      </S.DropdownMenuBox>
      <S.DropdownMenuList isOpen={isOpenDropdownMenu}>
        {dropdownMenuDatas?.map((item, index) => (
          <S.DropdownMenuItem
            key={`dropdown ${index}`}
            onClick={() => {
              setDropdownMenuText(item);
              setIsOpenDropdownMenu(false);
            }}
          >
            {item}
          </S.DropdownMenuItem>
        ))}
      </S.DropdownMenuList>
    </S.DropdownMenu>
  );
};

export default DropdownMenu;
