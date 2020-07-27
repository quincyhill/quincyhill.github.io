import React, { ReactNode } from "react";
import Card from "react-bootstrap/Card";

interface DropDownContentProps {
  children: ReactNode;
}

function DropDownContent(props: DropDownContentProps) {
  return (
    <Card className="bg-dark text-light">
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
}

export default DropDownContent;
