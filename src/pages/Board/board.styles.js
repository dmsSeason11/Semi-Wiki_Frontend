import styled from "styled-components";

// 게시판 전체 컨테이너
export const BoardContainer = styled.div`
  position: absolute;
  width: 1100px;
  height: auto;
  min-height: 742px;
  left: calc(50% - 1100px/2 - 170px);
  top: 128px;

  padding-left: 28px;
  padding-top: 232px;
  padding-bottom: 40px;

  background: #4C4C4C;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;

// 게시판 제목
export const BoardTitle = styled.h1`
  position: absolute;
  width: 110px;
  height: 50px;
  left: 28px;
  top: 28px;


  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 50px;


  color: #F9F9F9;
`;

// 게시판 필터
export const Boardfiler = styled.div`
  display: flex;

  position: absolute;
  width: 369px;
  height: 62px;
  left: 28px;
  top: 118px;

  background: #353535;
  border: 1px solid #F9F9F9;
  border-radius: 24px;
`;

// 게시판 필터 제목
export const Boardfilertitle = styled.h2`
  cursor: pointer;
  padding-bottom: 45px;
  position: relative;

  width: 85px;
  height: 38px;
  margin-left: 36px;
  margin-top: 12px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;

  color: #DBDBDB;
  /* border-bottom: ${({ $active }) => ($active ? "4px solid #D9D9D9" : "none")}; */
  /* border-radius: 0 30px 0 0; */

  &:first-child {
    margin-left: 24px;
  }

  &::after {
    content: "";
    background-color: ${({ $active }) => ($active ? "#D9D9D9" : "transparent")};
    
    position: absolute;
    width: 51px;
    height: 4px;
    left: 15px;
    bottom: -7%;

    border-radius:30px;
  }
`;