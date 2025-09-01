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
  CheckboxGrid,
  CheckboxItem,
} from "./PostForm.styles";

function PostForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [selectedMajors, setSelectedMajors] = useState([]);

  const majorOptions = [
    "전공",
    "기숙사",
    "학생",
    "선생님",
    "동아리",
    "프로젝트",
    "창체동아리",
    "자율동아리",
    "밴드부",
    "배구부",
    "기타",
  ];

  const handleMajorChange = (major) => {
    setSelectedMajors((prev) =>
      prev.includes(major) ? prev.filter((m) => m !== major) : [...prev, major]
    );
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
              onChange={(e) => setCategory(e.target.value)}
            />
          </TitleContainer>

          <CategoryContainer>
            <SectionTitle>카테고리</SectionTitle>
            <CategoryInput
              type="text"
              placeholder="카테고리를 추가해주세요"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
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
          <SidebarTitle>추가할 전공</SidebarTitle>
          <CheckboxGrid>
            {majorOptions.map((major, index) => (
              <CheckboxItem key={index}>
                <input
                  type="checkbox"
                  checked={selectedMajors.includes(major)}
                  onChange={() => handleMajorChange(major)}
                />
                {major}
              </CheckboxItem>
            ))}
          </CheckboxGrid>
        </Sidebar>
      </FormLayout>
    </FormContainer>
  );
}

export default PostForm;
