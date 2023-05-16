import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { InputPropsType } from "./type";
import styled from "styled-components";
import Message from "./Message";
import { formatTime, timer } from "@/utils/timer";
import { useEffect, useState } from "react";

const TimerInput = ({
  width = "320px",
  placeholder,
  name,
  desc,
  value,
  type = "text",
  msg,
  onChange,
  maxLength,
}: InputPropsType) => {
  const [time, setTime] = useState(300);

  useEffect(() => {
    timer(setTime);
  }, []);

  return (
    <div style={{ width }}>
      {desc && <Desc>{desc}</Desc>}
      <StyledTimernput>
        <Input
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          maxLength={maxLength}
        />
        <Timer>{formatTime(time)}</Timer>
      </StyledTimernput>
      {msg && <Message>{msg}</Message>}
    </div>
  );
};

export default TimerInput;

const StyledTimernput = styled.div`
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

const Timer = styled.p`
  ${font.p3}
  color: ${color.red};
`;
