import React, { ReactNode } from "react";
import { dropdownBackgroundColor } from "../themes/colors";

interface DropDownContentProps {
  children: ReactNode;
}

function DropDownContent({ children }: DropDownContentProps) {
  return (
    <div className="card" style={{ backgroundColor: dropdownBackgroundColor }}>
      <div className="card-body" style={{ backgroundColor: "transparent" }}>
        {children}
      </div>
    </div>
  );
}

export default DropDownContent;
