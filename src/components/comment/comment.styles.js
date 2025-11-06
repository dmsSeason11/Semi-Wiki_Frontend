import styled from "styled-components";
import { colors_dark } from "../../styles/color_table.js";

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  gap: 11px;
  width: 100%;

  font-family: "pretendard", sans-serif;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Profile = styled.img`
  width: 48px;
  height: 48px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;
`;

export const UserId = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${colors_dark.gray[50]};
`;

export const WriteDate = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${colors_dark.gray[350]};
`;

export const Text = styled.div`
  font-size: 19px;
  font-weight: 600;
  color: ${colors_dark.orange[100]};
  line-height: 24px;
  white-space: pre-wrap;
`;