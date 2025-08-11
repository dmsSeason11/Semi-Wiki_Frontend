import styled from "styled-components";

// 게시판 리스트 컨테이너
export const BoardListContainer = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 1044px;
  height: 470px;
  left: 28px;
  top: 232px;

  background: #353535;
  border: 1px solid #F9F9F9;
  border-radius: 24px;
`;

export const BoadrdHeader = styled.div`

`;

// 게시판 리스트 제목
export const BoardListTitle = styled.h2`
  position: absolute;
  width: 45px;
  height: 29px;
  left: 64px;
  top: 40px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #F9F9F9;
`;

// 게시판 리스트 카테고리
export const BoardLIstCategory = styled.h2`
  position: absolute;
  width: 86px;
  height: 29px;
  left: 490px;
  top: 40px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #F9F9F9;
`;

// 게시판 리스트 수정자
export const BoardListModifier = styled.h2`
  position: absolute;
  width: 65px;
  height: 29px;
  left: 757px;
  top: 40px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #F9F9F9;
`;