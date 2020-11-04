import styled, { css } from "styled-components";

export const MediumBtn = styled.button`
  width: ${(props) => props.size};
  height: 40px;
  background-color: black;
  color: white;
  border-radius: 5px;
  margin: 5px;
`;

export const LargeButton = styled.button`
  background: #1f1e1d;
  color: #fff;
  border-radius: 4px;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.0002em;
  width: 340px;
  height: 55px;
  border: none;
  :hover {
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.26);
  }
  :focus {
    outline: none;
  }
`;

export const MediumButton = styled(LargeButton)`
  width: 120px;
  height: 50px;
`;
export const SmallButton = styled(LargeButton)`
  width: ${(props) => (props.width ? props.width : "90px")};
  height: 50px;

  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}
`;
