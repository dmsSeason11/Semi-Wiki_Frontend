import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  LinkText,
} from "./login.styles";

function Login() {
  const [form, setForm] = useState({ accountId: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (loading) return;
      setLoading(true);

      try {
        const response = await fetch("http://43.201.199.73:8080/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (response.status === 400) {
          console.error("Error response:", response);
          throw new Error("잘못된 요청입니다.");
        }
        if (response.status === 401) {
          console.error("Error response:", response);
          throw new Error("비밀번호가 잘못되었습니다.");
        }
        if (response.status === 404) {
          console.error("Error response:", response);
          throw new Error("아이디를 찾을 수 없습니다.");
        }
        if (!response.ok) {
          console.error("Error response:", response);
          throw new Error("알 수 없는 오류가 발생했습니다.");
        }

        const data = await response.json();

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);

        navigate("/");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  };

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
          <form onSubmit={handleSubmit}>
            <Inputtext>아이디</Inputtext>
            <Input
              type="text"
              name="accountId"
              value={form.accountId}
              onChange={handleChange}
              placeholder="아이디를 입력해주세요"
              required
            />
            <Inputtext>비밀번호</Inputtext>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요"
              required
            />
            <Button type="submit" disabled={loading}>
              {loading ? "로딩 중..." : "로그인"}
            </Button>
          </form>

          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

          <SubText>
            아직 회원이 아니신가요?{" "}
            <LinkText as={Link} to="/signup">
              회원가입
            </LinkText>
          </SubText>
        </LoginDiv>
      </Loginarea>
    </Container>
  );
}

export default Login;
