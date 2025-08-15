import "../../styles/reset.css";
import React, { useState } from "react";
import {
  CategoryListContainer,
  CategoryListTitle,
  CategoryItem,
  CheckboxLabel,
  HiddenCheckbox,
  StyledCheckbox,
} from "./CategoryList.styles.js";

function CategoryList() {
  const [checkItem, setCheckItem] = useState({
    전공: false,
    기숙사: false,
    학생: false,
    선생님: false,
    동아리: false,
    논란: false,
    프로젝트: false,
    창체동아리: false,
    자율동아리: false,
    밴드부: false,
    배구부: false,
    기타: false,
  });

  const handleCheckboxChange = (name) => {
    setCheckItem((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      <CategoryListContainer>
        <CategoryListTitle>카테고리</CategoryListTitle>

        <CategoryItem>
          {Object.keys(checkItem).map((category) => (
            <CheckboxLabel key={category} check={checkItem[category]}>
              <HiddenCheckbox
                type="checkbox"
                checked={checkItem[category]}
                onChange={() => handleCheckboxChange(category)}
              />
              <span>{category}</span>
              <StyledCheckbox check={checkItem[category]} />
            </CheckboxLabel>
          ))}
        </CategoryItem>

      </CategoryListContainer>
    </>
  );
}

export default CategoryList;
