import styled from "styled-components";
import { colors_dark } from "../../styles/color_table.js";

// 게시판 리스트 컨테이너
export const BoardListContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 100px;
  flex-direction: column;

  max-width: 1044px;
  min-height: 470px;
  height: auto;

  background: ${colors_dark.gray[650]};

  padding-left: 40px;
  padding-top: 40px;
  padding-bottom: 60px;

  margin-bottom: -50px;
`;

// 게시판 리스트 헤더
export const BoardListHeader = styled.div`
  display: grid;
  grid-template-columns: 2.6fr 2.5fr 2.3fr;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 11px;
`;

// 게시판 줄
export const Line = styled.div`
  width: 964px;
  border-style: solid;
  border-color: ${colors_dark.gray[450]};
  border-radius: 0px;

  border-width: 2px 0px 1px 0px;
`;

// 게시판 리스트 제목
export const BoardListTitle = styled.h2`
  width: 45px;
  height: 29px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${colors_dark.gray[100]};
`;

// 게시판 리스트 카테고리
export const BoardListCategory = styled.h2`
  width: 86px;
  height: 29px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${colors_dark.gray[100]};
`;

// 게시판 리스트 수정자
export const BoardListModifier = styled.h2`
  width: 65px;
  height: 29px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${colors_dark.gray[100]};
`;
