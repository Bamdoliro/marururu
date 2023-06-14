import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { useState } from "react";
import styled from "styled-components";
import Category from "./Category";

const CATEGORY_ITEM_DATA = [
  {
    id: 0,
    name: "입학 과정",
  },
  {
    id: 1,
    name: "기숙사",
  },
];

const CategoryBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <StyledCategoryBar>
      {CATEGORY_ITEM_DATA.map((item) => (
        <Category
          key={item.id}
          isSelected={selectedCategory === item.id}
          onClick={() => setSelectedCategory(item.id)}
        >
          {item.name}
        </Category>
      ))}
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
