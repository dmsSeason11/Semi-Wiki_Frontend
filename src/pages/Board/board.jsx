import { useState, useEffect } from "react";
import "../../styles/reset.css";
import {
  BoardContainer,
  BoardTitle,
  Boardfiler,
  Boardfilertitle,
  Content,
} from "./board.styles.js";
import BoardList from "../../components/boardList/boardList.jsx";
import CategoryList from "../../components/CategoryList/CategoryList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

function Board() {
  const [activeFilter, setActiveFilter] = useState("최신순");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const pageSize = 2;
  const token = localStorage.getItem("accessToken");

  console.log("현재 저장된 토큰:", token);

  const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  // 카테고리 토글 함수
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

  // 페이지 1로 초기화
  setCurrentPage(1);
  console.log("페이지 1로 초기화");
  };


  // 게시판 전체 글 개수 가져오기
  useEffect(() => {
    if (!token) return;

    const fetchTotalCount = async () => {
      try {
        const query = new URLSearchParams();

        selectedCategories.forEach((v) => query.append("categories", v));

        const res = await fetch(`${API_BASE}/notice-board/count?${query.toString()}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (res.status === 401) {
          console.error("토큰이 만료되었거나 유효하지 않습니다.");
          alert("로그인이 필요합니다. 다시 로그인해주세요.");
          localStorage.removeItem("accessToken");
          window.location.href = "/login";
          return;
        }

        const total = await res.json() || 0;
        console.log("총 게시글 수:", total, " / 총 페이지:", Math.ceil(total / pageSize));
        setTotalPages(Math.max(1, Math.ceil(total / pageSize)));
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalCount();
  }, [API_BASE, pageSize, token, selectedCategories]);

  return (
    <>
      <Content>
        <BoardContainer>
          <BoardTitle>게시판</BoardTitle>

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

export default Board;
