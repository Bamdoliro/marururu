import { ReactNode } from "react";
import styled from "styled-components";

interface PropsInterface {
  children: ReactNode;
  gap: string;
  justifyContent?:
    | "none"
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-between";
  alignItems?: "none" | "center" | "flex-end" | "flex-start" | "space-between";
}

const Column = ({
  children,
  gap,
  justifyContent = "none",
  alignItems = "none",
}: PropsInterface) => {
  return (
    <StyledColumn style={{ gap, justifyContent, alignItems }}>
      {children}
    </StyledColumn>
  );
};

export default Column;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
