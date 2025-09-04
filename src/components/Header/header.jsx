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
  }
    return (
      <Container>
        <Link1 as={Link} to={"/"}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "231px", height: "72px" }}
          />
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
  };


export default Header;
