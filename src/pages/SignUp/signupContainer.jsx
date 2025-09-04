import React, { useState } from "react";
import SignUp from "./signup.jsx";
import CheckId from "./checkId.jsx";
import { useNavigate } from "react-router-dom";

function SignUpContainer() {
  const [StNumber, setStNumber] = useState("");
  const [Name, setName] = useState("");
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [idValidation, setIdValidation] = useState(null);
  const [isMatch, setIsMatch] = useState(null);
  const [checkId, setCheckId] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheckClick = () => {
    setCheckId(true);
  };

  const passwordChangeHandler = (e) => {
    const value = e.target.value;
    setPassword(value);

    setIsMatch(ConfirmPassword === "" ? null : value === ConfirmPassword);
  };

  const confirmChangeHandler = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    setIsMatch(value === "" ? null : Password === value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");

    if (!StNumber || !Name || !Id || !Password || !ConfirmPassword) {
      return;
    }
    if (idValidation === false) {
      return;
    }
    if (isMatch === false) {
      return;
    }

    let body = {
      stNumber: StNumber,
      name: Name,
      id: Id,
      password: Password,
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
          `알 수 없는 오류가 발생했습니다. (상태 코드 ${response.status}`
        );
      }

      const responseData = await response.json();
      console.log("회원가입 성공:", responseData);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <SignUp
        StNumber={StNumber}
        setStNumber={setStNumber}
        Name={Name}
        setName={setName}
        Id={Id}
        setId={setId}
        Password={Password}
        setPassword={setPassword}
        ConfirmPassword={ConfirmPassword}
        setConfirmPassword={setConfirmPassword}
        onSubmitHandler={onSubmitHandler}
        handleCheckClick={handleCheckClick}
        idValidation={idValidation}
        isMatch={isMatch}
        passwordChangeHandler={passwordChangeHandler}
        confirmChangeHandler={confirmChangeHandler}
        loading={loading}
      />
      <CheckId
        Id={Id}
        setIdValidation={setIdValidation}
        checkId={checkId}
        setCheckId={setCheckId}
      />
    </>
  );
}

export default SignUpContainer;
