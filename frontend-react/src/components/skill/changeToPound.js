import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SmallInput, InputLabel } from "../common/input";
const ContinerWrapper = styled.div`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  width: 230px;
  height: 100%;
  margin: 10px;
  padding: 10px;
`;
const StyledInputLabel = styled(InputLabel)`
  margin-bottom: 5px;
`;
const ChangeToKg = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult(Math.ceil(value * 2.2));
  });
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <ContinerWrapper>
        kg -> pound<br></br>
        <StyledInputLabel htmlFor="value">몇 kg입니까</StyledInputLabel>
        <SmallInput id="value" onChange={onChange}></SmallInput>
        {result}pound입니다.
      </ContinerWrapper>
    </div>
  );
};

export default ChangeToKg;
