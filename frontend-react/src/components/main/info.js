import React, { useState } from "react";
import styled from "styled-components";
import ListBox from "./ListBox";
import { ReactComponent as More } from "../../icons/More.svg";
import { Ul, Li, DropDownListContainer } from "../common/dropdown";
import IsEditPopup from "./isEdit";

export const InfoWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column-reverse;
`;

export const MoreButton = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ModifiedmodalVisible, setModifiedModalVisible] = useState(false);

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onClickopen = () => {
    setModifiedModalVisible(true);
  };
  return (
    <MoreWrapper>
      <MoreButton onClick={toggling} />
      {isOpen && (
        <DropDownListContainer>
          <Ul>
            <Li onClick={onClickopen}>변경</Li>
            {ModifiedmodalVisible && (
              <IsEditPopup visible={ModifiedmodalVisible}></IsEditPopup>
            )}

            <Li>삭제</Li>
          </Ul>
        </DropDownListContainer>
      )}
    </MoreWrapper>
  );
};

export const MoreWrapper = styled.div`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  display: flex;
  float: right;
  margin: px;
`;

const Info = ({ data }) => {
  const newData = data.list;
  return (
    <div>
      <InfoWrapper>
        {newData.map((item) => (
          <div>
            <MoreButton />
            <ListBox list={item}></ListBox>
          </div>
        ))}
      </InfoWrapper>
    </div>
  );
};

export default Info;
