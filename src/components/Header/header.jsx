import React from "react";
import { Container, Div, SearchBox, Button, Input } from "./header.styles";
import logo from "../../assets/logo/logo.png";
import user from "../../assets/user.png";
import searchIcon from "../../assets/search_icon.png";
import github from "../../assets/github.png";

function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" style={{ width: "231px", height: "72px" }} />
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
        <img src={user} alt="user" style={{ width: "48px", height: "48px" }} />
      </Div>
    </Container>
  );
}

export default Header;
