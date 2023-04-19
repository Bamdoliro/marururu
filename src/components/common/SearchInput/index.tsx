import * as S from "./style";
import SearchIcon from "assets/search.svg";
import { InputPropsType } from "types/common/input.type";
import Icon from "components/common/Icon";

const SearchInput = ({
  width = "320px",
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}: InputPropsType) => {
  return (
    <S.SearchInput style={{ width }}>
      <Icon src={SearchIcon} />
      <S.Input
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
