import React, { useState, useRef } from "react";
import {
  FormContainer,
  FormLayout,
  FormMain,
  TitleContainer,
  TitleInput,
  CategoryContainer,
  SectionTitle,
  CategoryInput,
  BodyContainer,
  BodyTextarea,
  SubmitButton,
  Sidebar,
  SidebarTitle,
  CategoryItem,
  CheckboxLabel,
  HiddenCheckbox,
  StyledCheckbox,
  Categories,
  CategoryTag,
} from "./PostEditForm.styles";

function PostEditForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [selectedMajors, setSelectedMajors] = useState([]); // 선택한 전공들 상태

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
  }); // 카테고리 체크 상태

  const handleCheckboxChange = (category) => {
    setCheckItem((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));

    // 선택된 전공들을 selectedMajors에 업데이트
    setSelectedMajors((prev) => {
      const newSelectedMajors = prev.includes(category)
        ? prev.filter((m) => m !== category)
        : [...prev, category];

      console.log("선택된 전공들:", newSelectedMajors);
      return newSelectedMajors;
    });
  };

  const handleSubmit = () => {
    console.log({
      title,
      category,
      body,
      selectedMajors,
    });
    // 여기에 폼 제출 로직 추가
  };

  const textarea = useRef();

  return (
    <FormContainer>
      <FormLayout>
        <FormMain>
          <TitleContainer>
            <TitleInput
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </TitleContainer>

          <CategoryContainer>
            <SectionTitle>카테고리</SectionTitle>
            <CategoryInput>
              {selectedMajors.length > 0 ? (
                <Categories>
                  {selectedMajors.map((category) => (
                    <CategoryTag key={category}>{category}</CategoryTag>
                  ))}
                </Categories>
              ) : (
                "카테고리를 선택해주세요"
              )}
            </CategoryInput>
          </CategoryContainer>

          <BodyContainer>
            <SectionTitle>본문</SectionTitle>
            <BodyTextarea
              ref={textarea}
              placeholder="본문을 추가해주세요"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                textarea.current.style.height = "auto";
                textarea.current.style.height =
                  textarea.current.scrollHeight + "px";
              }}
            />
          </BodyContainer>

          <SubmitButton onClick={handleSubmit}>완료</SubmitButton>
        </FormMain>

        <Sidebar>
          <SidebarTitle>카테고리 수정</SidebarTitle>
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
        </Sidebar>
      </FormLayout>
    </FormContainer>
  );
}

export default PostEditForm;
