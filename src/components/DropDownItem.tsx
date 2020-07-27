import React, { useState, ReactNode } from "react";
import DropDownContent from "./DropDownContent";
import StyledButton from "./StyledButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface DropDownProps {
  buttonText: string;
  children: ReactNode;
}

function DropDownItem(props: DropDownProps) {
  let [isClicked, setIsClicked] = useState(false);
  return (
    <React.Fragment>
      <StyledButton onClick={() => setIsClicked(!isClicked)}>
        {props.buttonText}
      </StyledButton>
      <Row>
        <Col>
          <br />
          {isClicked ? (
            <DropDownContent>{props.children}</DropDownContent>
          ) : null}
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default DropDownItem;
