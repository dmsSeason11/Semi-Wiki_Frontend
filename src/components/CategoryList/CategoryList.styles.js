import styled from "styled-components";

// 카테고리 리스트 컨테이너
export const CategoryListContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 463px;
  left: 1380px;
  top: 128px;

  background: #4c4c4c;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;

// 카테고리 리스트 제목
export const CategoryListTitle = styled.h1`
  position: absolute;
  width: 125px;
  height: 43px;
  left: 20px;
  top: 20px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;

  color: #f9f9f9;
`;

// 카테고리 아이템을 감싸는 영역
export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  height: 360px;

  gap: 20px;
  margin: 80px 20px 0 20px;
`;

// 체크박스 레이블
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(50% - 10px); 

  color: ${({ check }) => (check ? "#FF7F00" : "#FF9E3D")};

  font-size: 18px;
  font-family: "PretendardsemiBold";

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

  border: 2px solid ${({ check }) => (check ? "#FF7F00" : "#FF9E3D")};

  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 10px;
    border: solid ${({ check }) => (check ? "#FF7F00" : "#FF9E3D")};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);

    margin-bottom: 2px;
    
    opacity: ${({ check }) => (check ? 1 : 0)}; 
    transition: 0.2s;
  }
`;