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

function Board({ searchTerm }) {
  const [activeFilter, setActiveFilter] = useState("최신순");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const pageSize = 2;
  const token = localStorage.getItem("accessToken");
  const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  // 카테고리 토글
  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category];
      setCurrentPage(1);
      return newCategories;
    });
  };

  useEffect(() => {
    if (!token) return;

    const fetchTotalCount = async () => {
      try {
        const query = new URLSearchParams();
        selectedCategories.forEach((c) => query.append("categories", c));
        if (searchTerm) query.append("keyword", searchTerm);

        const res = await fetch(
          `${API_BASE}/notice-board/count?${query.toString()}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (res.status === 401) {
          alert("로그인이 필요합니다.");
          localStorage.removeItem("accessToken");
          window.location.href = "/login";
          return;
        }

        const total = (await res.json()) || 0;
        setTotalPages(Math.max(1, Math.ceil(total / pageSize)));
      } catch (err) {
        console.error(err);
      }
    };

    fetchTotalCount();
  }, [token, selectedCategories, searchTerm, API_BASE]);

  return (
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
          searchTerm={searchTerm}
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
  );
}

export default Board;
