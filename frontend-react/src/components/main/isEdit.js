import React from "react";
import styled from "styled-components";
import { LargeFormPopup } from "../common/formPopup";
const Container = styled.div`
  margin: 20px 0;
`;

const SectionContainer = styled.div`
  margin: 0 30px;
  z-index: 5;
`;

function IsEditPopup({ isEdit, visible, onClose }) {
  const properties = {
    title: isEdit ? "변경" : "추가",
    leftButton: {
      title: "닫기",
      action: onClose,
    },
    rightButton: {
      title: isEdit ? "변경하기" : "추가하기",
    },
  };

  return (
    <>
      <LargeFormPopup
        properties={{
          ...properties,
          content: <Container></Container>,
        }}
      ></LargeFormPopup>
    </>
  );
}

export default IsEditPopup;
