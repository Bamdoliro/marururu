import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
  isClicked: boolean;
}

const Category = ({ children, isClicked }: PropsType) => {
  return <StyledCategory isClicked={isClicked}>{children}</StyledCategory>;
};

export default Category;

const StyledCategory = styled.span<{ isClicked: Boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0px 14px;
  border-radius: 25px;
  color: ${({ isClicked }) => (isClicked ? color.maruDefault : color.gray900)};
  background-color: ${({ isClicked }) =>
    isClicked ? "#eff5ff" : color.gray100};
`;
