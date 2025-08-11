import "../../styles/reset.css";
import { BoardListContainer, BoardListTitle, BoardLIstCategory, BoardListModifier } from "./boardList.styles";
import { BoardItemContainer } from "../boardItem/boardItem.styles";

function BoardList() {
  return (
    <BoardListContainer>

      <BoardListTitle>제목</BoardListTitle>
      <BoardLIstCategory>카테고리</BoardLIstCategory>
      <BoardListModifier>수정자</BoardListModifier>

      <BoardItemContainer>

      </BoardItemContainer>
    </BoardListContainer>
  );
} 

export default BoardList; 