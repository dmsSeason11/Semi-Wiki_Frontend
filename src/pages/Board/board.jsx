import { useState } from "react";
import "../../styles/reset.css";
import {
  BoardContainer,
  BoardTitle,
  Boardfiler,
  Boardfilertitle,
  Content
} from "./board.styles.js";
import BoardList from "../../components/boardList/boardList.jsx";
import CategoryList from "../../components/CategoryList/CategoryList.jsx";

function Board() {
  const [activeFilter, setActiveFilter] = useState("최신순");

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
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Boardfilertitle>
              ))}
            </Boardfiler>

            <BoardList></BoardList>
          </BoardContainer>

          <CategoryList>카테고리</CategoryList>
        </Content>

    </>
  );
}

export default Board;
