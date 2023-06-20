import styled from "styled-components";
import { FlexPropsType } from "./type";

const Column = ({
  children,
  gap,
  justifyContent = "none",
  alignItems = "none",
  width,
  height,
}: FlexPropsType) => {
  return (
    <StyledColumn style={{ gap, justifyContent, alignItems, width, height }}>
      {children}
    </StyledColumn>
  );
};

export default Column;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
