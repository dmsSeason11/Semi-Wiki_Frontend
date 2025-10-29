import styled from "styled-components";
import colors from "../../styles/color";
import { Link } from "react-router-dom";
import { colors_dark } from "../../styles/color_table";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.gray[50]};
`;

export const SignUpDiv = styled.div`
  background-color: ${colors_dark.gray[700]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  padding: 40px;
  width: 800px;
  height: 880px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SignUptitle = styled.h1`
  color: ${colors_dark.gray[100]};
  font-size: 42px;
  margin-bottom: 30px;
  font-weight: 500;
  font-family: Pretendard, sans-serif;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 500px;
`;

export const InputTextBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const InputText = styled.label`
  display: block;
  margin-left: 8px;

  color: ${colors_dark.gray[50]};
  font-size: 20px;
`;

export const Input = styled.input`
  width: 500px;
  height: 50px;
  margin: 10px 0;
  padding: 10px;

  border-radius: 10px;
  background-color: ${colors_dark.gray[500]};
  border: 1px solid ${colors_dark.gray[350]};
  outline: none;

  font-size: 20px;
  font-weight: 500;
  color: ${colors.gray[50]};

  &:focus {
    background-color: ${colors_dark.gray[600]};
  }

  &::placeholder {
    color: ${colors_dark.gray[400]};
  }
`;

export const IdStatusIcon = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 20px;
  bottom: 18px;
`;

export const IdCheckButton = styled.button`
  width: 120px;
  height: 50px;
  margin-top: 45px;

  border: 1px solid ${colors_dark.gray[150]};
  border-radius: 10px;
  background-color: ${colors_dark.transparent["gray20"]};

  font-size: 20px;
  color: ${colors_dark.gray[150]};

  &:hover {
    background-color: ${colors_dark.gray[500]};
    cursor: pointer;
  }
`;

export const ToggleButton = styled.button`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 20px;
  bottom: 20px;

  background: none;
  border: none;
`;

export const InputSubText = styled.p`
  width: 400px;
  text-align: left;
  margin-top: 5px;
  color: ${colors.error};
  font-size: 14px;
`;

export const Button = styled.button`
  width: 500px;
  height: 70px;
  margin-top: 40px;

  background-color: ${colors_dark.transparent["gray20"]};
  border: 1px solid ${colors_dark.gray[250]};

  border-radius: 8px;
  color: ${colors.gray[50]};
  font-size: 20px;

  cursor: pointer;

  &:hover {
    background-color: ${colors_dark.gray[500]};
    cursor: pointer;
  }

  &:disabled {
    background-color: ${colors_dark.gray[500]};
    cursor: default;
  }
`;

export const SubText = styled.p`
  color: ${colors_dark.gray[300]};
  font-size: 16px;
  margin-top: 43px;
`;

export const LoginLink = styled(Link)`
  color: ${colors_dark.gray[100]};
  text-decoration: underline;
  cursor: pointer;
`;
