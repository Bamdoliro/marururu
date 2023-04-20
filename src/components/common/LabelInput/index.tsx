import { LabelInputPropsType } from "types/common/labelInput.type";
import Input from "components/common/Input";
import * as S from "./style";

const LabelInput = ({
  width = "360px",
  desc,
  placeholder,
  name,
  value,
  onChange,
  buttonText,
  onClick,
}: LabelInputPropsType) => {
  return (
    <S.Container style={{ width }}>
      {desc && <S.Desc>{desc}</S.Desc>}
      <Input
        width="100%"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <S.Button onClick={onClick}>{buttonText}</S.Button>
    </S.Container>
  );
};

export default LabelInput;
