import * as S from "./style";
import ArrowUnder from "assets/arrow_under.svg";
import ArrowTop from "assets/arrow_top.svg";
import { useState } from "react";

interface DropdownItemType {
  dropdownItemText: string;
}

interface PropsType {
  dropdownMenuDatas: DropdownItemType[];
}

const DropdownMenu = ({ dropdownMenuDatas }: PropsType) => {
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);

  const clickedToggle = () => {
    setIsOpenDropdownMenu((prev) => !prev);
  };

  return (
    <S.DropdownMenu>
      <S.DropdownMenuBox onClick={clickedToggle}>
        <S.DropdownMenuText>옵션을 선택하세요</S.DropdownMenuText>
        <S.Img src={isOpenDropdownMenu ? ArrowUnder : ArrowTop} />
      </S.DropdownMenuBox>
      <S.DropdownMenuList isOpen={isOpenDropdownMenu}>
        {dropdownMenuDatas?.map((item, index) => (
          <S.DropdownMenuItem key={`dropdown ${index}`}>
            {item.dropdownItemText}
          </S.DropdownMenuItem>
        ))}
      </S.DropdownMenuList>
    </S.DropdownMenu>
  );
};

export default DropdownMenu;
