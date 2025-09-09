import styled from "styled-components";
import colors from "../../styles/color";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.gray[50]};
`;

export const SignUpDiv = styled.div`
  background-color: ${colors.gray[900]};
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

export const SignUptitle = styled.h2`
  color: ${colors.gray[50]};
  font-size: 48px;
  margin-bottom: 30px;
  font-weight: 500;
  font-family: Pretendard, sans-serif;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

export const Inputtext = styled.label`
  color: ${colors.gray[50]};
  font-size: 22px;
  margin: 10px 0 5px;
  width: 56%;
  display: block;
  font-family: Pretendard, sans-serif;
`;

export const Input = styled.input`
  width: 400px;
  height: 50px;
  margin: 6px 0;
  padding: 10px;

  border-radius: 8px;
  background-color: ${colors.gray[800]};
  border: none;
  outline: none;

  font-size: 20px;
  font-weight: 500;
  font-family: Pretendard, sans-serif;

  &:focus {
    background-color: ${colors.gray[800]};
  }

  &::placeholder {
    color: ${colors.gray[600]};
  }
`;

export const IdStatusIcon = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 20px;
  bottom: 18px;
`;

export const ToggleButton = styled.button`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 20px;
  bottom: 18px;

  background: none;
  border: none;
`;

export const InputSubText = styled.p`
  width: 400px;
  text-align: left;
  margin-top: 5px;
  color: ${colors.error};
  font-size: 14px;
  font-family: Pretendard, sans-serif;
`;

export const Button = styled.button`
  width: 400px;
  height: 50px;
  margin-top: 40px;
  background-color: ${colors.gray[950]};
  color: ${colors.gray[50]};
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  font-family: Pretendard, sans-serif;

  &:hover {
    background-color: ${colors.gray[800]};
    cursor: pointer;
  }

  &:disabled {
    background-color: ${colors.gray[800]};
    cursor: not-allowed;
  }
`;

export const SubText = styled.p`
  color: ${colors.gray[50]};
  font-size: 16px;
  margin-top: 30px;
  font-family: Pretendard, sans-serif;
`;

export const LoginLink = styled(Link)`
  color: ${colors.gray[50]};
  text-decoration: underline;
  cursor: pointer;
`;
