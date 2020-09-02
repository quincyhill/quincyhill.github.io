import React, { ReactNode } from "react";
import Card from "react-bootstrap/Card";
import { dropdownBackgroundColor } from "../themes/colors";

interface DropDownContentProps {
  children: ReactNode;
}

function DropDownContent({ children }: DropDownContentProps) {
  return (
    <Card
      className="text-light "
      style={{ backgroundColor: dropdownBackgroundColor }}
    >
      <Card.Body style={{ backgroundColor: "transparent" }}>
        {children}
      </Card.Body>
    </Card>
  );
}

export default DropDownContent;
