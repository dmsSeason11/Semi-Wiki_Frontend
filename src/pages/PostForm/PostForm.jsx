import React, { useState } from "react";
import {
  FormContainer,
  FormLayout,
  ContentPanel,
  TitleSection,
  SectionTitle,
  TitleInput,
  CategorySection,
  CategoryInput,
  BodySection,
  BodyTextarea,
  CompleteButton,
  Sidebar,
  SidebarTitle,
  CheckboxGrid,
  CheckboxItem,
  FormLayout,
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

  return (
    <FormContainer>
      <FormLayout>
        <ContentPanel>
          <TitleSection>
            <TitleInput
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </TitleSection>

          <CategoryCo>
            <SectionTitle>카테고리</SectionTitle>
            <CategoryInput
              type="text"
              placeholder="카테고리를 추가해주세요"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </CategorySection>

          <BodySection>
            <SectionTitle>본문</SectionTitle>
            <BodyTextarea
              placeholder="본문을 추가해주세요"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </BodySection>

          <CompleteButton onClick={handleSubmit}>완료</CompleteButton>
        </ContentPanel>

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
