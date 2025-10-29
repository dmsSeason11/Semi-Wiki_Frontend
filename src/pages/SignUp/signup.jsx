import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/reset.css";
import colors from "../../styles/color";
import checkIcon from "../../assets/signup_check.png";
import errorIcon from "../../assets/signup_error.png";
import EyeIcon from "../../assets/eyes.svg";
import EyeOpenIcon from "../../assets/eyes_open.svg";
import accountIcon from "../../assets/account.svg";
import passwordIcon from "../../assets/password.svg";
import {
  Container,
  SignUpDiv,
  SignUptitle,
  InputBox,
  InputTextBox,
  InputText,
  Input,
  IdStatusIcon,
  IdCheckButton,
  ToggleButton,
  InputSubText,
  Button,
  SubText,
  LoginLink,
} from "./signup.styles";

function SignUp() {
  const [form, setForm] = useState({
    studentNum: "",
    username: "",
    accountId: "",
  });
  const { studentNum, username, accountId } = form;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isIdAvailable, setIdAvailable] = useState(null);
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [idLoading, setIdLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isSubmitDisabled = !isIdAvailable || !isPasswordMatch || loading;
  const regexId = /admin/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "accountId") {
      setIdAvailable(null);
    }
  };

  //아이디 중복 검사
  const handleCheckClick = async (e) => {
    e.preventDefault();
    if (idLoading) return;
    if (!accountId) {
      setIdAvailable(null);
      return;
    }
    if (regexId.test(accountId) === true) {
      setIdAvailable(null);
      alert("admin이 포함된 아이디는 생성할 수 없습니다.");
      return;
    }
    setIdLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/auth/check/${accountId}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setIdAvailable(true);
        } else if (response.status === 409) {
          setIdAvailable(false);
        } else {
          setIdAvailable(false);
          throw new Error("서버 오류:", response.status);
        }
      } else {
        let data = await response.json();
        setIdAvailable(data);
      }
    } catch (error) {
      console.error("알 수 없는 오류:", error);
      setIdAvailable(false);
    } finally {
      setIdLoading(false);
    }
  };

  useEffect(() => {
    if (password === "" || confirmPassword === "") {
      setIsPasswordMatch(null);
    } else {
      setIsPasswordMatch(password === confirmPassword);
    }
  }, [password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (
      !form.studentNum ||
      !form.username ||
      !form.accountId ||
      !password ||
      !confirmPassword
    ) {
      return;
    }
    if (isIdAvailable !== true) {
      return;
    }
    if (isPasswordMatch !== true) {
      return;
    }
    setLoading(true);
    setError("");

    let body = {
      studentNum: form.studentNum,
      username: form.username,
      accountId: form.accountId,
      password: password,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        if (response.status === 400) throw new Error("잘못된 요청입니다.");
        if (response.status === 409)
          throw new Error("이미 존재하는 회원 정보입니다.");
        if (response.status === 500)
          throw new Error(
            "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
          );
        throw new Error(
          `알 수 없는 오류가 발생했습니다. (HTTP ${response.status})`
        );
      }
      navigate("/login");
    } catch (error) {
      alert(error.message + "\n잠시 후 다시 시도해주세요.");
      console.error("회원가입 에러:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      <SignUpDiv>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <SignUptitle>회원가입</SignUptitle>
          <form onSubmit={handleSubmit}>
            <InputBox>
              <div>
                <InputTextBox>
                  <img src={accountIcon} />
                  <InputText>학번</InputText>
                </InputTextBox>
                <Input
                  name="studentNum"
                  type="text"
                  placeholder="학번을 입력해주세요"
                  style={{ width: "240px" }}
                  value={studentNum}
                  onChange={handleChange}
                />
              </div>
              <div>
                <InputTextBox>
                  <img src={accountIcon} />
                  <InputText>이름</InputText>
                </InputTextBox>
                <Input
                  name="username"
                  type="text"
                  placeholder="이름을 입력해주세요"
                  style={{ width: "240px" }}
                  value={username}
                  onChange={handleChange}
                />
              </div>
            </InputBox>
            <InputBox>
              <div style={{ position: "relative" }}>
                <InputTextBox>
                  <img src={accountIcon} />
                  <InputText>아이디</InputText>
                </InputTextBox>
                <Input
                  name="accountId"
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  style={{
                    width: "360px",
                    border:
                      isIdAvailable !== null &&
                      (isIdAvailable
                        ? `1px solid ${colors.success}`
                        : `1px solid ${colors.error}`),
                  }}
                  value={accountId}
                  onChange={handleChange}
                />
                {isIdAvailable !== null &&
                  (isIdAvailable ? (
                    <IdStatusIcon src={checkIcon} alt="check" />
                  ) : (
                    <IdStatusIcon src={errorIcon} alt="error" />
                  ))}
              </div>
              <IdCheckButton onClick={handleCheckClick} disabled={idLoading}>
                중복 확인
              </IdCheckButton>
            </InputBox>
            {isIdAvailable === false && (
              <InputSubText>이미 사용중인 사용자 아이디 입니다</InputSubText>
            )}
            <div style={{ position: "relative" }}>
              <InputTextBox>
                <img src={passwordIcon} />
                <InputText>비밀번호</InputText>
              </InputTextBox>
              <Input
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="사용할 비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ToggleButton onClick={() => setPasswordVisible((prev) => !prev)}>
                <img
                  width="25px"
                  src={passwordVisible ? EyeOpenIcon : EyeIcon}
                  alt="비밀번호 보기"
                />{" "}
              </ToggleButton>
            </div>
            <div style={{ position: "relative" }}>
              <InputTextBox>
                <img src={passwordIcon} />
                <InputText>비밀번호 확인</InputText>
              </InputTextBox>
              <Input
                name="confirmPassword"
                type={passwordVisible ? "text" : "password"}
                placeholder="비밀번호를 다시 입력해주세요"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{
                  border:
                    isPasswordMatch !== null &&
                    (isPasswordMatch
                      ? `1px solid ${colors.success}`
                      : `1px solid ${colors.error}`),
                }}
              />
              <ToggleButton onClick={() => setPasswordVisible((prev) => !prev)}>
                <img
                  width="25px"
                  src={passwordVisible ? EyeOpenIcon : EyeIcon}
                  alt="비밀번호 보기"
                />{" "}
              </ToggleButton>
            </div>
            {isPasswordMatch !== null && (
              <InputSubText
                style={{
                  color: isPasswordMatch
                    ? `${colors.success}`
                    : `${colors.error}`,
                }}
              >
                {isPasswordMatch
                  ? "비밀번호가 일치합니다"
                  : "비밀번호가 일치하지 않습니다"}
              </InputSubText>
            )}
            <Button type="submit" disabled={isSubmitDisabled}>
              {loading ? "로딩 중..." : "회원가입"}
            </Button>
          </form>
          <SubText>
            이미 계정이 있으신가요? <LoginLink to={"/login"}>로그인</LoginLink>
          </SubText>
        </div>
      </SignUpDiv>
    </Container>
  );
}

export default SignUp;
