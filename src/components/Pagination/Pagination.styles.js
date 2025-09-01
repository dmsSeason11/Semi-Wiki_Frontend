import styled from "styled-components";
import colors from "../../styles/color";

//페이지네이션 컨테이너
export const PaginationContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 40px;
`;

//페이지 버튼
export const PageButton = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  color: ${colors.gray[50]};
  font-weight: 600;
  font-family: 'pretendard';
`;

//화살표 버튼
export const ArrowButton = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  color: ${colors.gray[50]};
`;
