import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import Category from "./Category";

const CategoryBar = () => {
  return (
    <StyledCategoryBar>
      <Category isClicked={true}>입학 과정</Category>
      <Category isClicked={false}>입학 과정</Category>
    </StyledCategoryBar>
  );
};

export default CategoryBar;

const StyledCategoryBar = styled.div`
  ${font.context}
  color: ${color.gray900};
  height: 36px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 36px 0px 40px;
  cursor: pointer;
`;
