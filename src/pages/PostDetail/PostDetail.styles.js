import styled from "styled-components";
import colors from "../../styles/color";

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

    fill: ${($isClick) => ($isClick ? "#FF6600" : colors.gray[900])};
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

  color: ${colors.gray[200]};

  user-select: none;
`;

// 카테고리 제목
export const CategoryTitle = styled.h2`
  position: relative;
  width: 115px;
  height: 38px;
  bottom: 210px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;

  color: ${colors.gray[50]};
`;

//카테고리 컨테이너
export const Categorycontainer = styled.div`
  position: relative;
  width: 1044px;
  height: 53px;
  bottom: 200px;

  background: ${colors.gray[950]};

  border: 1px solid ${colors.gray[50]};
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
  border: 1px solid ${colors.orange[900]};
  border-radius: 8px;
  font-size: 18px;
  color: ${colors.orange[900]};

  font-family: "Pretendard";
`;

//목차
export const TableOfContentscontainer = styled.div`
  position: relative;
  width: 200px;
  min-height: 164px;
  height: auto;

  background: ${colors.gray[950]};

  border: 1px solid ${colors.gray[50]};
  border-radius: 12px;

  padding-bottom: 16px;

  bottom: 180px;
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

  color: ${colors.gray[50]};
`;

//본문 컨테이너
export const Contentcontainer = styled.div`
  position: relative;
  bottom: 150px;
  width: 1044px;
  min-height: 639px;
  margin-top: 20px;
  padding-bottom: 40px;

  background: ${colors.gray[950]};
  border: 1px solid ${colors.gray[50]};
  border-radius: 24px;
`;
