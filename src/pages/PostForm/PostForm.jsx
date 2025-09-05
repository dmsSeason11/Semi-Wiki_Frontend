import React, { useState, useRef, useCallback } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
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
  StyledBodyWrapper,
  SubmitButton,
  Sidebar,
  SidebarTitle,
  CategoryItem,
  CheckboxLabel,
  HiddenCheckbox,
  StyledCheckbox,
  Categories,
  CategoryTag,
} from "./PostForm.styles";
import colors from "../../styles/color";

function PostForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]); // 선택한 전공들 상태
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

  const editorRef = useRef();

  const handleCheckboxChange = (category) => {
    setCheckItem((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));

    // 선택된 전공들을 selectedCategories에 업데이트
    setSelectedCategories((prev) => {
      const newSelectedCategories = prev.includes(category)
        ? prev.filter((m) => m !== category)
        : [...prev, category];
      return newSelectedCategories;
    });
  };

  const handleEditorChange = useCallback(() => {
    try {
      if (editorRef.current) {
        const editorInstance = editorRef.current.getInstance();
        if (editorInstance) {
          const markdownContent = editorInstance.getMarkdown();
          setBody(markdownContent);
        }
      }
    } catch (error) {
      console.error("Editor change error: ", error);
    }
  }, []);

  const handleSubmit = async () => {
    const postData = {
      title: title,
      categories: selectedCategories,
      contents: body,
    };

    console.log(postData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/post`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("잘못된 요청입니다.");
        }
        if (response.status === 401) {
          throw new Error("유효하지 않은 사용자입니다.");
        }
        if (response.status === 409) {
          throw new Error(
            "이미 생성되었거나 동시 생성 요청이 발생한 게시물입니다."
          );
        }
        throw new Error(
          `알 수 없는 오류가 발생했습니다. (상태 코드: ${response.status}`
        );
      }
    } catch (error) {
      alert("게시물 생성을 실패했습니다. 다시 시도해주세요.");
    }
  };

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
              {selectedCategories.length > 0 ? (
                <Categories>
                  {selectedCategories.map((category) => (
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
            <StyledBodyWrapper>
              <Editor
                ref={editorRef}
                initialEditType="wysiwyg"
                initialValue="본문을 추가해주세요"
                height="577px"
                previewStyle="none"
                hideModeSwitch={true} // 모드 전환 버튼 숨기기
                useCommandShortcut={false} // 단축키 비활성화
                onChange={handleEditorChange}
              />
            </StyledBodyWrapper>
          </BodyContainer>

          <SubmitButton onClick={handleSubmit}>완료</SubmitButton>
        </FormMain>

        <Sidebar>
          <SidebarTitle>추가할 전공</SidebarTitle>
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

export default PostForm;
