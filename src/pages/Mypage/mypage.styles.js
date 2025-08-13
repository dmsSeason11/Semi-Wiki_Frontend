import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: white;
`;

export const MypageCard = styled.div`
  display: flex;
  background: #333;
  border-radius: 12px;
  padding: 20px 60px;
  width: 1200px;
  height: 450px;
  color: white;
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
  background: #353535;
  border-radius: 10px;
  padding: 80px 50px;
  width: 600px;
  height: 340px;
  border: 1px solid white;
`;

export const ProfileImage = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 50%;
  background: gray;
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
  color: #c6c6c6;
  span {
    color: #ff9e3d;
    font-weight: bold;
  }
`;

export const Logout = styled.button`
  display: flex;
  background: none;
  border: none;
  color: #ff645b;
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
  color: #ff9e3d;
  font-size: 35px;
  font-weight: 500;
  cursor: pointer;
`;

export const MenuIcon = styled.img`
  width: 35px;
  margin-right: 10px;
`;

export const MenuLabel = styled.div``;
