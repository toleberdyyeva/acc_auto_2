import { Welcome } from "../components/welcome";
import React from "react";
import { MediaLink } from "../context/media";
import { LanguageText } from "../context";
import { PageWallpaper } from "../components/PageWallapper";
import { ServicesCollection } from "../components/Services";

export const Services = (props) => {
  return (
    <>
      <PageWallpaper image={MediaLink({ name: "services" })}>
        <div className="d-none d-md-block">
          <h1 className="font-weight-bolder display-2">
            <LanguageText t="Услуги" />
          </h1>
          <h3 className="font-weight-lighter">
            <LanguageText t="Услуги Описание" />
          </h3>
        </div>
        <div className="d-block d-md-none">
          <h1 className="font-weight-bolder">
            <LanguageText t="Услуги" />
          </h1>
          <h4 className="font-weight-lighter">
            <LanguageText t="Услуги Описание" />
          </h4>
        </div>
      </PageWallpaper>
      {/*Services*/}
      <ServicesCollection all={true} />
      <Welcome />
      {/*<Hero />*/}
      {/*<Services />*/}
      {/*<BusinessProcess />*/}
    </>
  );
};
