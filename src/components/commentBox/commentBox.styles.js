import styled from "styled-components";
import colors_dark from "../../styles/color_table";

export const Box = styled.div`
  width: 1044px;
  min-height: 50px;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;

  margin-top: 40px;

  background: ${colors_dark.gray[650]};

  font-family: "Pretendard";
  font-weight: 600;

  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;

export const Title = styled.h3`
    width: 100%;
    height: 29px;
  
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 21px;
  
    color: ${colors_dark.gray[100]};
    margin-bottom: 16px;
`;

export const InputArea = styled.input`
  width: 100%;
  height: 46px;
  border: 1px solid ${colors_dark.gray[350]};
  border-radius: 12px;
  padding-top: 4px;
  padding-left: 9px;
  box-sizing: border-box;

  color: ${colors_dark.gray[100]};
  resize: none;
  background: ${colors_dark.gray[650]};

  font-family: "Pretendard";
  font-weight: 600;
  font-size: 16px;
`;

export const ViewArea = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;
