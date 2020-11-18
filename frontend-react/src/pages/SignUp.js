import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { MediumBtn } from "../components/common/button";
import { InputLabel, LargeInput } from "../components/common/input";
import { useHistory } from "react-router";

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

const StyledInputLabel = styled(InputLabel)`
  margin-bottom: 5px;
`;

export const SignUp = () => {
  const [id, idValue] = useState("");
  const [password, passwordValue] = useState("");
  const [name, nameValue] = useState("");
  const [email, emailValue] = useState("");

  const onIdChanged = (e) => {
    idValue(e.target.value);
  };

  const onPasswordChanged = (e) => {
    passwordValue(e.target.value);
  };
  const onNameChanged = (e) => {
    nameValue(e.target.value);
  };
  const onEmailChanged = (e) => {
    emailValue(e.target.value);
  };
  const history = useHistory();

  const onLoginButtonClicked = (id, password, name, email) => {
    if(id){
      axios.post("http://10.156.146.197:8000/signup/", {
        id,
        name,
        password,
        email,
      }).then((resp)=> {
        if(resp.data){
          history.push("/login");
        }
      })
    }
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
           <StyledInputLabel htmlFor="name">name</StyledInputLabel>
        <LargeInput
          id="name"
          type="text"
          placeholder="name"
          onChange={onNameChanged}
        />
        <StyledInputLabel htmlFor="email">email</StyledInputLabel>
        <LargeInput
          id="email"
          type="text"
          placeholder="email"
          onChange={onEmailChanged}
        />
        <MediumBtn onClick={ () => {onLoginButtonClicked(id, password,name, email)}}>회원가입</MediumBtn>
      </LoginWrapper>
    </div>
  );
};
