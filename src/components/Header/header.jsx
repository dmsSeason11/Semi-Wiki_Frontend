import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Div,
  SearchBox,
  Button,
  Input,
  Link1,
} from "./header.styles";
import logo from "../../assets/logo/logo.png";
import user from "../../assets/user.png";
import searchIcon from "../../assets/search_icon.png";

function Header() {
  const accountId = localStorage.getItem("accountId");
  const token = localStorage.getItem("accessToken");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const fetchBoardList = async () => {
    console.log("검색어:", searchTerm);
    console.log("선택 카테고리:", selectedCategories);

    try {
      const params = new URLSearchParams();
      if (searchTerm) params.append("keyword", searchTerm);
      selectedCategories.forEach((cat) => params.append("categories", cat));
      params.append("offset", 0);
      params.append("limit", 20);
      params.append("orderBy", "recent");

      const response = await fetch(
        `http://54.180.153.221:8080/notice-board/list?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        console.log("게시판 목록:", data);
        if (data.length === 0) console.log("게시글이 존재하지 않습니다.");
      } else if (response.status === 400) {
        console.error("잘못된 요청 (400)");
      } else if (response.status === 401) {
        const err = await response.json();
        console.error("인증 문제 (401):", err);
      } else if (response.status === 403) {
        const err = await response.json();
        console.error("권한 문제 (403):", err);
      } else {
        console.error("알 수 없는 오류:", response.status);
      }
    } catch (error) {
      console.error("API 호출 에러:", error);
    }
  };

  return (
    <Container>
      <Link1 as={Link} to={"/"}>
        <img src={logo} alt="Logo" style={{ width: "231px", height: "72px" }} />
      </Link1>
      <Div>
        <SearchBox>
          <Button onClick={fetchBoardList}>
            <img
              src={searchIcon}
              alt="icon"
              style={{ width: "auto", height: "100%" }}
            />
          </Button>
          <Input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBox>
        <Link1 as={Link} to={`/mypage/${accountId}`}>
          <img
            src={user}
            alt="user"
            style={{ width: "48px", height: "48px" }}
          />
        </Link1>
      </Div>
    </Container>
  );
}

export default Header;
