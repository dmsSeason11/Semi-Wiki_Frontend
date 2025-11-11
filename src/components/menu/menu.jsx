import React from "react";
import { href, useNavigate } from "react-router-dom";
import {
  MenuContainer,
  MainMenu,
  TitleBox,
  Catagory,
  CatagoryTitle,
  CatagoryItem,
  Service,
  ServiceTitle,
  ServiceItem,
  SideMenu,
} from "./menu.styles";

function Menu() {
  const navigate = useNavigate();
  const accountId = localStorage.getItem("accountId");

  const link = () => {
    window.open("https://naver.me/FAPaPAQs", "_blank", "width=600,height=750");
  };

  return (
    <MenuContainer>
      <MainMenu>
        <TitleBox>메뉴</TitleBox>
        <Catagory>
          <CatagoryTitle>카테고리</CatagoryTitle>
          <CatagoryItem>전공</CatagoryItem>
          <CatagoryItem>동아리</CatagoryItem>
          <CatagoryItem>기타</CatagoryItem>
        </Catagory>
        <Service>
          <ServiceTitle Router>서비스</ServiceTitle>
          <ServiceItem onClick={() => navigate(`/mypage/${accountId}/list`)}>
            내가 작성한 게시글
          </ServiceItem>
          <ServiceItem onClick={() => navigate("/postform")}>
            새 게시글 작성
          </ServiceItem>
          <ServiceItem onClick={link}>문의하기</ServiceItem>
        </Service>
      </MainMenu>
      <SideMenu></SideMenu>
    </MenuContainer>
  );
}

export default Menu;
