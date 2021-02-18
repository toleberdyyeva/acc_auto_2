import React from "react";

// @ts-ignore
const reqSvgs = require.context("../assets/icons/", true, /\.png$/);
const svgs = reqSvgs.keys().map((item) => ({
  icon: item.replace("/", "").replace(".", "").replace("png", ""),
  file: reqSvgs(item).default,
}));

const Icons = () => {
  let icons_pack = {};
  svgs.map(({ icon, file }) => {
    icons_pack[icon] = file;
  });
  return icons_pack;
};

export const Icon = ({ icon, src }) => {
  let loaded_icon = icon ? Icons()[icon] : icon;
  let image = src ? src : loaded_icon;
  return (
    <>
      <img style={{ transition: ".4s" }} src={image} alt="" width={"100%"} />
    </>
  );
};
