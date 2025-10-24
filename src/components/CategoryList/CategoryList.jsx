import "../../styles/reset.css";
import React, { useState } from "react";
import {
  CategoryListContainer,
  CategoryListTitle,
  CategoryItem,
  CheckboxLabel,
  HiddenCheckbox,
  StyledCheckbox,
  Content,
} from "./CategoryList.styles.js";

function CategoryList({ selectedCategories = [], onSelectedCategories }) {
  const categories = [
    "프론트엔드",
    "백엔드",
    "안드로이드",
    "IOS",
    "임베디드",
    "정보보안",
    "인공지능",
    "디자인",
    "게임",
    "DevOps",
    "전공동아리",
    "창체동아리",
    "자율동아리",
    "기숙사",
    "학교",
    "DMS",
    "기타",
  ];

  const handleCategoryClick = (category) => {
    if (onSelectedCategories) {
      onSelectedCategories(category);
    }
  };

  return (
    <Content>
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
                <HiddenCheckbox type="checkbox" checked={isChecked} readOnly />
                <span>{category}</span>
                <StyledCheckbox $check={isChecked} />
              </CheckboxLabel>
            );
          })}
        </CategoryItem>
      </CategoryListContainer>
    </Content>
  );
}

export default CategoryList;
