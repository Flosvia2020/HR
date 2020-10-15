import React, { useState } from "react";
import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";
import { MediumButton } from "./button";
import { NoneBorderLabelInput, StretchInput } from "../common/input";

const Popup = styled.div`
  width: 400px;
  z-index: 1;
  height: 300px;
  background-color: #fff;
  box-shadow: -20px 4px 34px rgba(0, 0, 0, 0.09);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const PopupHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 50px;
  border-bottom: 1px solid #ddd;
`;

const PopupTitle = styled.div`
  flex: 1;
  padding: 0px 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

const PopupContent = styled(PerfectScrollbar)`
  width: ${(props) => (props.size ? `${props.size}px` : "fit-content")};
  flex: 1;
  overflow-y: auto;
  resize: none;
  border: none;
`;

const PopupFooter = styled.div`
  width: 100%;
  flex: 0 0 80px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LeftButton = styled.button`
  width: 90px;
  height: 50px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  margin-right: 20px;
  :hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.26);
  }
  :focus {
    outline: none;
  }
`;
function FormPopup(props) {
  const { properties, size } = props;
  const [title, setTitle] = useState("");
  const [decription, setDecription] = useState("");

  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChanged = (e) => {
    setDecription(e.target.value);
  };

  const onSubmit = () => {
    console.log(title, decription); // 연동
  };

  const onClose = () => {
    console.log("닫기");
  };
  return (
    <Popup size={size}>
      <PopupHeader size={size}>
        <PopupTitle>{properties.title}</PopupTitle>
      </PopupHeader>
      <NoneBorderLabelInput
        id="title"
        type="text"
        placeholder="title"
        onChange={onTitleChanged}
      />
      <StretchInput
        id="decription"
        type="text"
        placeholder="운동-횟수-세트수"
        onChange={onDescriptionChanged}
      />
      <PopupFooter>
        {properties.leftButton && (
          <LeftButton onClick={properties.leftButton.action}>
            {properties.leftButton.title}
          </LeftButton>
        )}
        {properties.rightButton && (
          <MediumButton onClick={onSubmit} style={{ marginRight: "30px" }}>
            {properties.rightButton.title}
          </MediumButton>
        )}
      </PopupFooter>
    </Popup>
  );
}

export function LargeFormPopup(props) {
  const { properties } = props;

  return <FormPopup size={760} properties={properties} />;
}

export function ContentFitFormPopup(props) {
  const { properties } = props;

  return <FormPopup properties={properties} />;
}

export function SmallFormPopup(props) {
  const { properties } = props;

  return <FormPopup size={520} properties={properties} />;
}
