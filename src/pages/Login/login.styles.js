import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

export const Loginarea = styled.div`
  display: flex;
  width: 1000px;
  height: 600px;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 5px solid #4c4c4c;
`;

export const Left_area = styled.div`
  flex: 1;
  box-sizing: border-box;
  background-color: f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;

export const Logo = styled.img`
  width: 250px;
  margin-bottom: 25px;
`;

export const Slogan = styled.p`
  font-size: 21px;
  color: #4c4c4c;
  margin: 3px 0;
  text-align: center;

  strong {
    font-weight: bold;
  }
`;

export const LoginDiv = styled.div`
  flex: 1;
  background-color: #4c4c4c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Logintitle = styled.h2`
  color: #f9f9f9;
  font-size: 48px;
  margin-bottom: 30px;
  font-weight: 500;
`;

export const Inputtext = styled.label`
  color: white;
  font-size: 22px;
  margin: 10px 0 5px;
  width: 84%;
  display: block;
`;

export const Input = styled.input`
  width: 380px;
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

export const Button = styled.button`
  width: 380px;
  height: 50px;
  margin-top: 40px;
  background-color: #353535;
  color: white;
  border: none;
  border-radius: 4px;
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

export const LinkText = styled.a`
  color: white;
  text-decoration: underline;
  cursor: pointer;
`;
