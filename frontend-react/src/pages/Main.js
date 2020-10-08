import React from "react";
import styled from "styled-components";
import respone from "../dummies/data.json";

import { Info } from "../components/info";
import ChangeToKg from "../components/skill/changeToKg";
import ChangeToPound from "../components/skill/changeToPound";

const ListWrapper = styled.div`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  height: 95%;
  width: 550px;
  margin: 10px;
  padding: 50px;
  display: inline-block;
  flex-direction: column-reverse;
  position: absolute;
  right: 250px;
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
  return (
    <div>
      <SkillsBox>
        <ChangeToKg />
        <ChangeToPound />
      </SkillsBox>
      <ListWrapper>
        {list.map((item) => (
          <Info data={item}></Info>
        ))}
      </ListWrapper>
    </div>
  );
};
