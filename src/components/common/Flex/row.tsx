import { ReactNode } from "react";
import styled from "styled-components";
import { FlexPropsType } from "./type";

const Row = ({
  children,
  gap,
  justifyContent = "none",
  alignItems = "none",
  width,
}: FlexPropsType) => {
  return (
    <StyledRow style={{ gap, justifyContent, alignItems, width }}>
      {children}
    </StyledRow>
  );
};

export default Row;

const StyledRow = styled.div`
  display: flex;
`;
