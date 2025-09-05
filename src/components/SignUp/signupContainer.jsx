import React, { useState, useEffect } from "react";
import SignUp from "./signup.jsx";
import CheckId from "./checkId.jsx";
import { useNavigate } from "react-router-dom";

function SignUpContainer() {
  const [form, setForm] = useState({
    studentNum: "",
    username: "",
    accountId: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [idValidation, setIdValidation] = useState(null);
  const [isMatch, setIsMatch] = useState(null);
  const [checkId, setCheckId] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (password === "" || confirmPassword === "") {
      setIsMatch(null);
    } else {
      setIsMatch(password === confirmPassword);
    }
  }, [password, confirmPassword]);

  const handleCheckClick = () => {
    setCheckId(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");

    if (
      !form.studentNum ||
      !form.username ||
      !form.accountId ||
      !password ||
      !confirmPassword
    ) {
      return;
    }
    if (idValidation === false) {
      return;
    }
    if (isMatch === false) {
      return;
    }

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
    <>
      <SignUp
        form={form}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCheckClick={handleCheckClick}
        idValidation={idValidation}
        isMatch={isMatch}
        loading={loading}
      />
      <CheckId
        accountId={form.accountId}
        setIdValidation={setIdValidation}
        checkId={checkId}
        setCheckId={setCheckId}
      />
    </>
  );
}

export default SignUpContainer;
