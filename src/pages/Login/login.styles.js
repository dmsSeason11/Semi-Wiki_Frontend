import styled from "styled-components";
import colors from "../../styles/color";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.gray[50]};
`;

export const Loginarea = styled.div`
  display: flex;
  width: 1000px;
  height: 600px;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 5px solid ${colors.gray[900]};
`;

export const Left_area = styled.div`
  flex: 1;
  box-sizing: border-box;
  background-color: ${colors.gray[50]};
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
  color: ${colors.gray[900]};
  margin: 3px 0;
  text-align: center;

  strong {
    font-weight: bold;
  }
`;

export const LoginDiv = styled.div`
  flex: 1;
  background-color: ${colors.gray[900]};
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
  color: ${colors.gray[50]};
  font-size: 48px;
  margin-bottom: 30px;
  font-weight: 500;
`;

export const Inputtext = styled.label`
  color: ${colors.gray[50]};
  font-size: 22px;
  margin: 10px 0 5px;
  padding-bottom: 8px;
  width: 84%;
  display: block;
`;

export const ErrorIcon = styled.img`
  display: absolute;
  width: 20px;
  height: 20px;
  pointer-events: none;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: inline;
  align-items: center;
`;

export const EyeImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  width: 310px;
  height: 50px;
  background-color: ${colors.gray[800]};
  outline: none;
  font-size: 20px;
  font-weight: 500;
  color: ${colors.gray[50]};
  border: none;
`;

export const Button = styled.button`
  width: 370px;
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
  color: ${colors.gray[50]};
  text-decoration: underline;
  cursor: pointer;
`;

export const Inputcontainer1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 370px;
  height: 55px;
  border-radius: 8px;
  padding: 0 25px;
  margin-bottom: 20px;
  background-color: ${colors.gray[800]};
  border: ${(props) =>
    props.hasError ? `2px solid red` : `2px solid ${colors.gray[800]}`};

  &::placeholder {
    color: ${colors.gray[600]};
  }

  &:focus {
    border: ${(props) =>
      props.hasError ? "2px solid red" : `2px solid ${colors.gray[700]}`};
  }
`;

export const Inputcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 370px;
  height: 55px;
  border-radius: 8px;
  padding: 0 25px;
  background-color: ${colors.gray[800]};
  border: ${(props) =>
    props.hasError ? `2px solid red` : `2px solid ${colors.gray[800]}`};

  &::placeholder {
    color: ${colors.gray[600]};
  }

  &:focus {
    border: ${(props) =>
      props.hasError ? "2px solid red" : `2px solid ${colors.gray[700]}`};
  }
`;
