import styled from "styled-components";
import colors from "../../styles/color";

//목차 글
export const TOCContents = styled.ul`
  color: ${colors.gray[50]};
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  margin-top: 25px;
  margin-left: 30px;
`; 

export const TOCsubContents = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  margin-top: 5px;
  margin-left: 15px;
`; 




