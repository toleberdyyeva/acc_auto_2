import white from "../assets/images/logo-white.png";
import red from "../assets/images/logo-red.png";
import React from "react";
const style = {
  default: white,
  white: white,
  red: red,
};
export const Logo = (props) => {
  const type = props.type ? props.type : "default";
  return (
    <>
      <img src={style[type]} alt="ACC Logo" style={{ width: "100%" }} />
    </>
  );
};
