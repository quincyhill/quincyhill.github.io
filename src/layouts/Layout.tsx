import React, { ReactNode } from "react";
import Container from "react-bootstrap/Container";
import MainNavbar from "../components/MainNavbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import andromeda from "../assets/andromeda.jpg";
import starnight from "../assets/starnight.jpg";
import { darkerGrey } from "../themes/colors";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container
      fluid
      className="p-0 "
      style={{
        overflowX: "hidden",
        minHeight: "100vh",
        backgroundColor: darkerGrey,
      }}
    >
      <Row>
        <Col>
          <MainNavbar />
        </Col>
      </Row>
      <Row
        style={{
          backgroundImage: `url(${starnight})`,
        }}
      >
        <Col>{children}</Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row
        className="text-center text-light"
        style={{ backgroundColor: "transparent" }}
      >
        <Col>
          <footer>
            <p>Copyright &copy; 2020 Quincy Hill</p>
          </footer>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
