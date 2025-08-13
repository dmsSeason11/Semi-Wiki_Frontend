import React from "react";
import { Container, Div, Member, P, Img } from "./footer.styles";
import favicon from "../../assets/logo/favicon.svg";
import github from "../../assets/github.png";

const Footer = () => {
  return (
    <Container>
      <Div>
        <Member>
          <P>Frontend</P>
          <P>전재준</P>
          <P>이진서</P>
          <P>장윤호</P>
        </Member>
        <Member>
          <P>Backend</P>
          <P>이한샘</P>
          <P>남우현</P>
        </Member>
        <Member>
          <P>Android</P>
          <P>안세하</P>
        </Member>
        <Member>
          <P>Design</P>
          <P>정일웅</P>
        </Member>
      </Div>
      <Div style={{ alignItems: "center", marginTop: "55px" }}>
        <Img
          src={favicon}
          alt="image"
          style={{ width: "78px", height: "52px" }}
        />
        <Img
          src={github}
          alt="github"
          style={{ width: "60px", height: "60px" }}
        />
      </Div>
    </Container>
  );
};

export default Footer;
