import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

export const SignUpDiv = styled.div`
  background-color: #4c4c4c;
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
  color: #f9f9f9;
  font-size: 60px;
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
  color: white;
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
  background-color: #606060;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 500;
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 20px;
  bottom: 17px;
`;

export const Button = styled.button`
  width: 400px;
  height: 50px;
  margin-top: 40px;
  background-color: #353535;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }
`;

export const SubText = styled.p`
  color: white;
  font-size: 16px;
  margin-top: 30px;
`;
