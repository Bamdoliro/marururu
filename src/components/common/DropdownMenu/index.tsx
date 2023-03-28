import * as S from "./style";
import ArrowUnder from "assets/arrow_under.svg";
import ArrowTop from "assets/arrow_top.svg";
import { useState } from "react";

interface DropdownItemType {
  dropdownItemText: string;
}

interface PropsType {
  dropdownMenuDatas: DropdownItemType[];
  width: string;
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
        <S.DropdownMenuText>{dropdownMenuText}</S.DropdownMenuText>
        <S.Img src={isOpenDropdownMenu ? ArrowUnder : ArrowTop} />
      </S.DropdownMenuBox>
      <S.DropdownMenuList isOpen={isOpenDropdownMenu}>
        {dropdownMenuDatas?.map((item, index) => (
          <S.DropdownMenuItem
            key={`dropdown ${index}`}
            onClick={() => setDropdownMenuText(item.dropdownItemText)}
          >
            {item.dropdownItemText}
          </S.DropdownMenuItem>
        ))}
      </S.DropdownMenuList>
    </S.DropdownMenu>
  );
};

export default DropdownMenu;
