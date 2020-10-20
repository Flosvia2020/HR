import React, { useState, useEffect } from "react";
import styled from "styled-components";
import respone from "../dummies/data.json";
import PerfectScrollbar from "react-perfect-scrollbar";
import axios from "axios";
import { useHistory } from "react-router";

import Info from "../components/main/info";
import ChangeToKg from "../components/skill/changeToKg";
import ChangeToPound from "../components/skill/changeToPound";
import { MediumButton } from "../components/common/button";
import IsEditPopup from "../components/main/isEdit";
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
  right: 150px;
  overflow: hidden;
  flex: 1;
`;
const SkillsBox = styled.div`
  align-items: center;
  width: 490px;
  display: flex;
  margin: 10px;
  justify-content: space-between;
  position: absolute;
  top: 25%;
  left: 50px;
`;
export const Main = () => {
  const list = respone.data;
  const [ModifiedmodalVisible, setModifiedModalVisible] = useState(false);
  const [data, setData] = useState(list);
  const onClickopen = () => {
    setModifiedModalVisible(true);
  };

  useEffect(() => {
    axios.get("api/maindata").then((resp) => {
      setData(resp.data);
    });
  });

  const onClosePopup = () => {
    setModifiedModalVisible(false);
  };
  const history = useHistory();

  const goToUser = () => {
    history.push("/mypage");
  };

  return (
    <div>
      <MediumButton
        onClick={() => {
          onClickopen();
        }}
      >
        추가하기
      </MediumButton>
      <MediumButton
        onClick={() => {
          goToUser();
        }}
      >
        MY PAGE
      </MediumButton>

      {ModifiedmodalVisible && (
        <IsEditPopup onClose={onClosePopup}></IsEditPopup>
      )}

      <SkillsBox>
        <ChangeToKg />
        <ChangeToPound />
      </SkillsBox>
      <ListWrapper>
        {data.map((item) => (
          <Info data={item}></Info>
        ))}
      </ListWrapper>
    </div>
  );
};
