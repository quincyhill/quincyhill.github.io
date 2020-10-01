import React from "react";
import { black } from "../themes/colors";
import MainLogo from "./MainLogo";
import { primaryColor } from "../themes/colors";

function MainNavbar() {
  return (
    <div
      className="text-center text-light"
      style={{
        backgroundImage: `linear-gradient(to top, ${black}00 5%, ${black})`,
      }}
    >
      <br />
      <MainLogo />
      <h1>Quincy Hill</h1>
      <br />
      <h4>Engineer | Developer</h4>
      <br />
      <p>therealquincyhill@gmail.com</p>
      <p>224-256-0892</p>
      <p>
        <a style={{ color: primaryColor }} href="https://github.com/quincyhill">
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
    </div>
  );
}

export default MainNavbar;
