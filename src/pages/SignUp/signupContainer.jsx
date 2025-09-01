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
  const navigate = useNavigate();

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

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!StNumber || !Name || !Id || !Password || !ConfirmPassword) {
      return alert("모든 항목을 입력해주세요.");
    }
    if (idValidation === false) {
      return alert("이미 사용 중인 아이디입니다.");
    }
    if (isMatch === false) {
      return alert("비밀번호가 일치하지 않습니다.");
    }

    let body = {
      stNumber: StNumber,
      name: Name,
      id: Id,
      password: Password,
    };

    fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.text())
      .then((result) => {
        if (result === "success") {
          alert("회원가입이 완료되었습니다.");
          navigate("/login");
        } else {
          alert("회원가입이 실패했습니다. 다시 시도해주세요.");
        }
      });
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
        idValidation={idValidation}
        isMatch={isMatch}
        passwordChangeHandler={passwordChangeHandler}
        confirmChangeHandler={confirmChangeHandler}
      />
      <CheckId Id={Id} setIdValidation={setIdValidation} />
    </>
  );
}

export default SignUpContainer;
