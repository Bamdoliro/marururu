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
}

const Row = ({
  children,
  gap,
  justifyContent = "none",
  alignItems = "none",
}: PropsType) => {
  return (
    <StyledRow style={{ gap, justifyContent, alignItems }}>
      {children}
    </StyledRow>
  );
};

export default Row;

const StyledRow = styled.div`
  display: flex;
`;
