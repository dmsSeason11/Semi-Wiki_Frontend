import "../../styles/reset.css";
import { useState } from "react";
import { BoardContainer, BoardTitle, Content } from "../Board/board.styles.js";
import CategoryList from "../../components/CategoryList/CategoryList.jsx";
import {
  HiddenButton,
  LoveLabel,
  Lovecount,
  CategoryTitle,
  Categorycontainer,
  TableOfContentscontainer,
  TableOfContentsTitle,
  Contentcontainer,
  CategoryTag,
  Categories
} from "./PostDetail.styles.js";
import Love from "../../assets/board/Love.svg";
import Article from "../../components/Article/Article.jsx"
import TableOfContents from "../../components/TableOfContents/TableOfContents.jsx";
import { sections } from "../../data/sections.js"

function PostDetail() {
  const [loveCount, setLoveCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleLoveClick = () => {
    if (!isClicked) {
      setLoveCount(loveCount + 1);
      setIsClicked(true);
    } else {
      setLoveCount(loveCount - 1);
      setIsClicked(false);
    }
  };

  return (
    <Content>
      <BoardContainer>
        <BoardTitle>백엔드</BoardTitle>
        <LoveLabel>
          <HiddenButton onClick={handleLoveClick} />
          <img src={Love} alt="좋아요" $isClick={isClicked} />
          <Lovecount>{loveCount}</Lovecount>
        </LoveLabel>

        <CategoryTitle>카테고리</CategoryTitle>
        <Categorycontainer>
          <Categories>
            <CategoryTag>전공</CategoryTag>
            <CategoryTag>기숙사</CategoryTag>
            <CategoryTag>논란</CategoryTag>
          </Categories>
        </Categorycontainer>

        <TableOfContentscontainer>
          <TableOfContentsTitle>목차</TableOfContentsTitle>
          <TableOfContents contents={sections} />
        </TableOfContentscontainer>

        <Contentcontainer>
            {sections.map((section) => (
              <Article key={section.number} Numberprop={section.number} Titleprop={section.title} childrenprop={section.content} subSections={section.children} />
            ))}
        </Contentcontainer>

      </BoardContainer>

      <CategoryList>카테고리</CategoryList>
    </Content>
  );
}

export default PostDetail;
