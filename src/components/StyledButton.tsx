import React from "react";
import styled from "styled-components";
import { primaryColor } from "../themes/colors";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${primaryColor};
  color: ${primaryColor};
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default StyledButton;