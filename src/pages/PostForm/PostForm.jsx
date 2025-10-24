import React, { useState, useRef, useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
  const [body, setBody] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]); // 선택한 전공들 상태
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checkItem, setCheckItem] = useState({
    프론트엔드: false,
    백엔드: false,
    안드로이드: false,
    IOS: false,
    임베디드: false,
    정보보안: false,
    인공지능: false,
    디자인: false,
    게임: false,
    DevOps: false,
    전공동아리: false,
    창체동아리: false,
    자율동아리: false,
    기숙사: false,
    학교: false,
    DMS: false,
    기타: false,
  }); // 카테고리 체크 상태

  const editorRef = useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  // 체크박스 변경 핸들러
  const handleCheckboxChange = useCallback(
    (category) => {
      setCheckItem((prev) => {
        // 3개 초과 선택 방지
        const isAlreadyChecked = prev[category];
        if (!isAlreadyChecked && selectedCategories.length >= 3) {
          alert("카테고리는 3개까지만 선택할 수 있습니다.");
          return prev;
        }

        const newCheckItem = { ...prev, [category]: !isAlreadyChecked };
        setSelectedCategories(
          Object.keys(newCheckItem).filter((key) => newCheckItem[key])
        );
        return newCheckItem;
      });
    },
    [selectedCategories]
  );

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
      console.error("Editor error: ", error);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    setLoading(true);
    setError("");

    const postData = {
      title: title,
      categories: selectedCategories,
      contents: body,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/notice-board/post`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        switch (response.status) {
          case 400:
            if (!title || selectedCategories.length === 0 || !body) {
              if (!title) throw new Error("제목을 입력하세요.");
              else if (selectedCategories.length === 0)
                throw new Error("카테고리를 입력하세요.");
              else if (!body) throw new Error("본문을 입력하세요.");
            }
            throw new Error("입력 정보를 다시 확인해 주세요.");
          case 401:
            localStorage.removeItem("accessToken");
            alert("로그인이 필요합니다.");
            window.location.href = "/login";
            return;
          case 403:
            throw new Error("게시글을 작성할 권한이 없습니다.");
          case 404:
            throw new Error("페이지를 찾을 수 없습니다.");
          case 409:
            throw new Error(
              "이미 생성되었거나, 동시 생성 요청이 발생한 게시물입니다."
            );
          case 429:
            throw new Error("잠시 후 다시 시도해 주세요.");
          case 500:
            throw new Error(
              "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
            );
          default:
            throw new Error(
              `알 수 없는 오류가 발생했습니다. (HTTP ${response.status})`
            );
        }
      }
      navigate("/mypage/:accountId/list");
    } catch (error) {
      alert(error.message);
      console.error("게시글 생성 에러:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <FormLayout>
        <form onSubmit={handleSubmit}>
          <FormMain>
            <TitleContainer>
              <TitleInput
                name="title"
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

            <SubmitButton type="submit" disabled={loading}>
              {loading ? "생성 중..." : "완료"}
            </SubmitButton>
          </FormMain>
        </form>

        <Sidebar>
          <SidebarTitle>카테고리 선택</SidebarTitle>
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
