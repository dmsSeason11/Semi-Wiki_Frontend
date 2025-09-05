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
  Modify,
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
  const token = localStorage.getItem("accessToken");

  const handleLoveClick = async () => {
    if (!token) {
      alert("로그인이 필요합니다.");
      window.location.href = "/login";
      return;
    }
    
    try {
      if (!isClicked) {
        const res = await fetch(`${API_BASE}/like/${postId}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          setIsClicked(true);
          setLoveCount((prev) => prev + 1);
        }
      } else {
          const res = await fetch(`${API_BASE}/like/${postId}`, {
          method: "DELETE",
          headers: { 
            Authorization: `Bearer ${token}` 
          },
        });
        if (res.ok) {
          setIsClicked(false);
          setLoveCount((prev) => prev - 1);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!token) return; 

    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_BASE}/notice-board/${postId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 401) {
          alert("로그인이 필요합니다.");
          localStorage.removeItem("accessToken");
          window.location.href = "/login";
          return;
        }
        const data = await res.json();
        setPost(data);

        const countRes = await fetch(`${API_BASE}/like/${postId}/count`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (countRes.ok) {
          const count = await countRes.json();
          setLoveCount(count);
        }

        const likedRes = await fetch(`${API_BASE}/like/${postId}`, {
          headers: { 
            Authorization: `Bearer ${token}` 
          },
        });
        
        if (likedRes.ok) {
          const liked = await likedRes.json();
          setIsClicked(liked);
        }

      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
  }, [postId, API_BASE, token]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) return <div>로딩 중...</div>;

  const postSections = post.noticeBoardHeaders || [];

  return (
    <Content>
      <BoardContainer>
        <BoardTitle>{post.title}</BoardTitle>
        <Modify>수정</Modify>
        <LoveLabel>
          <HiddenButton onClick={handleLoveClick} />
          <img src={Love} alt="좋아요" $isClick={isClicked} />
          <Lovecount>{loveCount}</Lovecount>
        </LoveLabel>

        <CategoryTitle>카테고리</CategoryTitle>
        <Categorycontainer>
          <Categories>
            {post.categories.map((category) => (
              <CategoryTag key={category}>{category}</CategoryTag>
            ))}
          </Categories>
        </Categorycontainer>

        <TableOfContentscontainer>
          <TableOfContentsTitle>목차</TableOfContentsTitle>
          <TableOfContents sections={postSections} />
        </TableOfContentscontainer>

        <Contentcontainer>
          {postSections.map((postSection) => (
            <Article
              key={postSection.id}
              Numberprop={postSection.headerNumber}
              Titleprop={postSection.title}
              childrenprop={postSection.contents}
              subSections={postSection.children}
            />
          ))}
        </Contentcontainer>
      </BoardContainer>

      <CategoryList
        selectedCategories={post.categories} // 게시글 카테고리만 체크됨
        onSelectedCategories={() => {}}
      >카테고리</CategoryList>
    </Content>
  );
}

export default PostDetail;
