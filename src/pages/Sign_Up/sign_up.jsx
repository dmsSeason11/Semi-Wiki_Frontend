import "../../styles/reset.css";
import {
  Container,
  SignUpDiv,
  SignUptitle,
  InputBox,
  Inputtext,
  Input,
  Button,
  SubText,
  LinkText,
} from "./sign_up.styles";

function SignUp() {
  return (
    <Container>
      <SignUpDiv>
        <SignUptitle>회원가입</SignUptitle>
        <form>
          <InputBox>
            <div>
              <Inputtext>학번</Inputtext>
              <Input
                type="text"
                placeholder="학번을 입력해주세요"
                style={{ width: "195px" }}
              />
            </div>
            <div>
              <Inputtext>이름</Inputtext>
              <Input
                type="text"
                placeholder="이름을 입력해주세요"
                style={{ width: "195px" }}
              />
            </div>
          </InputBox>
          <InputBox>
            <div>
              <Inputtext>아이디</Inputtext>
              <Input
                type="text"
                placeholder="아이디를 입력해주세요"
                style={{ width: "285px" }}
              />
            </div>
            <Button style={{ width: "100px", marginTop: "36px" }}>
              중복 확인
            </Button>
          </InputBox>
          <Inputtext>비밀번호</Inputtext>
          <Input type="password" placeholder="사용할 비밀번호를 입력해주세요" />
          <Inputtext>비밀번호</Inputtext>
          <Input type="password" placeholder="비밀번호를 다시 입력해주세요" />
          <Button type="submit">등록하기</Button>
        </form>
        <SubText>
          이미 계정이 있으신가요? <LinkText href="#">로그인</LinkText>
        </SubText>
      </SignUpDiv>
    </Container>
  );
}

export default SignUp;
