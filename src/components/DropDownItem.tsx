import React, { useState, ReactNode } from "react";
import StyledButton from "./StyledButton";
import DropDownContent from "./DropDownContent";

interface DropDownItemProps {
  title: string;
  children: ReactNode;
}

function DropDownItem(props: DropDownItemProps) {
  let [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="text-light">
      <StyledButton onClick={handleClick}>{props.title}</StyledButton>
      <br />
      <br />
      {isClicked ? <DropDownContent children={props.children} /> : null}
    </div>
  );
}

export default DropDownItem;
