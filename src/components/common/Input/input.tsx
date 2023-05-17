import styled from "styled-components";
import { font } from "@/styles/font";
import { color } from "@/styles/color";
import { InputPropsType } from "./type";
import Message from "./message";

const Input = ({
  width = "320px",
  desc,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  msg,
}: InputPropsType) => {
  return (
    <div style={{ width }}>
      {desc && <Desc>{desc}</Desc>}
      <StyledInput
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
      />
      {msg && <Message>{msg}</Message>}
    </div>
  );
};

export default Input;

const StyledInput = styled.input`
  ${font.p2}
  color: ${color.gray800};
  height: 48px;
  width: 100%;
  padding: 10px 16px;
  background-color: ${color.white};
  border: 1px solid ${color.gray400};
  border-radius: 6px;

  &::placeholder {
    color: ${color.gray500};
  }
  &:focus {
    border: 1px solid ${color.maruDefault};
    outline: 2px solid rgba(20, 112, 255, 0.25);
  }
`;

const Desc = styled.p`
  ${font.context}
  color: ${color.gray700};
  padding-bottom: 8px;
`;
