import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/reset.css";
import LogoImage from "../../assets/logo/logo_vertical.svg";
import { startTokenAutoReissue } from "./Reissue";
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // handleChange 정의 추가
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      console.error("[로그인 에러]", error);
      alert(error + "\n잠시 후 다시 시도해주세요.");
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/auth/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
          mode: "cors",
          credentials: "include",
        }
      );

      if (!response.ok) {
        switch (response.status) {
          case 400:
            throw new Error("잘못된 요청입니다.");
          case 403:
            throw new Error("비밀번호가 잘못되었습니다.");
          case 404:
            throw new Error("아이디를 찾을 수 없습니다.");
          case 500:
            throw new Error(
              "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
            );
          default:
            throw new Error(
              `알 수 없는 오류가 발생했습니다. (HTTP ${response.status})`
            );
        }
      }

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        throw new Error("서버 응답 파싱 중 오류가 발생했습니다.");
      }

      if (!data.accessToken || !data.refreshToken) {
        throw new Error(
          "서버 응답이 올바르지 않습니다. 토큰이 존재하지 않습니다."
        );
      }

      try {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("accountId", form.accountId);
        document.cookie = "accessTokenNumber=0; path=/;";

        startTokenAutoReissue();
      } catch (storageError) {
        throw new Error("localStorage 저장 중 오류가 발생했습니다.");
      }

      navigate("/");
    } catch (err) {
      console.error("로그인 에러:", err);
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
