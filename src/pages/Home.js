import React from "react";
import { Hero } from "../components/Hero";
import { ServicesCollection } from "../components/Services";
import { BusinessProcess } from "../components/BusinessProcess";
import { Welcome } from "../components/welcome";
import { Anime } from "../components/Anime";

export const Home = (props) => {
  return (
    <>
      <Hero />
      <ServicesCollection />
      <BusinessProcess />
      <Welcome />
    </>
  );
};
