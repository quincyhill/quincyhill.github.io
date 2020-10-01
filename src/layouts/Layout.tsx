import React, { ReactNode } from "react";
import { darkerGrey } from "../themes/colors";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div
      className="container-fluid p-0"
      style={{
        overflowX: "hidden",
        minHeight: "100vh",
        backgroundColor: darkerGrey,
      }}
    >
      <div>{children}</div>
      <br />
      <br />
      <div className="text-center text-light">
        <p>Copyright &copy; 2020 Quincy Hill</p>
      </div>
      <br />
    </div>
  );
}

export default Layout;
