import styled from "styled-components";

//전체를 감싸는 래퍼
export const Wrapper = styled.div`
  /* padding: 50px 55px 0 55px; */
  width: 964px;
  margin: 0 auto;
`;

//본문 위쪽 래퍼
export const ArtcileTopWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 20px 0 20px;
`;

//숫자
export const Number = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #ff9e3d;

  margin-right: 5px;
`;

//제목
export const Title = styled.h2`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  color: #f9f9f9;
`;

//수정
export const Modify = styled.h2`
  margin-left: auto;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-decoration-line: underline;

  color: #ff9e3d;

  cursor: pointer;
`;

export const ArticleContentWrapper = styled.div`
  margin: 0 auto;
`;

export const ArticleContent = styled.div`
  white-space: pre-line;
  border-top: 2px solid #757575;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  color: #f9f9f9;

  margin-top: 20px;
  padding-top: 20px;
`;
