import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { primaryColor } from "../themes/colors";
import MainLogo from "./MainLogo";

function MainNavbar() {
  return (
    <Navbar className="bg-dark">
      <Navbar.Brand href="/" style={{ color: primaryColor }}>
        <MainLogo />
      </Navbar.Brand>
    </Navbar>
  );
}

export default MainNavbar;
