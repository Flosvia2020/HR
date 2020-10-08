import React, { useState } from "react";
import styled from "styled-components";

import { MediumBtn } from "../components/common/button";
import { InputLabel, LargeInput } from "../components/common/input";

const LoginWrapper = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  align-items: center;
  margin: auto;
  background-color: #fafafa;
`;

const StyledInputLabel = styled(InputLabel)`
  margin-bottom: 5px;
`;

export const SignUp = () => {
  const [email, emailValue] = useState("");
  const [password, passwordValue] = useState("");

  const onEmailChanged = (e) => {
    emailValue(e.target.value);
  };

  const onPasswordChanged = (e) => {
    passwordValue(e.target.value);
  };

  const onLoginButtonClicked = () => {
    console.log(password, email); // 연동
  };
  return (
    <div>
      <LoginWrapper>
        <StyledInputLabel htmlFor="email">이메일</StyledInputLabel>
        <LargeInput
          id="email"
          type="text"
          placeholder="이메일"
          onChange={onEmailChanged}
        />
        <StyledInputLabel htmlFor="password">비밀번호</StyledInputLabel>
        <LargeInput
          id="password"
          type="password"
          placeholder="비밀번호"
          onChange={onPasswordChanged}
        />
        <StyledInputLabel htmlFor="password">비밀번호 확인</StyledInputLabel>
        <LargeInput
          id="password"
          type="password"
          placeholder="비밀번호"
          onChange={onPasswordChanged}
        />
        <MediumBtn onClick={onLoginButtonClicked}>로그인</MediumBtn>
      </LoginWrapper>
    </div>
  );
};
