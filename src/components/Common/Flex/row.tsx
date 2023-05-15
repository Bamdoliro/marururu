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

const Row = ({
  children,
  gap,
  justifyContent = "none",
  alignItems = "none",
}: PropsInterface) => {
  return (
    <StyledRow style={{ gap, justifyContent, alignItems }}>
      {children}
    </StyledRow>
  );
};

export default Row;

const StyledRow = styled.div`
  display: flex;
  width: 100%;
`;
