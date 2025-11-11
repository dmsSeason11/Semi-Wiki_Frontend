import styled from "styled-components";
import colors_dark from "../../styles/color_table";

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 40px;
  width: 390px;
  height: 600px;
  border-radius: 24px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors_dark.gray[650]};

  color: ${colors_dark.gray[100]};
`;

export const MainMenu = styled.div`
  width: 250px;
  height: 100%;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 85px;
  
  font-family: "Pretendard, sans-serif";
  font-weight: 700;
  font-size: 36px;

  display: flex;
  padding-top: 20px;
  padding-left: 28px;
  border-bottom: 4px solid ${colors_dark.orange[200]};

  margin-bottom: 50px;
`;

export const Catagory = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  gap: 23px;
`;

export const CatagoryTitle = styled.div`
  margin-bottom: 12px;
  font-family: "Pretendard, sans-serif";
  font-size: 24px;
  font-weight: 600;
`;

export const CatagoryItem = styled.div`
  font-size: 20px;
  font-family: "Pretendard, sans-serif";
  font-weight: 400;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const Service = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  gap: 23px;
`;

export const ServiceTitle = styled.div`
  margin-bottom: 12px;
  font-family: "Pretendard, sans-serif";
  font-size: 24px;
  font-weight: 600;
`;

export const ServiceItem = styled.div`
  font-size: 20px;
  font-family: "Pretendard, sans-serif";
  font-weight: 400;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const SideMenu = styled.div`
  width: 170px;
  height: 100%;
  background-color: ${colors_dark.gray[700]};
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
`;