import { ReactNode } from "react";
import styled from "styled-components";

interface PropsInterface {
  children: ReactNode;
  gap: string;
  justifyContent?: "none" | "center" | "flex-end" | "flex-start";
  alignItems?: "none" | "center" | "flex-end" | "flex-start";
}

const FlexRow = ({
  children,
  gap,
  justifyContent = "none",
  alignItems = "none",
}: PropsInterface) => {
  return (
    <StyledFlexRow style={{ gap, justifyContent, alignItems }}>
      {children}
    </StyledFlexRow>
  );
};

export default FlexRow;

const StyledFlexRow = styled.div`
  display: flex;
`;
