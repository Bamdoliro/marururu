import { InputPropsType } from "types/common/input.type";
import * as S from "./style";

const Input = ({
  width = "320px",
  desc,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}: InputPropsType) => {
  return (
    <>
      {desc && <S.Desc>{desc}</S.Desc>}
      <S.Input
        style={{ width }}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
      />
    </>
  );
};

export default Input;
