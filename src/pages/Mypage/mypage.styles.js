import styled from "styled-components";
import { colors } from "../../styles/color";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${colors.gray[50]};
`;

export const MypageCard = styled.div`
  display: flex;
  background: ${colors.gray[900]};
  border-radius: 12px;
  padding: 20px 60px;
  width: 1200px;
  height: 450px;
  color: ${colors.gray[50]};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const LeftBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const ProfileCard = styled.div`
  display: flex;
  align-items: flex-start;
  background: ${colors.gray[950]};
  border-radius: 10px;
  padding: 80px 50px;
  width: 600px;
  height: 340px;
  border: 1px solid ${colors.gray[50]};
`;

export const ProfileImage = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 50%;
  background: ${colors.gray[800]};
  margin-right: 45px;
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const IdText = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

export const PostCount = styled.div`
  font-size: 25px;
  margin: 4px 0;
  color: ${colors.gray[300]};
  span {
    color: ${colors.orange[900]};
    font-weight: bold;
  }
`;

export const Logout = styled.button`
  display: flex;
  background: none;
  border: none;
  color: ${colors.error};
  font-size: 23px;
  jusstify-content: flex-start;
  cursor: pointer;
  padding: 0;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export const RightBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 70px;
  gap: 60px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${colors.orange[900]};
  font-size: 35px;
  font-weight: 500;
  cursor: pointer;
`;

export const MenuIcon = styled.img`
  width: 35px;
  margin-right: 10px;
`;

export const MenuLabel = styled.div``;
