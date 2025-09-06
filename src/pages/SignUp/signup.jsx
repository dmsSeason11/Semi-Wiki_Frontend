import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/reset.css";
import checkIcon from "../../assets/signup_check.png";
import errorIcon from "../../assets/signup_error.png";
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

function SignUp() {
  const [form, setForm] = useState({
    studentNum: "",
    username: "",
    accountId: "",
  });
  const { studentNum, username, accountId } = form;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [idValidation, setIdValidation] = useState(null);
  const [isMatch, setIsMatch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [idLoading, setIdLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isSubmitDisabled = !idValidation || !isMatch || loading;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "accountId") {
      setIdValidation(null);
    }
  };

  //아이디 중복 검사
  const handleCheckClick = async (e) => {
    e.preventDefault();
    if (idLoading) return;
    if (!accountId) {
      setIdValidation(null);
      return;
    }
    setIdLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/auth/check/${accountId}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setIdValidation(true);
        } else if (response.status === 409) {
          setIdValidation(false);
        } else {
          setIdValidation(false);
          throw new Error("서버 오류:", response.status);
        }
      } else {
        let data = await response.json();
        setIdValidation(data);
      }
    } catch (error) {
      console.error("알 수 없는 오류:", error);
      setIdValidation(false);
    } finally {
      setIdLoading(false);
    }
  };

  useEffect(() => {
    if (password === "" || confirmPassword === "") {
      setIsMatch(null);
    } else {
      setIsMatch(password === confirmPassword);
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
    if (idValidation !== true) {
      return;
    }
    if (isMatch !== true) {
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
        <SignUptitle>회원가입</SignUptitle>
        <form onSubmit={handleSubmit}>
          <InputBox>
            <div>
              <Inputtext>학번</Inputtext>
              <Input
                name="studentNum"
                type="text"
                placeholder="학번을 입력해주세요"
                style={{ width: "195px" }}
                value={studentNum}
                onChange={handleChange}
              />
            </div>
            <div>
              <Inputtext>이름</Inputtext>
              <Input
                name="username"
                type="text"
                placeholder="이름을 입력해주세요"
                style={{ width: "195px" }}
                value={username}
                onChange={handleChange}
              />
            </div>
          </InputBox>
          <InputBox>
            <div style={{ position: "relative" }}>
              <Inputtext>아이디</Inputtext>
              <Input
                name="accountId"
                type="text"
                placeholder="아이디를 입력해주세요"
                style={{
                  width: "285px",
                  border:
                    idValidation !== null &&
                    (idValidation ? "1px solid #2ECC71" : "1px solid #FF645B"),
                }}
                value={accountId}
                onChange={handleChange}
              />
              {idValidation !== null &&
                (idValidation ? (
                  <Icon src={checkIcon} alt="check" />
                ) : (
                  <Icon src={errorIcon} alt="error" />
                ))}
            </div>
            <Button
              style={{ width: "100px", marginTop: "36px" }}
              type="button"
              onClick={handleCheckClick}
              disabled={idLoading}
            >
              중복 확인
            </Button>
          </InputBox>
          <Inputtext>비밀번호</Inputtext>
          <Input
            name="password"
            type="password"
            placeholder="사용할 비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Inputtext>비밀번호 확인</Inputtext>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          <Button type="submit" disabled={isSubmitDisabled}>
            {loading ? "로딩 중..." : "등록하기"}
          </Button>
        </form>
        <SubText>
          이미 계정이 있으신가요? <LoginLink to={"/login"}>로그인</LoginLink>
        </SubText>
      </SignUpDiv>
    </Container>
  );
}

export default SignUp;
