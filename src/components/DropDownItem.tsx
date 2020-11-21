import React, { useState, ReactNode } from "react";
import { darkGrey, primaryColor, darkerGrey } from "../themes/colors";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

interface DropDownItemProps {
  title: string;
  children: ReactNode;
}
interface DropDownContentProps {
  children: ReactNode;
}

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${primaryColor};
  color: ${primaryColor};
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    color: ${darkGrey};
    background: ${primaryColor};
  }
`;

function DropDownContent({ children }: DropDownContentProps) {
  return (
    <Card style={{ backgroundColor: darkerGrey }}>
      <Card.Body style={{ backgroundColor: "transparent" }}>
        {children}
      </Card.Body>
    </Card>
  );
}

function DropDownItem({title, children}: DropDownItemProps) {
  let [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="text-light">
      <StyledButton onClick={handleClick}>{title}</StyledButton>
      <br />
      <br />
      {isClicked ? <DropDownContent children={children} /> : null}
    </div>
  );
}

export default DropDownItem;
