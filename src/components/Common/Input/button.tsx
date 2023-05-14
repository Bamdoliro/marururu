import Input from "./input";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { ButtonInputPropsInterface } from "./interface";
import styled from "styled-components";

const ButtonInput = ({
  width = "360px",
  desc,
  placeholder,
  name,
  value,
  onChange,
  buttonText,
  buttonClick,
}: ButtonInputPropsInterface) => {
  return (
    <>
      {desc && <Desc>{desc}</Desc>}
      <StyledButtonInput style={{ width }}>
        <Input
          width="100%"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Button onClick={buttonClick}>{buttonText}</Button>
      </StyledButtonInput>
    </>
  );
};

export default ButtonInput;

export const StyledButtonInput = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const Button = styled.button`
  ${font.btn2};

  color: ${color.white};
  background-color: ${color.maruDefault};
  border-radius: 6px;
  width: 106px;
  height: 48px;

  &:hover {
    background-color: ${color.maruHigh};
  }
`;

const Desc = styled.p`
  ${font.context}
  color: ${color.gray700};
  padding-bottom: 8px;
`;
