import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import StyledButton from "../components/StyledButton";
import DropDownItem from "../components/DropDownItem";
import {
  primaryColor,
  backgroundColor1,
  backgroundColor2,
  darkGrey,
  black,
} from "../themes/colors";

function Home() {
  return (
    <Container
      fluid
      className="p-0 text-light"
      style={{
        minHeight: "80vh",
        backgroundImage: `linear-gradient(to bottom, ${backgroundColor1}, ${backgroundColor2})`,
      }}
    >
      <Row>
        <Col>
          <Jumbotron
            fluid
            className="text-center"
            style={{
              backgroundColor: "transparent",
              backgroundImage: `linear-gradient(to top, ${black}00 5%, ${black})`,
            }}
          >
            <h1>Quincy Hill</h1>
            <br />
            <h4>Engineer | Developer</h4>
            <br />
            <p>therealquincyhill@gmail.com</p>
            <p>224-256-0892</p>
            <p>
              <a
                style={{ color: primaryColor }}
                href="https://github.com/quincyhill"
              >
                Github
              </a>
            </p>
            <p>
              <a
                style={{ color: primaryColor }}
                href="https://www.linkedin.com/in/quincy-hill-4bb550176"
              >
                Linked In
              </a>
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <Container>
        <Row className="text-center">
          <Col>
            <DropDownItem buttonText="Goals">
              <p>
                Delivering useful and elegant mobile solutions with a strong
                inclination to learn.
              </p>
            </DropDownItem>
            <br />
            <DropDownItem buttonText="Education">
              <p>Engineering Transfer Undergraduate, College of Lake County</p>
            </DropDownItem>
            <br />
            <DropDownItem buttonText="Projects | Experience">
              <React.Fragment>
                <h3>Personal Projects: </h3>
                <a
                  style={{ color: primaryColor }}
                  href="https://github.com/quincyhill/django_practice"
                >
                  Backend Work
                </a>
              </React.Fragment>
            </DropDownItem>
            <br />
            <DropDownItem buttonText="Skill Set">
              <React.Fragment>
                <h3>Proficient</h3>
                <p>React JS</p>
                <p>React Native</p>
                <p>Typescript</p>
                <p>Javascript</p>
                <p>Python 3</p>
                <p>Django</p>
                <p>Git</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Linux</p>
                <h3>Understands</h3>
                <p>Java</p>
                <p>C#</p>
                <p>Lua</p>
              </React.Fragment>
            </DropDownItem>
            <br />
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
