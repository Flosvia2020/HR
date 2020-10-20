import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import PerfectScrollbar from "react-perfect-scrollbar";
import Info from "../components/main/info";
import { MediumBtn } from "../components/common/button";
import { InputLabel, LargeInput } from "../components/common/input";
import { useHistory } from "react-router";
import respone from "../dummies/data.json";

const ListWrapper = styled(PerfectScrollbar)`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  height: 95vh;
  width: 550px;
  margin: 10px;
  padding: 50px;
  display: inline-block;
  flex-direction: column-reverse;
  position: absolute;
  left: 150px;
  overflow: hidden;
  flex: 1;
  z-index: 0;
`;

const LoginWrapper = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  align-items: center;
  margin: 100px 100px 0px 0px;
  float: right;
  z-index: 10;
  background-color: #fafafa;
`;

const StyledInputLabel = styled(InputLabel)`
  margin-bottom: 5px;
`;

export const MyPage = () => {
  const list = respone.data;
  const userDummiesData = {
    id: "user",
    password: "0505",
    email: "hunwoo0505@gmail.com",
  };
  const [data, setData] = useState(list);
  const [userData, setUserData] = useState(userDummiesData);
  const [id, idValue] = useState(userData?.id);
  const [password, passwordValue] = useState(userData?.password);
  const [email, emailValue] = useState(userData?.email);

  const onIdChanged = (e) => {
    idValue(e.target.value);
  };

  const onPasswordChanged = (e) => {
    passwordValue(e.target.value);
  };
  const onEmailChanged = (e) => {
    emailValue(e.target.value);
  };
  const onsubmit = (id, password, email) => {
    axios.post("profile/update", {
      id,
      password,
      email,
    });
  };
  useEffect(() => {
    axios.get("profile/data").then((resp) => {
      setData(resp.data);
    });
    axios.get("profile/").then((resp) => {
      setUserData(resp.data);
    });
  });

  return (
    <div>
      <ListWrapper>
        {data.map((item) => (
          <Info data={item}></Info>
        ))}
      </ListWrapper>

      <LoginWrapper>
        <StyledInputLabel htmlFor="id">기존 ID</StyledInputLabel>
        <LargeInput type="text" value={userData?.id} />
        <StyledInputLabel htmlFor="password">기존 비밀번호</StyledInputLabel>
        <LargeInput id="password" value={userData?.password} />
        <StyledInputLabel htmlFor="email">기존 email</StyledInputLabel>
        <LargeInput id="email" type="text" value={userData?.email} />

        <StyledInputLabel htmlFor="id">ID 변경</StyledInputLabel>
        <LargeInput
          id="id"
          type="text"
          placeholder="아이디"
          onChange={onIdChanged}
        />
        <StyledInputLabel htmlFor="password">비밀번호 변경</StyledInputLabel>
        <LargeInput
          id="password"
          placeholder="비밀번호"
          onChange={onPasswordChanged}
        />
        <StyledInputLabel htmlFor="email">email 변경</StyledInputLabel>
        <LargeInput
          id="email"
          type="text"
          placeholder="email"
          onChange={onEmailChanged}
        />
        <MediumBtn
          onClick={() => {
            onsubmit(id, password, email);
          }}
        >
          정보변경
        </MediumBtn>
      </LoginWrapper>
    </div>
  );
};
