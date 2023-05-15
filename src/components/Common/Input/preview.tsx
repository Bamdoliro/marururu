import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { InputPropsInterface } from "./interface";
import { useState } from "react";
import styled from "styled-components";
import VisbilityOn from "../Icon/VisibilityOn";
import VisbilityOff from "../Icon/VisibilityOff";

const PreviewInput = ({
  width = "320px",
  placeholder,
  name,
  desc,
  value,
  msg,
  onChange,
}: InputPropsInterface) => {
  const [isPreview, setIsPreview] = useState(false);

  const togglePreview = () => setIsPreview((prev) => !prev);

  return (
    <div style={{ width }}>
      {desc && <Desc>{desc}</Desc>}
      <StyledPreviewInput>
        <Input
          onChange={onChange}
          placeholder={placeholder}
          type={isPreview ? "text" : "password"}
          name={name}
          value={value}
        />
        {isPreview ? (
          <VisbilityOn cursor="pointer" onClick={togglePreview} />
        ) : (
          <VisbilityOff cursor="pointer" onClick={togglePreview} />
        )}
      </StyledPreviewInput>
      {msg && <Message>{msg}</Message>}
    </div>
  );
};

export default PreviewInput;

const StyledPreviewInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  height: 48px;
  padding: 10px 16px;
  background-color: ${color.white};
  border: 1px solid ${color.gray400};
  border-radius: 6px;

  &:focus-within {
    border: 1px solid ${color.maruDefault};
    outline: 2px solid rgba(20, 112, 255, 0.25);
  }
`;

const Input = styled.input`
  ${font.p2}
  color: ${color.gray800};
  width: 100%;
  height: 100%;

  &::placeholder {
    color: ${color.gray500};
  }
`;

const Desc = styled.p`
  ${font.context}
  color: ${color.gray700};
  padding-bottom: 8px;
`;

const Message = styled.p`
  font-size: ${font.p3};
  color: ${color.gray500};
  margin-top: 4px;
`;
