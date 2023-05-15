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

const FlexColumn = ({
  children,
  gap,
  justifyContent = "none",
  alignItems = "none",
}: PropsInterface) => {
  return (
    <StyledFlexColumn style={{ gap, justifyContent, alignItems }}>
      {children}
    </StyledFlexColumn>
  );
};

export default FlexColumn;

const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
