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

function BoardList({ sort, page, pageSize = 10, setTotalPages }) {
  const [items, setItems] = useState([]); //현재 게시글 배열

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/notice-board/list`)
      .then((r) => r.json())
      .then((data) => {
        setItems(data.items || []);
        // 총 페이지 계산
        const total = data.totalCount ?? 0;
        setTotalPages(Math.max(1, Math.ceil(total / pageSize)));
      })
      .catch(() => {
        setItems([]);
        setTotalPages(1);
      });
  }, [page, sort, pageSize, setTotalPages]);

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
        />
      ))}
    </BoardListContainer>
  );
}

export default BoardList;
