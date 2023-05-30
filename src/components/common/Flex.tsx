import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
  gap: string;
  justifyContent?:
    | "none"
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-between";
  alignItems?: "none" | "center" | "flex-end" | "flex-start" | "space-between";
  width?: string;
  height?: string;
}

const Column = ({
  children,
  gap,
  justifyContent = "none",
  alignItems = "none",
  width,
  height,
}: PropsType) => {
  return (
    <StyledColumn style={{ gap, justifyContent, alignItems, width, height }}>
      {children}
    </StyledColumn>
  );
};

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = ({
  children,
  gap,
  justifyContent = "none",
  alignItems = "none",
  width,
}: PropsType) => {
  return (
    <StyledRow style={{ gap, justifyContent, alignItems, width }}>
      {children}
    </StyledRow>
  );
};

const StyledRow = styled.div`
  display: flex;
`;

export { Row, Column };
