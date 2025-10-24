import styled from "styled-components";
import colors from "../../styles/color";

// 카테고리 리스트 컨테이너
export const CategoryListContainer = styled.div`
  width: 300px;
  height: 463px;
  margin-top: 40px;
  
  padding: 20px;

  background: ${colors.gray[900]};
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;

// 카테고리 리스트 제목
export const CategoryListTitle = styled.h1`
  width: 125px;
  height: 43px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;

  color: ${colors.gray[50]};
`;

// 카테고리 아이템을 감싸는 영역
export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 20px;
  height: 370px;

  gap: 1.2rem;
`;

// 체크박스 레이블
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(50% - 10px); 

  color: ${({ $check }) => ($check ? colors.orange[50] : colors.orange[900])};

  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 600;

  cursor: pointer;
  user-select: none;

  transition: 0.1s;
`;

// 숨겨진 기본 체크박스
export const HiddenCheckbox = styled.input`
  display: none;
`;

// 커스텀 체크박스 스타일
export const StyledCheckbox = styled.div`
  width: 18px;
  height: 18px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border-radius: 4px;

  border: 2px solid ${({ $check }) => ($check ? colors.orange[50] : colors.orange[900])};

  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 10px;
    border: solid ${({ $check }) => ($check ? colors.orange[50] : colors.orange[900])};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);

    margin-bottom: 2px;

    opacity: ${({ $check }) => ($check ? 1 : 0)}; 
    transition: 0.2s;
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
`;