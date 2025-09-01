import styled from "styled-components";
import colors from "../../styles/color";

export const FormContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.gray[100]};
  display: flex;
  flex-direction: column;
`;

export const FormLayout = styled.div`
  flex: 1;
  display: flex;
  gap: 24px;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const FormMain = styled.div`
  flex: 1;
  background-color: ${colors.gray[950]};
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TitleInput = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 32px;
  font-weight: 600;
  width: 100%;
  padding: 0;
  margin: 0;

  &::placeholder {
    color: ${colors.gray[400]};
    font-size: 32px;
    font-weight: 600;
  }

  &:focus {
    outline: none;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CategoryTitle = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

export const CategoryInput = styled.input`
  background-color: ${colors.gray[900]};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  color: white;
  font-size: 14px;
  width: 100%;

  &::placeholder {
    color: ${colors.gray[400]};
  }

  &:focus {
    outline: none;
    border: 2px solid ${colors.orange[50]};
  }
`;

export const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const BodyTextarea = styled.textarea`
  background-color: ${colors.gray[900]};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  color: white;
  font-size: 14px;
  width: 100%;
  min-height: 300px;
  resize: vertical;
  font-family: inherit;

  &::placeholder {
    color: ${colors.gray[400]};
  }

  &:focus {
    outline: none;
    border: 2px solid ${colors.orange[50]};
  }
`;

export const CompleteButton = styled.button`
  background-color: ${colors.orange[50]};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.orange[900]};
  }
`;

export const Sidebar = styled.div`
  width: 300px;
  background-color: ${colors.gray[950]};
  border-radius: 12px;
  padding: 24px;
  height: fit-content;
`;

export const SidebarTitle = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 20px 0;
`;

export const CheckboxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 14px;
  cursor: pointer;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: ${colors.orange[50]};
  }
`;
