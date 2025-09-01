import styled from "styled-components";
import colors from "../../styles/color";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 4px;
  padding: 0 130px;
  height: 88px;
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 13px;
`;
export const Button = styled.button`
  border: none;
  background: none;
  position: absolute;
  left: 20px;
  width: 32px;
  height: 32px;
`;
export const Input = styled.input`
  border: 1px solid ${colors.gray[500]};
  border-radius: 30px;
  font-size: 24px;
  padding: 10px 65px;
`;

export const Link1 = styled.div`
  cursor: pointer;
`;
