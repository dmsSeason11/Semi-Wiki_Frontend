import styled from "styled-components";
import colors from "../../styles/color";

export const FormContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray[100]};
`;

export const FormLayout = styled.div`
  display: flex;
  gap: 40px;
  padding: 24px;
  margin: 0 auto;
`;

export const FormMain = styled.div`
  width: 1100px;
  min-height: 998px;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors.gray[900]};
  border-radius: 24px;

  padding: 25px;
  gap: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const TitleInput = styled.input`
  width: 100%;

  background-color: transparent;
  border: none;
  color: white;

  font-size: 40px;
  font-weight: 500;
  font-family: "Pretendard";

  &::placeholder {
    color: white;
    font-size: 40px;
    font-weight: 500;
    font-family: "Pretendard";
  }

  &:focus {
    outline: none;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SectionTitle = styled.h2`
  color: white;
  font-size: 30px;
  font-weight: 500;
`;

export const CategoryInput = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 50px;

  background-color: ${colors.gray[900]};
  border: 1px solid ${colors.gray[50]};
  border-radius: 24px;

  color: ${colors.gray[500]};
  font-size: 20px;
  font-family: "Pretendard";

  padding: 0 18px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BodyTextarea = styled.textarea`
  width: 100%;
  min-height: 577px;
  resize: none;
  overflow: hidden;

  background-color: ${colors.gray[900]};
  border: 1px solid ${colors.gray[50]};
  border-radius: 24px;

  color: white;
  font-size: 20px;
  font-family: "Pretendard";

  padding: 12px 18px;

  &::placeholder {
    color: ${colors.gray[500]};
  }

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 1044px;
  align-self: center;

  background-color: transparent;
  border: none;
  border-radius: 8px;

  color: ${colors.gray[50]};
  font-size: 30px;
  font-weight: 500;

  padding: 16px 32px;
  cursor: pointer;

  &:hover {
    color: ${colors.gray[500]};
  }
`;

export const Sidebar = styled.div`
  width: 300px;
  height: 463px;
  position: relative;

  background: ${colors.gray[900]};
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;

export const SidebarTitle = styled.p`
  width: 100%;
  position: absolute;
  left: 20px;
  top: 20px;

  color: ${colors.gray[50]};
  font-weight: 500;
  font-size: 36px;
  font-family: "Pretendard";
`;

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

  color: ${({ check }) => (check ? colors.orange[50] : colors.orange[900])};

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

  border: 2px solid
    ${({ check }) => (check ? colors.orange[50] : colors.orange[900])};

  &::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 10px;
    border: solid
      ${({ check }) => (check ? colors.orange[50] : colors.orange[900])};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);

    margin-bottom: 2px;

    opacity: ${({ check }) => (check ? 1 : 0)};
    transition: 0.2s;
  }
`;

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CategoryTag = styled.span`
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid ${colors.orange[900]};

  color: ${colors.orange[900]};
  font-size: 18px;
  font-weight: 500;
  font-family: "Pretendard";

  padding: 4px 4px 6px 4px;
`;
