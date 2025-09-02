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
  Categories,
} from "./PostDetail.styles.js";
import Love from "../../assets/board/Love.svg";
import Article from "../../components/Article/Article.jsx";
import TableOfContents from "../../components/TableOfContents/TableOfContents.jsx";

function PostDetail() {
  const { id } = useParams();
  const postId = parseInt(id, 10);

  const [loveCount, setLoveCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [post, setPost] = useState(null);

  const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  const handleLoveClick = () => {
    if (!isClicked) {
      setLoveCount(loveCount + 1);
      setIsClicked(true);
    } else {
      setLoveCount(loveCount - 1);
      setIsClicked(false);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_BASE}/notice-board/${postId}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
  }, [postId, API_BASE]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) return <div>로딩 중...</div>; // 수정: null 안전 처리

  const postSections = post.sections || []; // 수정: postSections 정의

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
          <TableOfContents sections={postSections} />
        </TableOfContentscontainer>

        <Contentcontainer>
          {postSections.map((section) => (
            <Article
              key={section.id}
              Numberprop={section.headerNumber}
              Titleprop={section.title}
              childrenprop={section.contents}
              subSections={section.children}
            />
          ))}
        </Contentcontainer>
      </BoardContainer>

      <CategoryList>카테고리</CategoryList>
    </Content>
  );
}

export default PostDetail;
