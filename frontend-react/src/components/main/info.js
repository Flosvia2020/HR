import React from "react";
import styled from "styled-components";
import ListBox from "./ListBox";

export const InfoWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column-reverse;
`;

const Info = ({ data }) => {
  const newData = data.list;
  return (
    <div>
      <InfoWrapper>
        {newData.map((item) => (
          <div>
            <ListBox list={item}></ListBox>
          </div>
        ))}
      </InfoWrapper>
    </div>
  );
};

export default Info;
