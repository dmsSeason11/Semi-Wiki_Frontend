import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import github from "../../assets/github.png";

function Header() {
  const accountId = localStorage.getItem("accountId");

  return (
    <Container>
      <Link1 as={Link} to={"/"}>
        <img src={logo} alt="Logo" style={{ width: "231px", height: "72px" }} />
      </Link1>
      <Div>
        <SearchBox>
          <Button>
            <img
              src={searchIcon}
              alt="icon"
              style={{ width: "auto", height: "100%" }}
            />
          </Button>
          <Input type="text" placeholder="검색어를 입력하세요" />
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
