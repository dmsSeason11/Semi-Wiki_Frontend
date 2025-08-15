import "../../styles/reset.css";
import {
  BoardListContainer,
  BoardListTitle,
  BoardListCategory,
  BoardListModifier,
  BoardListHeader,
} from "./boardList.styles";
import BoardItem from "../../components/boardItem/boardItem.jsx";
import { posts } from "../../data/posts.js";

function BoardList() {
  return (
    <BoardListContainer>
      <BoardListHeader>
        <BoardListTitle>제목</BoardListTitle>
        <BoardListCategory>카테고리</BoardListCategory>
        <BoardListModifier>수정자</BoardListModifier>
      </BoardListHeader>

      {posts.map((post) => ( 
          <BoardItem
            key={post.id}
            id={post.id}
            title={post.title}
            categories={post.category}
            modifier={post.modifier}
          />
      ))}
      
    </BoardListContainer>
  );
}

export default BoardList;
