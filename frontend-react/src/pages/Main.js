import React from "react";
import styled from "styled-components";
import respone from "../dummies/data.json";
import PerfectScrollbar from "react-perfect-scrollbar";

import Info from "../components/main/info";
import ChangeToKg from "../components/skill/changeToKg";
import ChangeToPound from "../components/skill/changeToPound";
import client from "../client";

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
  right: 250px;
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
let list;
client.get('/main/')
    .then(response => {
        console.log(response.data.posts);
        list=response.data.posts;
        alert(response);
    }) // SUCCESS
    .catch(response => {
        alert(response);
    }); // ERROR

export const Main = () => {
  //const list = posts;
  //console.log(list);
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
