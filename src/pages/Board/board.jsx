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
import Pagination from "../../components/Pagination/Pagination.jsx";

function Board() {
  const [activeFilter, setActiveFilter] = useState("최신순");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
              pageSize={10}
              setTotalPages={setTotalPages}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              groupSize={10}
            />
          </BoardContainer>

          <CategoryList>카테고리</CategoryList>

        </Content>

    </>
  );
}

export default Board;
