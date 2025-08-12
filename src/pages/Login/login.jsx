import "../../styles/reset.css";
import LogoImage from "../../assets/logo/logo_vertical.svg";
import {
  Container,
  Loginarea,
  Left_area,
  Logo,
  Slogan,
  LoginDiv,
  Logintitle,
  Inputtext,
  Input,
  Button,
  SubText,
  LinkText
} from "./login.styles";

function Login() {
  return (
    <Container>
      <Loginarea>
        <Left_area>
          <Logo src={LogoImage} alt="로고" />
          <Slogan>
            <strong>SemiWiki</strong>에서 대마고의 모든 정보를
          </Slogan>
          <Slogan>기록하고 공유하세요</Slogan>
        </Left_area>

        <LoginDiv>
          <Logintitle>로그인</Logintitle>
          <form>
            <Inputtext>아이디</Inputtext>
            <Input type="text" placeholder="아이디를 입력해주세요" />
            <Inputtext>비밀번호</Inputtext>
            <Input type="password" placeholder="비밀번호를 입력해주세요" />
            <Button type="submit">로그인</Button>
          </form>
          <SubText>
            아직 회원이 아니신가요? <LinkText href="#">회원가입</LinkText>
          </SubText>
        </LoginDiv>
      </Loginarea>
    </Container>
  );
}

export default Login;
