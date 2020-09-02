import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { primaryColor, black } from "../themes/colors";
import MainLogo from "./MainLogo";

function MainNavbar() {
  return (
    <Navbar style={{ backgroundColor: black }}>
      <Container className="justify-content-center">
        <Navbar.Brand href="/" style={{ color: primaryColor }}>
          <MainLogo />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
