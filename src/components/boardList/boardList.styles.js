import styled from "styled-components";

// 게시판 리스트 컨테이너
export const BoardListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 1044px;
  min-height: 470px;
  height: auto;

  background: #353535;
  border: 1px solid #f9f9f9;
  border-radius: 24px;

  padding-left: 40px;
  padding-top: 89px;
  padding-bottom: 60px;
`;

// 게시판 리스트 헤더
export const BoardListHeader = styled.div`
  position: relative;
  bottom: 85px;
  right: 50px;
`;

// 게시판 리스트 제목
export const BoardListTitle = styled.h2`
  position: absolute;
  width: 45px;
  height: 29px;
  left: 64px;
  top: 40px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #f9f9f9;
`;

// 게시판 리스트 카테고리
export const BoardListCategory = styled.h2`
  position: absolute;
  width: 86px;
  height: 29px;
  left: 490px;
  top: 40px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #f9f9f9;
`;

// 게시판 리스트 수정자
export const BoardListModifier = styled.h2`
  position: absolute;
  width: 65px;
  height: 29px;
  left: 757px;
  top: 40px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #f9f9f9;
`;
