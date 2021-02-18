import { MediaLink } from "../context/media";
import { LanguageText } from "../context";
import { PageWallpaper } from "../components/PageWallapper";
import React from "react";
import { Welcome } from "../components/welcome";

export const NotFound = () => {
  return (
    <>
      <PageWallpaper image={MediaLink({ name: "services" })}>
        <div className="d-none d-md-block">
          <h1 className="font-weight-bolder display-2">404</h1>
          <h2 className="font-weight-lighter">
            <LanguageText t="Страница не найдена" />
          </h2>
        </div>
        <div className="d-block d-md-none">
          <h1 className="font-weight-bolder">404</h1>
          <h4 className="font-weight-lighter">
            <LanguageText t="Страница не найдена" />
          </h4>
        </div>
      </PageWallpaper>
      <Welcome />
    </>
  );
};
