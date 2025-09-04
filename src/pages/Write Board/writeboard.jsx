import { useState, useEffect } from "react";
import "../../styles/reset.css";
import {
  BoardContainer,
  BoardTitle,
  Boardfiler,
  Boardfilertitle,
  Content,
} from "../Board/board.styles.js";
import BoardList from "../../components/boardList/boardList.jsx";
import CategoryList from "../../components/CategoryList/CategoryList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

function MyBoard() {
  const [activeFilter, setActiveFilter] = useState("최신순");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  const pageSize = 10;
  const token = localStorage.getItem("accessToken");
  const accountId = localStorage.getItem("accountId");

  console.log("현재 저장된 토큰:", token);
  console.log("현재 accountId:", accountId);

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        console.log(`카테고리 제거: ${category}`);
        return prev.filter((item) => item !== category);
      } else {
        console.log(`카테고리 추가: ${category}`);
        return [...prev, category];
      }
    });
    setCurrentPage(1);
  };

  useEffect(() => {
    if (!token || !accountId) return;

    const fetchMyPosts = async () => {
      try {
        const query = new URLSearchParams();

        selectedCategories.forEach((v) => query.append("categories", v));

        query.append("orderBy", activeFilter === "최신순" ? "recent" : "like");
        query.append("offset", (currentPage - 1) * pageSize);
        query.append("limit", pageSize);

        const res = await fetch(
          `${
            import.meta.env.VITE_REACT_APP_API_BASE_URL
          }/user/${accountId}/list?${query.toString()}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.status === 401) {
          console.error("토큰이 만료되었거나 유효하지 않습니다.");
          alert("로그인이 필요합니다. 다시 로그인해주세요.");
          localStorage.removeItem("accessToken");
          window.location.href = "/login";
          return;
        }

        const data = await res.json();
        console.log("내 글 목록:", data);

        if (Array.isArray(data)) {
          setPosts(data);
          setTotalPages(Math.max(1, Math.ceil(data.length / pageSize)));
        } else {
          setPosts(data.posts || []);
          setTotalPages(
            Math.max(1, Math.ceil((data.totalCount || 0) / pageSize))
          );
        }
      } catch (error) {
        console.error(error);
        setPosts([]);
        setTotalPages(1);
      }
    };

    fetchMyPosts();
  }, [
    import.meta.env.VITE_REACT_APP_API_BASE_URL,
    token,
    accountId,
    selectedCategories,
    activeFilter,
    currentPage,
  ]);

  return (
    <>
      <Content>
        <BoardContainer>
          <BoardTitle>내가 작성한 글</BoardTitle>

          <Boardfiler>
            {["최신순", "추천순"].map((filter) => (
              <Boardfilertitle
                key={filter}
                $active={activeFilter === filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setCurrentPage(1);
                }}
              >
                {filter}
              </Boardfilertitle>
            ))}
          </Boardfiler>

          <BoardList
            sort={activeFilter}
            page={currentPage}
            pageSize={pageSize}
            token={token}
            selectedCategories={selectedCategories}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            groupSize={10}
          />
        </BoardContainer>

        <CategoryList
          selectedCategories={selectedCategories}
          onSelectedCategories={handleCategoryToggle}
        />
      </Content>
    </>
  );
}

export default MyBoard;
