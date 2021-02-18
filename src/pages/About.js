import { PageWallpaper } from "../components/PageWallapper";
import React from "react";
import { MediaLink } from "../context/media";
import { LanguageText } from "../context";
import { Title } from "../components/title";
import { CardsTeam } from "../components/CardsTeam";
import { ServicesCollection } from "../components/Services";
import { BusinessProcess } from "../components/BusinessProcess";
import { Welcome } from "../components/welcome";

export const About = (props) => {
  return (
    <>
      <PageWallpaper image={MediaLink({ name: "about" })}>
        <div className="d-none d-md-block">
          <h1 className="font-weight-bolder display-2">
            <LanguageText t="О Компании" />
          </h1>
          <h3 className="font-weight-lighter">
            <LanguageText t="О Компании Описание" />
          </h3>
        </div>
        <div className="d-block d-md-none">
          <h1 className="font-weight-bolder ">
            <LanguageText t="О Компании" />
          </h1>
          <h4 className="font-weight-lighter">
            <LanguageText t="О Компании Описание" />
          </h4>
        </div>
      </PageWallpaper>
      <Title t={"Команда"} />
      <CardsTeam />
      <BusinessProcess />
      <ServicesCollection all />
      <Welcome />
    </>
  );
};
