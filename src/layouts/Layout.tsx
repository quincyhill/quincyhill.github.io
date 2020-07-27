import React, { ReactNode } from "react";
import Container from "react-bootstrap/Container";
import MainNavbar from "../components/MainNavbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <Container
      fluid
      className="p-0 bg-dark"
      style={{ overflowX: "hidden", width: "100%" }}
    >
      <Row>
        <Col>
          <MainNavbar />
        </Col>
      </Row>
      <Row>
        <Col>{props.children}</Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row className="text-center top10 text-light">
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
