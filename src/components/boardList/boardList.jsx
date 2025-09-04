import { useState, useEffect } from "react";
import "../../styles/reset.css";
import {
  BoardListContainer,
  BoardListTitle,
  BoardListCategory,
  BoardListModifier,
  BoardListHeader,
  Line,
} from "./boardList.styles";
import BoardItem from "../../components/boardItem/boardItem.jsx";

function BoardList({
  sort,
  page,
  pageSize = 10,
  token,
  selectedCategories = [],
}) {
  const [items, setItems] = useState([]); //현재 게시글 배열

  const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  useEffect(() => {
    if (!token) return;

    const fetchList = async () => {
      try {
        const query = new URLSearchParams()

        selectedCategories.forEach((v) => query.append("categories", v));

        query.append("orderBy", sort === "최신순" ? "recent" : "like");
        query.append("offset", page - 1)
        query.append("limit", pageSize)

        const res = await fetch(`${API_BASE}/notice-board/list?${query.toString()}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        try {
          data = JSON.parse(data);
        } catch {
          console.error("JSON 파싱 실패:", data);
        }

        if (!res.ok) {
          if (res.status === 401) {
            alert("로그인이 필요합니다. 다시 로그인해주세요.");
            localStorage.removeItem("accessToken");
            window.location.href = "/login";
            return;
          }
          console.error("서버 오류:", text);
          setError(text);
          setItems([]);
          return;
        }

        setItems(data || []);
        setError(null);
      } catch (err) {
        console.error("데이터 fetch 중 오류:", err);
        setError(err.message);
        setItems([]);
      }
    };
  }, []);

    if (token) fetchList();
  }, [page, sort, pageSize, token, API_BASE, selectedCategories]);

  return (
    <BoardListContainer>
      <BoardListHeader>
        <BoardListTitle>제목</BoardListTitle>
        <BoardListCategory>카테고리</BoardListCategory>
        <BoardListModifier>수정자</BoardListModifier>
      </BoardListHeader>
      <Line />

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
