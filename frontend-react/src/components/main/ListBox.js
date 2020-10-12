import React, { useState } from "react";
import styled from "styled-components";
import { MediumText, BoldText } from "../common/text";

import { ReactComponent as More } from "../../icons/More.svg";
import { Ul, Li, DropDownListContainer } from "../common/dropdown";
import IsEditPopup from "./isEdit";

export const BoxWrapper = styled.div`
  margin: 10px;
  border: 1px solid #dddddd;
  width: 400px;
`;

const ListTitle = ({ title }) => {
  return (
    <div>
      <BoldText size="12">{title}</BoldText>
    </div>
  );
};

const ListContents = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <MediumText size="12">
          {item.name}/{item.reps}time/{item.sets}reps
        </MediumText>
      ))}
    </div>
  );
};

export const MoreWrapper = styled.div`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  display: flex;
  float: right;
  margin: 20px;
`;

export const MoreButton = ({ onClick }) => {
  return (
    <MoreWrapper>
      <More onClick={onClick}></More>
    </MoreWrapper>
  );
};

const ListBox = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ModifiedmodalVisible, setModifiedModalVisible] = useState(false);

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onClickopen = () => {
    setModifiedModalVisible(true);
  };
  return (
    <div>
      <BoxWrapper>
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
        <ListTitle title={list.title}></ListTitle>
        <ListContents list={list.routine}></ListContents>
      </BoxWrapper>
    </div>
  );
};

export default ListBox;
