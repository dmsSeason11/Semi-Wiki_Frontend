import "../../styles/reset.css";
import { BoardContainer, BoardTitle, Boardfiler, Boardfilertitle} from "./board.styles.js";
import BoardList from "../../components/boardList/boardList.jsx";
import BoardItem from "../../components/boardItem/boardItem.jsx";

function Board() {
  return (
    <>
      <BoardContainer>
        <BoardTitle>게시판</BoardTitle>
        <Boardfiler>
          <Boardfilertitle>최신순</Boardfilertitle>
          <Boardfilertitle>조회순</Boardfilertitle>
          <Boardfilertitle>추천순</Boardfilertitle>
        </Boardfiler>

        <BoardList>
          <BoardItem></BoardItem>
        </BoardList>         
      </BoardContainer>
    </>
  );
}

export default Board;