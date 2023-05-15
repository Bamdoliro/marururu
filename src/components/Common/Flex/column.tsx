import { ReactNode } from "react";
import styled from "styled-components";

interface PropsInterface {
  children: ReactNode;
  gap: string;
  justifyContent: "center" | "flex-end" | "flex-start";
  alignItems: "center" | "flex-end" | "flex-start";
}
const FlexColumn = ({
  children,
  gap,
  justifyContent,
  alignItems,
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
`;
