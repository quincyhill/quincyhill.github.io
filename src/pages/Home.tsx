import React from "react";
import DropDownItem from "../components/DropDownItem";
import {
  primaryColor,
  backgroundColor1,
  backgroundColor2,
} from "../themes/colors";
import MainHeader from "../components/MainHeader";

function Home() {
  return (
    <div
      className="text-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(to bottom, ${backgroundColor1}, ${backgroundColor2})`,
      }}
    >
      <MainHeader />
      <div className="container">
        <br />
        <DropDownItem title="Goals">
          <p>
            Delivering useful and elegant mobile solutions with a strong
            inclination to learn.
          </p>
        </DropDownItem>
        <br />
        <DropDownItem title="Education">
          <p>Engineering Transfer Undergraduate, College of Lake County</p>
        </DropDownItem>
        <br />
        <DropDownItem title="Projects | Experience">
          <h3>Personal Projects: </h3>
          <a
            style={{ color: primaryColor }}
            href="https://github.com/quincyhill/django_practice"
          >
            Backend Work
          </a>
        </DropDownItem>
        <br />
        <DropDownItem title="Skill Set">
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
        </DropDownItem>
      </div>
      <br />
    </div>
  );
}

export default Home;
