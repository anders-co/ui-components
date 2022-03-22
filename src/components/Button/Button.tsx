import React from "react";
import styled from "styled-components";

interface Props {
  disabled?: boolean;
}

export const Button = styled.button<Props>`
  appearance: none;
   border-radius: 0.12em;
   padding: 0.5em 1.4em;
  font-size: 22px;
  font-weight: normal;
  background-color: white;
  color: black;
  border: 1px solid #000;

  ${({ disabled }) =>
    disabled &&
    `
    color: #ccc;
    border: 1px solid #666;
  `}
`;
