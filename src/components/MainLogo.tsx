import React from "react";
import Image from "react-bootstrap/Image";
import test from "../assets/test.svg";

function MainLogo() {
  let size: number = 50;
  return <Image src={test} width={size} height={size} />;
}

export default MainLogo;
