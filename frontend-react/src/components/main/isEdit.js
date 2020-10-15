import React, { useState } from "react";
import styled from "styled-components";
import { LargeFormPopup } from "../common/formPopup";
const Container = styled.div`
  margin: 20px 0;
`;

const SectionContainer = styled.div`
  margin: 0 30px;
`;

function IsEditPopup({ isEdit, popup }) {
  const [memberEditPopupVisible, setMemberEditPopupVisible] = useState(false);

  const onClose = () => {
    setMemberEditPopupVisible(false);
  };

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
      {memberEditPopupVisible ? (
        <LargeFormPopup
          properties={{
            ...properties,
            content: <Container></Container>,
          }}
        ></LargeFormPopup>
      ) : null}
    </>
  );
}

export default IsEditPopup;
