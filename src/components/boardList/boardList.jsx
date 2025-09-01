import { useState, useEffect } from "react";
import "../../styles/reset.css";
import {
  BoardListContainer,
  BoardListTitle,
  BoardListCategory,
  BoardListModifier,
  BoardListHeader,
} from "./boardList.styles";
import BoardItem from "../../components/boardItem/boardItem.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import { posts } from "../../data/posts.js";

function BoardList({ sort, page, pageSize = 10, token, selectedCategories = [] }) {
  const [items, setItems] = useState([]); //현재 게시글 배열

  const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await fetch(`${API_BASE}/notice-board/list`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({
            categories: selectedCategories,
            offset: page * pageSize,
            limit: pageSize,
          }),
        });
        const text = await res.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          console.error("JSON 파싱 실패:", text);
          data = [];
        }

        if (!res.ok) {
          console.error("서버 오류:", text);
          setError(text);
          setItems([]);
          setTotalPages(1);
          return;
        }

        setItems(data || []);
        setTotalPages(Math.ceil((data?.length || 0) / pageSize));
        setError(null);
      } catch (err) {
        console.error("데이터 fetch 중 오류:", err);
        setError(err.message);
        setItems([]);
        setTotalPages(1);
      }
    };

    if (token) fetchList();
  }, [page, sort, pageSize, token, API_BASE, selectedCategories]);

  return (
    <BoardListContainer>
      <BoardListHeader>
        <BoardListTitle>제목</BoardListTitle>
        <BoardListCategory>카테고리</BoardListCategory>
        <BoardListModifier>수정자</BoardListModifier>
      </BoardListHeader>

      {items.map((post) => (
        <BoardItem
          key={post.id}
          id={post.id}
          title={post.title}
          categories={post.categories}
          modifier={post.userPreview?.accountId || "알 수 없음"}
          $check={post.checked}
        />
      ))}
    </BoardListContainer>
  );
}

export default BoardList;