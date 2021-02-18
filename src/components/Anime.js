import ScrollAnimation from "react-animate-on-scroll";
import React from "react";

export const Anime = ({ children }) => {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={0.5}>
        {children}
      </ScrollAnimation>
    </>
  );
};
