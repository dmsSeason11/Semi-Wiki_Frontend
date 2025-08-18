import "../../styles/reset.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import { sections as allSection } from "../../data/sections.js"
import { posts } from "../../data/posts.js";

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

  const { id } = useParams();
  const postId = parseInt(id, 10);

  const post = posts.find((v)=>v.id === postId);
  const section = allSection[postId] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Content>
      <BoardContainer>
        <BoardTitle>{post.title}</BoardTitle>
        <LoveLabel>
          <HiddenButton onClick={handleLoveClick} />
          <img src={Love} alt="좋아요" $isClick={isClicked} />
          <Lovecount>{loveCount}</Lovecount>
        </LoveLabel>

        <CategoryTitle>카테고리</CategoryTitle>
        <Categorycontainer>
          <Categories>
            {post.category.map((category) => (
              <CategoryTag key={category}>{category}</CategoryTag>
            ))}
          </Categories>
        </Categorycontainer>

        <TableOfContentscontainer>
          <TableOfContentsTitle>목차</TableOfContentsTitle>
          <TableOfContents contents={section} />
        </TableOfContentscontainer>

        <Contentcontainer>
            {section.map((section) => (
              <Article key={section.number} Numberprop={section.number} Titleprop={section.title} childrenprop={section.content} subSections={section.children} />
            ))}
        </Contentcontainer>

      </BoardContainer>

      <CategoryList>카테고리</CategoryList>
    </Content>
  );
}

export default PostDetail;
