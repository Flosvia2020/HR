import React, {useState} from "react";
import styled from "styled-components";

import {MediumBtn} from "../components/common/button";
import {InputLabel, LargeInput} from "../components/common/input";
import client from "../client";

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


function signupUser(user) {
    const config = {
        method: "POST",
        "Content-Type": "application/json"
    }
    client.post('/signup/', user, config)
        .then(response => {
            alert(response);
        }) // SUCCESS
        .catch(response => {
            alert(response);
        }); // ERROR
};

export const SignUp = () => {
    const [id, idValue] = useState("");
    const [nickname, nicknameValue] = useState("");
    const [password, passwordValue] = useState("");
    const [email, emailValue] = useState("");

    const onIdChanged = (e) => {
        idValue(e.target.value);
    };

    const onPasswordChanged = (e) => {
        passwordValue(e.target.value);
    };
    const onEmailChanged = (e) => {
        emailValue(e.target.value);
    };
    const onNicknameChanged = (e) => {
        nicknameValue(e.target.value);
    }

    const onSignupButtonClicked = () => {
        const user = {
            username: id,
            name: nickname,
            email: email,
            password: password
        }
        signupUser(user)
    };

    return (
        <div>
            <LoginWrapper>
                <StyledInputLabel htmlFor="id">아이디</StyledInputLabel>
                <LargeInput
                    id="id"
                    type="text"
                    placeholder="아이디"
                    onChange={onIdChanged}
                />
                <StyledInputLabel htmlFor="nickname">닉네임</StyledInputLabel>
                <LargeInput
                    id="nickname"
                    type="text"
                    placeholder="닉네임"
                    onChange={onNicknameChanged}
                />
                <StyledInputLabel htmlFor="password">비밀번호</StyledInputLabel>
                <LargeInput
                    id="password"
                    type="password"
                    placeholder="비밀번호"
                    onChange={onPasswordChanged}
                />
                <StyledInputLabel htmlFor="check-password">비밀번호 확인</StyledInputLabel>
                <LargeInput
                    id="check-password"
                    type="check-password"
                    placeholder="비밀번호 확인"
                    onChange={onPasswordChanged}
                />
                <StyledInputLabel htmlFor="email">email</StyledInputLabel>
                <LargeInput
                    id="email"
                    type="text"
                    placeholder="email"
                    onChange={onEmailChanged}
                />
                <MediumBtn onClick={() => {
                    onSignupButtonClicked()
                }}>회원가입</MediumBtn>
            </LoginWrapper>
        </div>
    );
};