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

export const Categorycontainer = styled.div`
  position: absolute;
  width: 1044px;
  height: 53px;
  left: 28px;
  top: 184px;

  background: #353535;

  border: 1px solid #f9f9f9;
  border-radius: 24px;
`;

export const Contents = styled.div`
  position: absolute;
  width: 200px;
  height: 164px;
  left: 27px;
  top: 257px;

  background: #353535;

  border: 1px solid #f9f9f9;
  border-radius: 12px;
`;

export const Contentcontainer = styled.div`
  width: 1044px;
  height: 639px;
  margin-top: 220px;

  background: #353535;
  border: 1px solid #F9F9F9;
  border-radius: 24px;
`;