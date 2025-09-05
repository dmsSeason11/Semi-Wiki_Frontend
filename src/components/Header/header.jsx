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

function Header({ onSearch }) {
  const [inputValue, setInputValue] = useState(""); // 내부 입력 상태
  const accountId = localStorage.getItem("accountId");

  const handleSearch = () => {
    onSearch(inputValue); // 상위(App)의 상태 업데이트
  };

  return (
    <Container>
      <Link1 as={Link} to={"/"}>
        <img src={logo} alt="Logo" style={{ width: "231px", height: "72px" }} />
      </Link1>

      <Div>
        <SearchBox>
          <Button onClick={handleSearch}>
            <img
              src={searchIcon}
              alt="icon"
              style={{ width: "auto", height: "100%" }}
            />
          </Button>
          <Input
            type="text"
            placeholder="검색어를 입력하세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Enter 키도 검색
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
