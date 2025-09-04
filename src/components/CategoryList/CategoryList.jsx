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

function CategoryList({ selectedCategories = [], onSelectedCategories }) {
  const categories = [
    "전공", "기숙사", "학생", "선생님",
    "동아리", "논란", "프로젝트",
    "창체동아리", "자율동아리", "밴드부",
    "배구부", "기타",
  ];

  const handleCategoryClick = (category) => {
    if (onSelectedCategories) {
      onSelectedCategories(category);
    }
  };

  

  return (
    <>
      <CategoryListContainer>
        <CategoryListTitle>카테고리</CategoryListTitle>

        <CategoryItem>
          {categories.map((category) => {
            const isChecked = selectedCategories.includes(category);
            return (
              <CheckboxLabel 
                key={category} 
                $check={isChecked}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(category);
                }}
              >
                <HiddenCheckbox
                  type="checkbox"
                  checked={isChecked}
                  readOnly
                />
                <span>{category}</span>
                <StyledCheckbox $check={isChecked} />
              </CheckboxLabel>
            );
          })}
        </CategoryItem>
      </CategoryListContainer>
    </>
  );
}

export default CategoryList;