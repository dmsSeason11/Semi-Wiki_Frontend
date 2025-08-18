import styled from "styled-components";
import Love from "../../assets/board/Love.svg";

// 버튼 숨김
export const HiddenButton = styled.button`
  display: none;
`;

// 추천 레이블
export const LoveLabel = styled.label`
  display: inline-block;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none;

    position: absolute;
    width: 24px;
    height: 24px;
    left: 978px;
    top: 52px;

    fill: ${($isClick) => ($isClick ? "#FF0000" : "#4C4C4C")};
  }
`;

//추천 카운트
export const Lovecount = styled.span`
  position: absolute;
  width: 62px;
  height: 29px;
  left: 1010px;
  top: 49px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #dbdbdb;

  user-select: none;
`;

// 카테고리 제목
export const CategoryTitle = styled.h2`
  position: absolute;
  width: 115px;
  height: 38px;
  left: 28px;
  top: 138px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;

  color: #f9f9f9;
`;

//카테고리 컨테이너
export const Categorycontainer = styled.div`
  position: absolute;
  width: 1044px;
  height: 53px;
  left: 28px;
  top: 184px;

  background: #353535;

  border: 1px solid #f9f9f9;
  border-radius: 24px;

  cursor: pointer;
`;

export const Categories = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 10px;
  margin-left: 15px;
`;

//카테코리 태그
export const CategoryTag = styled.span`
  padding: 5px 3px;
  border: 1px solid #ff9e3d;
  border-radius: 8px;
  font-size: 18px;
  color: #ff9e3d;

  font-family: "Pretendard";
`;

//목차
export const TableOfContentscontainer = styled.div`
  margin-top: 5px;
  
  width: 200px;
  min-height: 164px;
  height: auto;

  background: #353535;

  border: 1px solid #f9f9f9;
  border-radius: 12px;

  padding-bottom: 16px;

`;

//목차 제목
export const TableOfContentsTitle = styled.h2`
  position: relative;
  width: 32px;
  height: 21px;
  left: 16px;
  top: 16px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  color: #f9f9f9;
`;

//본문 컨테이너
export const Contentcontainer = styled.div`
  width: 1044px;
  min-height: 639px;
  margin-top: 20px;
  padding-bottom: 40px;

  background: #353535;
  border: 1px solid #f9f9f9;
  border-radius: 24px;
`;
