import styled from "styled-components";

export const LargeInput = styled.input`
  width: 340px;
  height: 50px;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  margin: 0;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  letter-spacing: -0.0002em;
  color: #000;
  pointer-events: ${({ inactive }) => (inactive ? "none" : "auto")};
`;

export const MediumInput = styled(LargeInput)`
  width: ${(props) => (props.width ? props.width : "320px")};
`;

export const SmallInput = styled(LargeInput)`
  width: 150px;
  height: 40px;
  ::placeholder {
    text-align: ${(props) =>
      props.placeholderTextAlign ? props.placeholderTextAlign : "left"};
  }
`;

export const NoneBorderLabelInput = styled(SmallInput)`
  width: 140px;
  height: 20px;
  border: none;
  outline: none;
`;

export const NoneBorderLargeInput = styled(LargeInput)`
  width: 650px;
  border: none;
  outline: none;
`;

export const StretchInput = styled(LargeInput)`
  width: 100%;
`;

export const FullInput = styled(LargeInput).attrs({
  as: "textarea",
})`
  width: 700px;
  height: 100px;
  padding: 15px 12px 15px 12px;
  resize: none;
`;

export const CurrencyInput = styled(SmallInput).attrs((_) => ({
  thousandSeparator: true,
  thousandsGroupStyle: "thousand",
  allowNegative: false,
  allowLeadingZeros: false,
}))`
  text-align: right;
  ::placeholder {
    text-align: right;
  }
`;

export const CapacityInput = styled(SmallInput).attrs((_) => ({
  allowNegative: false,
  allowLeadingZeros: false,
}))`
  text-align: right;
  ::placeholder {
    text-align: right;
  }
  width: 160px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 10px;
`;

export const InputWrapperWithRightAlign = styled(InputWrapper)`
  input {
    text-align: end;

    &::placeholder {
      text-align: end;
    }
  }
`;

export const InputLabel = styled.label`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 10px;
`;
