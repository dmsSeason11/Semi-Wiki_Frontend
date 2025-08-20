import React, { useState } from "react";
import SignUp from "./signup.jsx";
import { useNavigate } from "react-router-dom";

function SignUpContainer() {
  const [StNumber, setStNumber] = useState("");
  const [Name, setName] = useState("");
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [idValidation, setIdValidation] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (Password != ConfirmPassword) {
      return alert("비밀번호가 일치하지 않습니다.");
    }

    let body = {
      stNumber: StNumber,
      name: Name,
      id: Id,
      password: Password,
    };

    fetch("/sign-up", body)
      .then((resp) => resp.text())
      .then((result) => {
        if (result === "success") {
          alert("회원가입이 완료되었습니다.");
          navigate("/login");
        } else {
          alert("회원가입이 실패했습니다. 다시 시도해주세요.햣");
        }
      });
  };

  const checkId = () => {
    fetch("/check-accountId" + Id)
      .then((resp) => resp.text())
      .then((result) => {
        if (Number(result) === 0) {
          setIdValidation(true);
        } else {
          setIdValidation(false);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
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
      checkId={checkId}
    />
  );
}

export default SignUpContainer;
