import "../../styles/reset.css";
import { Link } from "react-router-dom";
import check from "../../assets/signup_check.png";
import error from "../../assets/signup_error.png";
import {
  Container,
  SignUpDiv,
  SignUptitle,
  InputBox,
  Inputtext,
  Input,
  Icon,
  PasswordSubText,
  Button,
  SubText,
  LoginLink,
} from "./signup.styles";

function SignUp({
  StNumber,
  setStNumber,
  Name,
  setName,
  Id,
  setId,
  Password,
  setPassword,
  ConfirmPassword,
  setConfirmPassword,
  onSubmitHandler,
  handleCheckClick,
  idValidation,
  isMatch,
  passwordChangeHandler,
  confirmChangeHandler,
}) {
  return (
    <Container>
      <SignUpDiv>
        <SignUptitle>회원가입</SignUptitle>
        <form onSubmit={onSubmitHandler}>
          <InputBox>
            <div>
              <Inputtext>학번</Inputtext>
              <Input
                name="stnumber"
                type="text"
                placeholder="학번을 입력해주세요"
                style={{ width: "195px" }}
                value={StNumber}
                onChange={(e) => setStNumber(e.target.value)}
              />
            </div>
            <div>
              <Inputtext>이름</Inputtext>
              <Input
                name="name"
                type="text"
                placeholder="이름을 입력해주세요"
                style={{ width: "195px" }}
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </InputBox>
          <InputBox>
            <div style={{ position: "relative" }}>
              <Inputtext>아이디</Inputtext>
              <Input
                name="id"
                type="text"
                placeholder="아이디를 입력해주세요"
                style={{
                  width: "285px",
                  border:
                    idValidation !== null &&
                    (idValidation ? "1px solid #2ECC71" : "1px solid #FF645B"),
                }}
                value={Id}
                onChange={(e) => setId(e.target.value)}
              />
              {idValidation !== null &&
                (idValidation ? (
                  <Icon src={check} alt="check" />
                ) : (
                  <Icon src={error} alt="error" />
                ))}
            </div>
            <Button
              style={{ width: "100px", marginTop: "36px" }}
              type="button"
              onClick={handleCheckClick}
            >
              중복 확인
            </Button>
          </InputBox>
          <Inputtext>비밀번호</Inputtext>
          <Input
            name="password"
            type="password"
            placeholder="사용할 비밀번호를 입력해주세요"
            value={Password}
            onChange={passwordChangeHandler}
          />
          <Inputtext>비밀번호 확인</Inputtext>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            value={ConfirmPassword}
            onChange={confirmChangeHandler}
            style={{
              border:
                isMatch !== null &&
                (isMatch ? "1px solid #2ECC71" : "1px solid #FF645B"),
            }}
          />
          {isMatch !== null && (
            <PasswordSubText
              style={{
                color: isMatch ? "#2ECC71" : "#FF645B",
              }}
            >
              {isMatch
                ? "비밀번호가 일치합니다"
                : "비밀번호가 일치하지 않습니다"}
            </PasswordSubText>
          )}
          <Button type="submit">등록하기</Button>
        </form>
        <SubText>
          이미 계정이 있으신가요? <LoginLink to={"/login"}>로그인</LoginLink>
        </SubText>
      </SignUpDiv>
    </Container>
  );
}

export default SignUp;
