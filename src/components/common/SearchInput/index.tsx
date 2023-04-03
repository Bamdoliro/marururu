import * as S from "./style";
import Search from "assets/search.svg";
import { InputPropsType } from "types/common/input.type";

const SearchInput = ({
  width = "320px",
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}: InputPropsType) => {
  return (
    <S.SearchInput>
      <S.Img src={Search} />
      <S.Input
        style={{ width }}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
      />
    </S.SearchInput>
  );
};

export default SearchInput;
