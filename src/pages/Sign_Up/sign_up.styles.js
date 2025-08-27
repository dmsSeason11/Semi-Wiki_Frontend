import styled from "styled-components";
import { colors } from "../../styles/color";

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
  height: 100vh;

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
`;

export const Input = styled.input`
  width: 400px;
  height: 50px;
  padding: 10px;
  margin: 6px 0;
  border-radius: 8px;
  background-color: ${colors.gray[800]};
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 500;
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

  &:hover {
    background-color: ${colors.gray[800]};
  }
`;

export const SubText = styled.p`
  color: ${colors.gray[50]};
  font-size: 16px;
  margin-top: 30px;
`;

export const LinkText = styled.a`
  color: white;
  text-decoration: underline;
  cursor: pointer;
`;
