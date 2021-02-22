import white from "../assets/images/logo-white.png";
import red from "../assets/images/logo-red.png";
import React from "react";
import { Link } from "react-router-dom";
const style = {
  default: white,
  white: white,
  red: red,
};
export const Logo = (props) => {
  const type = props.type ? props.type : "default";
  return (
    <>
      <Link to={"/"}>
        <img src={style[type]} alt="ACC Logo" style={{ width: "100%" }} />
      </Link>
    </>
  );
};
