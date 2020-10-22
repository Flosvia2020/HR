import React, { useState } from "react";
import styled from "styled-components";
import client from "../client";
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

export const AlertWrapper = styled.div`
  margin-left: 28%;
  height: 499px;
  display: flex;
`;

function loginUser(user) {
    const config={
        method:"POST",
        "Content-Type": "application/json"
    }
    client.post('/signin/',user,config)
        .then(response => {
            alert(response);
        }) // SUCCESS
        .catch(response => {
            alert(response);
        }); // ERROR
};

const StyledInputLabel = styled(InputLabel)`
  margin-bottom: 5px;
`;

export const Login = () => {
  const [id, idValue] = useState("");
  const [password, passwordValue] = useState("");

  const onIdChanged = (e) => {
    idValue(e.target.value);
  };

  const onPasswordChanged = (e) => {
    passwordValue(e.target.value);
  };

  const onLoginButtonClicked = () => {
    const user={
            username:id,
            password:password
        }
       loginUser(user)
  };
  return (
    <div>
      <LoginWrapper>
        <StyledInputLabel htmlFor="id">ID</StyledInputLabel>
        <LargeInput
          id="id"
          type="text"
          placeholder="아이디"
          onChange={onIdChanged}
        />
        <StyledInputLabel htmlFor="password">비밀번호</StyledInputLabel>
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
