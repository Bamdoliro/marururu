import Input from "./input";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { ButtonInputPropsInterface } from "./interface";
import styled from "styled-components";

const ButtonInput = ({
  width,
  desc,
  name,
  value,
  placeholder,
  onChange,
  buttonText,
  buttonClick,
}: ButtonInputPropsInterface) => {
  return (
    <div style={{ width }}>
      {desc && <Desc>{desc}</Desc>}
      <StyledButtonInput>
        <Input
          width="100%"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <Button onClick={buttonClick}>{buttonText}</Button>
      </StyledButtonInput>
    </div>
  );
};

export default ButtonInput;

export const StyledButtonInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const Button = styled.button`
  ${font.btn2};
  color: ${color.white};
  background-color: ${color.maruDefault};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  width: 68px;
  height: 48px;
  padding: 10px 16px;

  &:hover {
    background-color: ${color.maruHoverd};
  }
`;

const Desc = styled.p`
  ${font.context}
  color: ${color.gray700};
  padding-bottom: 8px;
`;
