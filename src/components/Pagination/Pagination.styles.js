import styled from "styled-components";
import colors from "../../styles/color";

//페이지네이션 컨테이너
export const PaginationContainer = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
`;

//페이지 버튼
export const PageButton = styled.button`
  border: none;
  background: none;
  color: ${({ $active }) => ($active ? "#FF9E3D" : colors.gray[50])};
  font-size: 24px;
  font-weight: 600;
  font-family: 'pretendard';
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    color: ${colors.gray[500]};
    cursor: not-allowed;
    opacity: 0.4;
  }
`;


//화살표 버튼
export const ArrowButton = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  color: ${colors.gray[50]};
  cursor: pointer;
`;
