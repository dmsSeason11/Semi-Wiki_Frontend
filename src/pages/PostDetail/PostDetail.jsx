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
  Contents,
  Contentcontainer
} from "./PostDetail.styles.js";

import Love from "../../assets/board/Love.svg";

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
        <Categorycontainer></Categorycontainer>
        <Contents></Contents>

        <Contentcontainer></Contentcontainer>

      </BoardContainer>

      <CategoryList>카테고리</CategoryList>
    </Content>
  );
}

export default PostDetail;
